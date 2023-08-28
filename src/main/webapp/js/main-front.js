/*
* @author:  zZZ....
* @description:
* @date: 2022/7/29
* 
* */

let localIP, eventSource;
let z_poetry=['人生的出发，总是太天真，先试再说吧。破局之后，亦有春天来到',
    '你不能通过躲避生活，去找到平静',
    '如今往回看，事事可以后悔，但事事也可以若无其事',
    '往往最出色的人偏偏会就会爱上毁灭他的人','即便矮小之人，也能投射出巨大的影子',
    '我要去赶火车，走夜路，先活过那条衰鸣的狗，再回来认我的命',
    '念旧的人总容易受伤，喜欢拿余生等一句别来无恙']; //记录文案
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, null); //提示
    AOS.init({
        duration:900
    });
});
let $backTop; let $chatBom;
$(function () {
    $backTop = $('#backTop');
    $chatBom = $('#chatBom');
    blogNProgress();/*滚动函数*/
    $('.modal').modal(); //初始化模特框
    $('.sidenav').sidenav({inDuration:500,outDuration:500}); //手机菜单
    searchFunc('/xml/search.xml', 'searchInput', 'searchResult'); //搜索
    /*回到顶部*/
    $backTop.click(function () {
       // $('body,html').animate({scrollTop: 0}, 400);
        scrollToTop();
        // if ($('#Chat').is(":hidden")){
        //     $backTop.slideUp(300);
        // }
        return false;
    });


    $chatBom.click(function (){
        $('#Chat').fadeToggle(700);
       return false;
    });

    //聊天发送
   $('#inputMessage').bind('keypress', function (event) {
       event=(event)?event:((window.event)?window.event:"");
       let keyCode=event.keyCode?event.keyCode:(event.which?event.which:event.charCode);
       let altKey = event.ctrlKey || event.metaKey;
       if(keyCode === 13 && altKey){ //ctrl+enter换行
           let newDope=$(this).val()+"\n";// 获取textarea数据进行 换行
           $(this).val(newDope);
       }else if(keyCode===13){ //enter发送
           chatSend();
           event.preventDefault();//禁止回车的默认换行
       }

   })
    $('#chatSend').click(function (){
        chatSend();
    });

   $('#bellId').click(function (){
       if (this.classList.contains("fa-bell-slash")){
           mp3Res=new Audio("/medias/videos/tururu.mp3")
           mp3Send=new Audio("/")
           this.classList.remove("fa-bell-slash")
           this.classList.add("fa-bell")
       }else {
           mp3Res=null;
           mp3Send=null
           this.classList.remove("fa-bell")
           this.classList.add("fa-bell-slash")
       }
   });

   $('#hideId').click(function (){
       $('#Chat').fadeToggle(300);
       return false;
   });

    if (!localIP){
        $.get("/blogBlogs/getIp",function (res) {
            if (res.success){
                initSSE(); //提前建立连接
                localIP =res.data;
                setCity(); //减少根据ip寻址
            }
        })
    }

    if (!getCookie('poetry')){
        $.get("/blogBlogs/poetry",function (res) {
            if (res.success && res.data && res.data.length>=p_length){
               z_poetry =res.data;
            }
        })
    }

    setPTU();

   // console.clear();  // 清空
    console.log("\n %c needle %c  但凡好剑都有自己的名号。珊莎有她的缝衣针，现在我也有了自己的“缝衣针” \n", "font-weight:900;color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
});

async function initSSE(){
    /*聊天插件*/
    if (eventSource){
        return;
    }
    if (window.EventSource) {
        let div;
        let ccm=$('#chatContentMessage');
        eventSource = new EventSource('/chat/subscribe');
        eventSource.addEventListener("receive", (event) => {
            if ((!div) || div.id!==event.lastEventId){
                div =document.createElement('div');
                div.classList.add('chat-message-robot');
                div.classList.add('chat-message');
                div.id=event.lastEventId;
            }
            document.getElementById("chatLoading").style.display='none';
           // let msg = document.createTextNode(event.data);
            ccm.append(div)
            div.innerHTML=event.data;
            let cct=$('#chatContent');
            cct.animate({
                scrollTop: cct[0].scrollHeight
            }, 500);

            if (mp3Res){
                mp3Res.loop = false
                mp3Res.play();
            }
            $("#inputMessage").removeAttr("readonly");
            $("#inputMessage").css("cursor","");

        })

        eventSource.addEventListener("over", (event) => {
            div =null;
        })

        eventSource.onopen=function (event){

        }
        eventSource.onerror=function (event){
            eventSource.close();
            eventSource=null;
            $("#inputMessage").removeAttr("readonly");
            $("#inputMessage").css("cursor","");
        }

    }else {
        window.requestAnimationFrame(function (e) {
            $('#chatContentMessage').append('<div class="chat-message-robot chat-message">你好，我是智能机器人Chat-N。你的浏览器太老旧了，切换成谷歌或者更新的ie浏览器跟我交流吧~</div>')
        });
    }

}

function blogNProgress(){
    let h1 = 0
        , h2 = 50
        , ss = $(document).scrollTop();
    NProgress.configure({ easing: 'ease', speed: 1000 ,minimum: 0.0});
    $(window).scroll(function() {
        let s = $(document).scrollTop();
        let surplus = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let coorY = s / surplus;
        NProgress.set(coorY); //进度条

        if (s === h1) {
            $(".nav-header").removeClass("nav-transparent");
            $backTop.slideUp(300);
            if ($('#Chat').is(":hidden")){
                $chatBom.slideUp(300);
            }
        }
        if (s > h1) {
            $(".nav-header").addClass("nav-transparent");

                $backTop.slideDown(300);

            $chatBom.slideDown(300);
        }
    });
    if (ss > h1) {
        $(".nav-header").addClass("nav-transparent");
        $backTop.slideDown(300);
        if ($('#Chat').is(":hidden")){
            $chatBom.slideDown(300);
        }
    }

}

//pjax
let p_index =0;
let p_length=6;
function pjax(url,index){

    $.ajax({
        url:url,
        type:'get',
        before:function(xhr){
            NProgress.start();
        },
        success:function (req) {
            NProgress.set(0.8);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            window.requestAnimationFrame(function (e) {
                 $("#pjax").html(req);
                if (z_poetry[index++ % p_length]  ){
                    $(".z-blog-poetry").html(z_poetry[index])
                }
            });

        },
        complete:function () {
            NProgress.done();
        }
    });
    setPTU();
}


/*开始阅读*/
function headertop_down(selector) {
    var coverOffset = $(selector).offset().top;
    $('html,body').animate({
        scrollTop: coverOffset
    }, 600);
}


/*搜索按钮*/
function m_modal1(selector) {
    $(selector).modal('open');
}

function searchFunc(path, search_id, content_id) {
    'use strict';
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // get the contents from search data
            let datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            let $input = document.getElementById(search_id);
            let $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                let str = '<ul class=\"search-result-list\">';
                let keywords = this.innerText.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.innerText.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    let isMatch = true;
                    let data_title = data.title.trim().toLowerCase();
                    let data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    let data_url = data.url;
                    data_url = data_url.indexOf('/') === 0 ? data.url : '/' + data_url;
                    let index_title = -1;
                    let index_content = -1;
                    let first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title !== '' && data_content !== '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i === 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    }
                    // show search results
                    if (isMatch) {
                        str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                        let content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            let start = first_occur - 20;
                            let end = first_occur + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start === 0) {
                                end = 100;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            let match_content = content.substr(start, end);
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                let regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                            });

                            str += "<p class=\"search-result\">" + match_content + "...</p>"
                        }
                        str += "</li>";
                    }
                });
                str += "</ul>";
                $resultContent.innerHTML = str;
            });
        }
    });
}
//将字符串转化为dom元素
function strToEle(str) {
    const template =`<div>${str}</div>`;
    let tempEle = document.createElement('div');
    tempEle.innerHTML = template;
    return tempEle.firstElementChild;
}
/*加载更多*/
function loading_m() {
    let div = document.querySelector(".loading-m.progress");
    div.querySelector("div").classList.add("indeterminate");
    div.querySelector("span").innerText = "正在加载";
    div.classList.remove("loading-hover")
}
function loaded_m() {
    let div = document.querySelector(".loading-m.progress");
    div.querySelector("div").classList.remove("indeterminate");
    div.querySelector("span").innerText = "加载更多";
    div.classList.add("loading-hover")
}
function loaded_rem() {

     let mp =document.querySelector(".loading-m.progress");
         if(mp){
             mp.remove()
         }

}


