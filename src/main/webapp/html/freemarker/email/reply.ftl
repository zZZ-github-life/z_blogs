<#--回复模板-->
<div id="contentDiv" style="position:relative;font-size:14px;height:auto;padding:15px 15px 10px 15px;z-index:1;zoom:1;line-height:1.7;" class="body">
    <div id="qm_con_body"><div id="mailContentContainer" class="qmbox qm_con_body_content qqmail_webmail_only" style="opacity: 1;">
            <style>
                .qmbox .CAT {
                    width:550px;
                    margin:0 auto;
                    border-radius:8px 8px 0 0;
                    overflow:hidden;
                    font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                    box-shadow:0
                    2px 12px 0 rgba(0,0,0,0.1);
                    word-break:break-all;
                }
                .qmbox .CAT_title {
                    color: #fff;
                    background-size: 400% 400%;
                    background: linear-gradient(-45deg, rgba(9, 69, 138, 0.2), rgb(68 255 140 / 89%), rgb(113 154 251 / 70%), rgb(255 68 68 / 70%), rgba(9, 69, 138, 0.2)) 50% 100%;
                    padding: 15px;
                    font-size: 15px;
                    line-height: 1.5;
                }
            </style>

            <div class="CAT">
                <div class="CAT_title">
                    您的『${type}』有了新的回复：
                </div>
                <div style="background: #efefef;padding: 20px;font-size: 13px;color: #666;">
                    <div style="margin-bottom: 20px;line-height: 1.5;">
                        「 ${name} 」 在《 <a style="color: #12addb;text-decoration: none;" href="${href}" target="_blank" rel="noopener">${type}</a> 》上回复了您：
                    </div>
                    <div style="padding: 15px;margin-bottom: 20px;line-height: 1.5;background-color:white;border-radius:8px;font-size:1.2em">
                       ${content}
                    </div>
                    <span style="color: #c9ccc1;">此邮件由系统自动发送，退订请回复TD</span>
                </div>
            </div>
            <style type="text/css">.qmbox style, .qmbox script, .qmbox head, .qmbox link, .qmbox meta {display: none !important;}</style>
        </div>
    </div>
    <style>
        #mailContentContainer .txt {height:auto;}
    </style>
</div>