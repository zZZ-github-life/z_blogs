package online.zzzzzzz.mvc.door.Role;

public enum Role {

    guestbook(6,36,100,1000*60,1), //留言版限制次数

    chat(30,30,30,1000*60,2); //聊天机器人次数

    private int m; //1分钟内次数
    private int h; //1小时内次数
    private int t; //1天次数
    private long interval; //间隔时长

    private int type;


    Role(int m, int h, int t, long interval, int type) {
        this.m = m;
        this.h = h;
        this.t = t;
        this.interval = interval;
        this.type = type;
    }

    public int getM() {
        return m;
    }

    public void setM(int m) {
        this.m = m;
    }

    public int getH() {
        return h;
    }

    public void setH(int h) {
        this.h = h;
    }

    public int getT() {
        return t;
    }

    public void setT(int t) {
        this.t = t;
    }

    public long getInterval() {
        return interval;
    }

    public void setInterval(long interval) {
        this.interval = interval;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