function setCity() {
    let city =localStorage.getItem(localIP);
    if (!city){
        $.get("/blogBlogs/getCityAndIP",function (res) {
            if (res.success){
                localStorage.setItem(res.data.ip,res.data.city);
                localIP =res.data.ip;
                document.getElementById("city").innerText=res.data.city.replace("省","").replace("市","");
            }
        })
    }else {
        document.getElementById("city").innerText=((city && city!='00') ?city:"\u8fdc\u65b9");
    }
}

function setPTU() {
    $.ajax({
        url:"/blogBlogs/ptu",
        type:"get",
        success:function (res) {
            if (res.success){
                document.getElementById("PV").innerText = res.data.PV;
                document.getElementById("TV").innerText = res.data.TV;
                document.getElementById("UV").innerText = res.data.UV;
                document.getElementById("WC").innerText = res.data.WC;
            }
        }
    })
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}
//平滑滚动到页面顶部
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

//统计网站导航使用热点
function heapAdd(id) {
    $.ajax({
        url:"/toolsController/heap?id="+id,
        type:"get",
        success:function (e) {

        }
    })

}
let mp3Send,mp3Res;
function chatSend(){
    let msg =$('#inputMessage')[0]
    if (msg.value.trim()===''){
        msg.classList.add('shake')
        setTimeout(()=>{ msg.classList.remove('shake') }, 800)
        return false;
    }

    initSSE().then( //发送之前检查是否建立连接

        window.requestAnimationFrame(function (e) {
            if (mp3Send){ //发送提示音

                mp3Send.loop = false
                mp3Send.play().then(r => {

                })
            }

            let ccm = $('#chatContentMessage');
            let im =$('#inputMessage');
            let content=im.val().trim();
            ccm.append('<div class="chat-message-me chat-message">'+content+ '</div>');
            im.val('');
            let chatLoading = document.getElementById("chatLoading");
            ccm.append(chatLoading)
            chatLoading.style.display='block';
            im.attr("readonly","readonly");
            im.css("cursor","not-allowed");
            let cct=$('#chatContent');
            cct.animate({
                scrollTop: cct[0].scrollHeight
            }, 500);

            let conData ={"content":content};
            $.ajax({
                url:"/chat/send",
                type:"post",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data:JSON.stringify(conData)
            })

        })
    ); //检查连接


}

