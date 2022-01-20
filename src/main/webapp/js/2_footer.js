/*
    @author:  zZZ....
    @description: 尾部 js
    @date: 2022/1/19
*/
document.write(

//a
//region

    '<footer class="page-footer bg-color">\n' +
    '\n' +
    '    <!--音乐 start-->\n' +
    '    <link rel="stylesheet" href="../libs/aplayer/APlayer.min.css">\n' +
    '    <!--    控制 折叠效果-->\n' +
    '    <style>\n' +
    '        .aplayer .aplayer-lrc p {\n' +
    '\n' +
    '            font-size: 12px;\n' +
    '            font-weight: 700;\n' +
    '            line-height: 16px !important;\n' +
    '        }\n' +
    '\n' +
    '        .aplayer .aplayer-lrc p.aplayer-lrc-current {\n' +
    '\n' +
    '            font-size: 15px;\n' +
    '            color: #42b983;\n' +
    '        }\n' +
    '\n' +
    '\n' +
    '        .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {\n' +
    '            left: -66px !important;\n' +
    '        }\n' +
    '\n' +
    '        .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {\n' +
    '            left: 0px !important;\n' +
    '        }\n' +
    '\n' +
    '\n' +
    '    </style>\n' +
    '    <script src="../libs/aplayer/APlayer.min.js"></script>\n' +
    '    <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>\n' +
    '\n' +
    '    <!--    这段没显示，后面看-->\n' +
    '    <!--   <div class="">\n' +
    '   \n' +
    '           <div class="row">\n' +
    '               <meting-js class="col l8 offset-l2 m10 offset-m1 s12" server="netease" type="playlist" id="503838841"\n' +
    '                          fixed="true" autoplay="false" theme="#42b983" loop="all" order="random" preload="auto"\n' +
    '                          volume="0.7" list-folded="true">\n' +
    '               </meting-js>\n' +
    '           </div>\n' +
    '       </div>-->\n' +
    '    <meting-js\n' +
    '            server="netease"\n' +
    '            type="playlist"\n' +
    '            id="60198"\n' +
    '            fixed="true"\n' +
    '            autoplay="true"\n' +
    '            loop="all"\n' +
    '            order="random"\n' +
    '            preload="auto"\n' +
    '            list-folded="ture"\n' +
    '            list-max-height="500px"\n' +
    '            lrc-type="1">\n' +
    '    </meting-js>\n' +
    '    <!--音乐 end-->\n' +
    '\n' +
    '    <!--页脚 网站信息说明 start-->\n' +
    '    <div class="container row center-align" style="margin-bottom: 15px !important;">\n' +
    '        <div class="col s12 m8 l8 copy-right">\n' +
    '            Copyright&nbsp;©\n' +
    '\n' +
    '            <span id="year">2018 - 2022</span>\n' +
    '\n' +
    '            <span id="year">2018</span>\n' +
    '            <a href="/about" target="_blank">blinkfox</a>\n' +
    '            |&nbsp;Powered by&nbsp;<a href="https://hexo.io/" target="_blank">Hexo</a>\n' +
    '            |&nbsp;Theme&nbsp;<a href="https://github.com/blinkfox/hexo-theme-matery" target="_blank">Matery</a>\n' +
    '            <br>\n' +
    '\n' +
    '            &nbsp;<i class="fas fa-chart-area"></i>&nbsp;站点总字数:&nbsp;<span class="white-color">197k</span>&nbsp;字\n' +
    '\n' +
    '\n' +
    '            <span id="busuanzi_container_site_pv" style="display: inline;">\n' +
    '                |&nbsp;<i class="far fa-eye"></i>&nbsp;总访问量:&nbsp;<span id="busuanzi_value_site_pv" class="white-color">324059</span>&nbsp;次\n' +
    '            </span>\n' +
    '\n' +
    '\n' +
    '            <span id="busuanzi_container_site_uv" style="display: inline;">\n' +
    '                |&nbsp;<i class="fas fa-users"></i>&nbsp;总访问人数:&nbsp;<span id="busuanzi_value_site_uv"\n' +
    '                                                                           class="white-color">67776</span>&nbsp;人\n' +
    '            </span>\n' +
    '\n' +
    '            <br>\n' +
    '\n' +
    '            <span id="sitetime">本站已安全运行 3 年 117 天 16 小时 10 分钟 56 秒</span>\n' +
    '            <script>\n' +
    '                function siteTime() {\n' +
    '                    var seconds = 1000;\n' +
    '                    var minutes = seconds * 60;\n' +
    '                    var hours = minutes * 60;\n' +
    '                    var days = hours * 24;\n' +
    '                    var years = days * 365;\n' +
    '                    var today = new Date();\n' +
    '                    var startYear = "2018";\n' +
    '                    var startMonth = "09";\n' +
    '                    var startDate = "20";\n' +
    '                    var startHour = "0";\n' +
    '                    var startMinute = "0";\n' +
    '                    var startSecond = "0";\n' +
    '                    var todayYear = today.getFullYear();\n' +
    '                    var todayMonth = today.getMonth() + 1;\n' +
    '                    var todayDate = today.getDate();\n' +
    '                    var todayHour = today.getHours();\n' +
    '                    var todayMinute = today.getMinutes();\n' +
    '                    var todaySecond = today.getSeconds();\n' +
    '                    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);\n' +
    '                    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);\n' +
    '                    var diff = t2 - t1;\n' +
    '                    var diffYears = Math.floor(diff / years);\n' +
    '                    var diffDays = Math.floor((diff / days) - diffYears * 365);\n' +
    '                    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);\n' +
    '                    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /\n' +
    '                        minutes);\n' +
    '                    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -\n' +
    '                        diffMinutes * minutes) / seconds);\n' +
    '                    if (startYear == todayYear) {\n' +
    '                        document.getElementById("year").innerHTML = todayYear;\n' +
    '                        document.getElementById("sitetime").innerHTML = "本站已安全运行 " + diffDays + " 天 " + diffHours +\n' +
    '                            " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";\n' +
    '                    } else {\n' +
    '                        document.getElementById("year").innerHTML = startYear + " - " + todayYear;\n' +
    '                        document.getElementById("sitetime").innerHTML = "本站已安全运行 " + diffYears + " 年 " + diffDays +\n' +
    '                            " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";\n' +
    '                    }\n' +
    '                }\n' +
    '\n' +
    '                setInterval(siteTime, 1000);\n' +
    '            </script>\n' +
    '\n' +
    '            <br>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="col s12 m4 l4 social-link social-statis">\n' +
    '            <a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub"\n' +
    '               data-position="top" data-delay="50">\n' +
    '                <i class="fab fa-github"></i>\n' +
    '            </a>\n' +
    '\n' +
    '\n' +
    '            <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank" data-tooltip="邮件联系我"\n' +
    '               data-position="top" data-delay="50">\n' +
    '                <i class="fas fa-envelope-open"></i>\n' +
    '            </a>\n' +
    '\n' +
    '\n' +
    '            <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873"\n' +
    '               class="tooltipped" target="_blank" data-tooltip="QQ联系我: 1181062873" data-position="top" data-delay="50">\n' +
    '                <i class="fab fa-qq"></i>\n' +
    '            </a>\n' +
    '\n' +
    '\n' +
    '            <a href="/atom.xml" class="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top"\n' +
    '               data-delay="50">\n' +
    '                <i class="fas fa-rss"></i>\n' +
    '            </a>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!--页脚 网站信息说明 end-->\n' +
    '</footer>\n'

//endregion

//b
)