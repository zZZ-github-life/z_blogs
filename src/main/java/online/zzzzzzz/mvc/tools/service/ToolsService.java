package online.zzzzzzz.mvc.tools.service;

import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.mvc.tools.dao.ToolsMapper;
import online.zzzzzzz.mvc.tools.dao.entity.BlogTools;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/8
 */
@Service
public class ToolsService extends BaseService<ToolsMapper, BlogTools> {
    
    public List<Map> getNumAndName() {
        return mapper.getNumAndName();
    }
    
}
