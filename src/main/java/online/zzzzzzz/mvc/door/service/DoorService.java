package online.zzzzzzz.mvc.door.service;

import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.mvc.door.Role.Role;
import online.zzzzzzz.mvc.door.dao.DoorMapper;
import online.zzzzzzz.mvc.door.dao.entity.Door;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;


/**
 * 限流阀门：自由的控制多少规定时间内可以访问次数。
 *  如在时间范围 initiate --- finish 之间可以访问num次
 *  total 访问最大次数
 */
@Service
public class DoorService extends BaseService<DoorMapper, Door> {


    /**
     * 检测按照指定规则，单个分钟，小时，天内某个ip是否允许访问
     * @param ip ip
     * @param role role
     * @return 允许访问
     * @throws ParseException ParseException
     */
    public RepJson isAllowAcc(String ip,  Role role) throws ParseException {
        RepJson repJson = new RepJson();
        Door door = mapper.getByIpAndType(ip, role.getType());
        Date date = new Date();
        if (door==null || door.getId()==null){ //新访客
            door =new Door();
            door.setInitiate(date);
            door.setFinish(new Date(date.getTime()+role.getInterval()));
            door.setNum(0);
            door.setAllow(true);
            door.setIp(ip);
            door.setToday(date);
            door.setTotal(0);
            door.setType(role.getType());
            mapper.insert(door);
        }else { //正在访问的

            if (!door.getAllow()){//当前ip访问受限
                repJson.setSuccess(false);
                repJson.setCode(4);
                return repJson;
            }

            //正常限制规则
            Date today = door.getToday();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            String format = simpleDateFormat.format(date);
            Date parse = simpleDateFormat.parse(format);
            if (parse.after(today)){
                door.setInitiate(date);
                door.setFinish(new Date(date.getTime()+role.getInterval()));
                door.setNum(0);
                door.setAllow(true);
                door.setIp(ip);
                door.setToday(date);
                door.setTotal(0);
                door.setType(role.getType());
                mapper.update(door);
            }else{
                if(door.getTotal()<role.getT()){
                    if (date.after(door.getFinish())){
                        door.setInitiate(date);
                        door.setFinish(new Date(date.getTime()+role.getInterval()));
                        door.setNum(0);
                        door.setAllow(true);
                        door.setIp(ip);
                        door.setToday(date);
                        door.setTotal(door.getTotal()+1);
                        mapper.update(door);
                    }else {
                       if (door.getNum()<role.getM()){
                           door.setNum(door.getNum()+1);
                           door.setTotal(door.getTotal()+1);
                           door.setAllow(true);
                           door.setIp(ip);
                           mapper.update(door);
                       }else {
                           repJson.setSuccess(false);
                           repJson.setCode(2); //超过分钟最大次数
                       }
                    }
                }else {
                    repJson.setSuccess(false);
                    repJson.setCode(3); //超过当天最大次数
                }
            }
        }

        return repJson;
    }
}