//获取系统版本，和浏览器版本
function getVersionToJson(e) {
    e = e || navigator.userAgent;
    let t = {}
        , n = {
        Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
        Presto: e.indexOf("Presto") > -1,
        WebKit: e.indexOf("AppleWebKit") > -1,
        Gecko: e.indexOf("Gecko/") > -1,
        Safari: e.indexOf("Safari") > -1,
        Edge: e.indexOf("Edge") > -1 || e.indexOf("Edg") > -1,
        Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
        IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
        Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
        "Firefox Focus": e.indexOf("Focus") > -1,
        Chromium: e.indexOf("Chromium") > -1,
        Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
        Vivaldi: e.indexOf("Vivaldi") > -1,
        Yandex: e.indexOf("YaBrowser") > -1,
        Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
        360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
        UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
        QQBrowser: e.indexOf("QQBrowser") > -1,
        QQ: e.indexOf("QQ/") > -1,
        Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
        Maxthon: e.indexOf("Maxthon") > -1,
        Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
        LBBROWSER: e.indexOf("LBBROWSER") > -1,
        "2345Explorer": e.indexOf("2345Explorer") > -1,
        TheWorld: e.indexOf("TheWorld") > -1,
        XiaoMi: e.indexOf("MiuiBrowser") > -1,
        Quark: e.indexOf("Quark") > -1,
        Qiyu: e.indexOf("Qiyu") > -1,
        Wechat: e.indexOf("MicroMessenger") > -1,
        Taobao: e.indexOf("AliApp(TB") > -1,
        Alipay: e.indexOf("AliApp(AP") > -1,
        Weibo: e.indexOf("Weibo") > -1,
        Douban: e.indexOf("com.douban.frodo") > -1,
        Suning: e.indexOf("SNEBUY-APP") > -1,
        iQiYi: e.indexOf("IqiyiApp") > -1,
        Windows: e.indexOf("Windows") > -1,
        Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
        macOS: e.indexOf("Macintosh") > -1,
        Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
        // 'Ubuntu': e.indexOf("Ubuntu") > -1,
        FreeBSD: e.indexOf("FreeBSD") > -1,
        Debian: e.indexOf("Debian") > -1,
        "Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
        BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1 || e.indexOf("BB10") > -1,
        MeeGo: e.indexOf("MeeGo") > -1,
        Symbian: e.indexOf("Symbian") > -1,
        iOS: e.indexOf("like Mac OS X") > -1,
        "Chrome OS": e.indexOf("CrOS") > -1,
        WebOS: e.indexOf("hpwOS") > -1,
        Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
        Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Pad") > -1 || e.indexOf("Nexus 7") > -1
    };
    n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
    let r = {
        browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
        os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"]
    };
    for (let o in r)
        if (r.hasOwnProperty(o))
            for (let i = 0, a = r[o].length; i < a; i++) {
                let s = r[o][i];
                n[s] && (t[o] = s)
            }
    let l = {
        Windows: function() {
            let t = e.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
            return {
                6.4: "10",
                6.3: "8.1",
                6.2: "8",
                6.1: "7",
                "6.0": "Vista",
                5.2: "XP",
                5.1: "XP",
                "5.0": "2000"
            }[t] || t
        },
        Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
        iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
        Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
        "Windows Phone": e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
        macOS: e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
        WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
        BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1")
    };
    t.osVersion = "";
    let c = l[t.os];
    c && (t.osVersion = "function" == typeof c ? c() : c == e ? "" : c);
    let u = {
        Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
        Chrome: e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
        IE: e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
        Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
        Firefox: e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
        "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
        Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
        Opera: e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
        Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
        Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
        Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
        Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
        QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
        QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
        Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
        UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
        Sogou: e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
        "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
        TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
        XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
        Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
        Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
        Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
        Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
        Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
        Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
        Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
        Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
        iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
    };
    t.version = "";
    let f = u[t.browser];
    return f && (t.version = "function" == typeof f ? f() : f == e ? "" : f),
    void 0 == t.browser && (t.browser = "Unknow App"),
        t
}

