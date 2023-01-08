<!--
    @author:  zZZ....
    @description: 留言板
    @date: 2023/01/08
-->

<title>留言板 | zZZ....</title>

<link rel="stylesheet" type="text/css" href="/blogs/css/guestbook_style.css">
<link rel="stylesheet" type="text/css" href="/blogs/css/guestbook.css">

<style type="text/css">
    .heart {
        width: 10px;
        height: 10px;
        position: fixed;
        background: #f00;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
    }

    .heart:after, .heart:before {
        content: '';
        width: inherit;
        height: inherit;
        background: inherit;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        position: fixed;
    }

    .heart:after {
        top: -5px;
    }

    .heart:before {
        left: -5px;
    }


    /*留言板 背景图*/
    #valine_container textarea {
        box-sizing: border-box;
        background: url(/blogs/medias/comment_bg.png) 100% 100% no-repeat;
    }
    .bottom-main{
        padding-bottom: 1.6rem;
        overflow: revert;
    }
</style>

<link rel="prefetch">

<style type="text/css" data-typed-js-css="true">
    .typed-cursor {
        opacity: 1;
    }

    .typed-cursor.typed-cursor--blink {
        animation: typedjsBlink 0.7s infinite;
        -webkit-animation: typedjsBlink 0.7s infinite;
        animation: typedjsBlink 0.7s infinite;
    }

    @keyframes typedjsBlink {
        50% {
            opacity: 0.0;
        }
    }

    @-webkit-keyframes typedjsBlink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.0;
        }
        100% {
            opacity: 1;
        }
    }

</style>

<!--banner-->
<div class="height-475px" style="margin-top: -75px">
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(/blogs/medias/banner/1.jpg);visibility: visible">
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">标题</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<main class="blog-main bottom-main" >

    <!--弧度-->
    <div class="blog-bending-body top ">
        <div class="blog-bending">
        </div>
    </div>

    <div  class="container chip-container">
        <div class="card">
            <div class="card-content">
                <div data-aos="fade-in"  >
                    <div class="tag-title left-align">
                        <i class="fas fa-tags"></i>&nbsp;&nbsp;留言板
                    </div>
                    <hr/>
                    <p>既然来了，就留下足迹吧～</p>
                </div>
            </div>
        </div>
    </div>


    <div  class="container " data-aos="fade-up">
        <div class="card">
            <div class="card-content">
                <article class="post white-box reveal shadow" id="comments" data-sr-id="15" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
                    <p ct=""><i class="fas fa-comments"></i> 留言板</p>

                    <div id="valine_container" class="valine_thread v" data-class="v">
                        <div class="vpanel" data-self-id="-1">
                            <input name="headShot" id="blog_headShot" hidden>
                            <input name="blogId" id="blog_blogId" value="-1" hidden>
                            <div class="vwrap">
                                <p class="cancel-reply text-right" style="display: none;" title="取消回复">
                                    <svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22">
                                        <path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path>
                                        <path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222"></path>
                                    </svg>
                                </p>
                                <div class="vheader item3">
                                    <input name="nickname" id="blog_nickname" placeholder="昵称(输入QQ号可自动拉取头像)" class="vnick vinput" type="text"><input name="email" id="blog_email" placeholder="邮箱(留下邮箱方便收到回复别人提醒)" class="vmail vinput" type="email"><input name="link" id="blog_link" placeholder="网址(你的网址)" class="vlink vinput" type="text">
                                </div>
                                <div class="vedit">
                                    <textarea id="veditor" name="content"   class="veditor vinput" placeholder="嗨,请不要吝啬你的想法！小技巧：在昵称位置输入QQ号就可以自动补全邮箱哦~"></textarea>
                                    <div class="vrow">
                                        <div id="blog_warning" class="vcol vcol-60 status-bar"></div>
                                        <div class="vcol vcol-40 vctrl text-right">
                                            <span title="表情"  class="vicon vemoji-btn">
                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg>
                                            </span>
                                            <span title="预览" class="vicon vpreview-btn">
                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="vrow">
                                    <div class="vcol vcol-30" id="blog_guest_comments">
                                        <a title="Markdown is supported"  href="https://guides.github.com/features/mastering-markdown/"  class="vicon" target="_blank">
                                            支持Markdown语法
                                        </a>
                                    </div>
                                    <div class="vcol vcol-70 text-right">
                                        <button type="button" title="Cmd|Ctrl+Enter" id="blog_guest_commit" class="vsubmit vbtn">提交</button>
                                    </div>
                                </div>
                                <div class="vemojis" style="display: none;">
                                    <i title="qq-98"><img alt="qq-98" referrerpolicy="no-referrer" class="vemoji" src="https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/valine/qq/qq-98.gif"></i>
                                    <i title="qq-99"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/valine/qq/qq-99.gif"></i>

                                </div>
                                <div class="vinput vpreview" style="display:none;"></div>
                                <div style="display:none;" class="vmark"></div>
                            </div>
                        </div>
                        <div class="vcount" style="display: block;">
                            <span class="vnum" id="blog_guestbook_total">16</span> 留言</div>
                        <div class="vload-top text-center" style="display:none;">
                            <i class="vspinner"  style="width:30px;height:30px;"></i>
                        </div>
                        <div class="vcards">

                        </div>
                        <div class="vload-bottom text-center" style="display: none;"><i class="vspinner" style="width:30px;height:30px;"></i></div>
                        <div class="vempty" style="display:none;"></div>
                        <div class="vpage txt-center" onclick="loading(this)">
                            <button type="button" class="vmore vbtn">加载更多...</button>
                        </div>

                    </div>
                </article>
            </div>
        </div>
    </div>
</main>

<!--下一页-->
<div class="container paging">
    <div class="row">
        <div class="loading-m">
            加载更多
        </div>
    </div>
</div>

<!--留言板-->
<script>

    $(function () {
        let pageData;
        let versionToJson,browserVersion,osVersion,address,ip,blogId;

        versionToJson = getVersionToJson();
        browserVersion =versionToJson.browser+' '+versionToJson.version;
        osVersion =versionToJson.os+' '+versionToJson.osVersion;
        // address = returnCitySN.cname;
        // ip = returnCitySN.cip;
        blogId = '-1';

        document.getElementById('blog_guest_commit').onclick = commitComments;

        document.querySelector('.cancel-reply.text-right').onclick  =  function(){
            vEditorReset();
        };
        let vEmojis = document.querySelector('.vemojis');
        document.querySelector('.vicon.vemoji-btn').onclick = function(){
            if (vEmojis.style.display === 'none'){
                vEmojis.style.display = 'block';
            }else {
                vEmojis.style.display = 'none';
            }
        };

        commentList(1,10,{blogId:-1},true);



//获取留言列表
        function commentList(currentPage,pageSize,queryPerm,async) {
            if (currentPage === undefined || currentPage <=0 ){
                currentPage =1;
            }
            if(pageSize === undefined || pageSize <=0){
                pageSize =10;
            }
            pageData ={currentPage:currentPage,pageSize:pageSize,p:queryPerm};
            let spanTotal = document.querySelector('#blog_guestbook_total');
            $.ajax({
                async:!async,
                url:'/blogs/GuestBookController/list',
                type:'post',
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data:JSON.stringify(pageData),
                beforeSend:function(xhr){
                    loading();
                    let detail  =  JSON.parse(localStorage.getItem('detail'));
                    if (detail) {

                        document.getElementById('blog_nickname').value = detail.nickname;
                        document.getElementById('blog_email').value = detail.email;
                        document.getElementById('blog_link').value = detail.link;
                    }
                },
                success:function (res) {
                    //document.querySelector("#dyzgz").scrollIntoView(true); //定位到指定位置
                    loaded();
                    if (res.success && res.data.list.length >0){
                        let resData = res.data.list;
                        spanTotal.innerText = res.data.total;
                        let list ='';
                        for (let i = 0; i < resData.length; i++) {
                            resData[i].vmId = resData[i].id;
                            list += createDIV(resData[i]);
                        }
                        document.querySelector('.vcards').innerHTML = list ;
                        pageData.pageTotal = res.msg;
                    }else {
                        spanTotal.innerText = '0';
                        document.querySelector('.vcards').innerHTML = '<span style="display: inline-block;width: 100%;text-align:center;color: rgba(85,85,85,0.37)">来当第一个坐沙发的人吧~</span>'
                        //   欢迎留下第一条评论
                    }
                }
            });

        }

//提交评论
        function commitComments(){
            let blogVerify = blog_verify();
            if (blogVerify){
                timeoutAlter(blogVerify);
                return;
            }
            let textarea = document.getElementById('veditor');
            let nickname = document.getElementById('blog_nickname').value;
            let email =  document.getElementById('blog_email').value;
            let link = document.getElementById('blog_link').value;
            let headShot = document.getElementById('blog_headShot').value;

            let blogId = document.getElementById('blog_blogId').value;
            let parentElement = document.querySelector('.vwrap').parentElement;
            let parentId =parentElement.getAttribute('data-self-id');


            // let a = textarea.placeholder.indexOf('回复 ');
            let content ='';
            if (parentId!='-1'){
                let b = textarea.placeholder.indexOf('：');
                content ='回复 '+'<a href="#'+parentId+'">'+textarea.placeholder.substring(3,b)+'</a>：'+ textarea.value;
            }else {
                content = textarea.value;
            }

            let dataBody = {
                nickname:nickname===undefined || nickname ===null || nickname ===''? 'Anonymous' :nickname,
                email:email,
                link:link,
                headShot:headShot,
                blogId:blogId,
                parentId: parentId,
                browserVersion:browserVersion,
                osVersion:osVersion,
                address:address,
                ip:ip,
                content:content,
                idCard:'访客'
            };
            $.ajax({
                url:'/blogs/GuestBookController/save',
                type:'post',
                data:dataBody,
                beforeSend:function (xhr){
                    loading();
                    localStorage.setItem('detail','{"nickname":"'+nickname+'","email":"'+email+'","link":"'+link+'"}');  //发送请求时，存储用户信息
                },
                success:function (res) {
                    //document.querySelector("#dyzgz").scrollIntoView(true); //定位到指定位置
                    if (res.success){
                        loaded();

                        if (parentId != '-1'){
                            vEditorReset(); //重置输入框
                            let parentIds = res.data.parentIds;
                            let lastIndex = parentIds.indexOf(',',4);
                            let s = parentIds.substring(4,lastIndex===-1?parentIds.length:lastIndex);
                            res.data.vmId =s;
                            let vDiv =  document.querySelector('div[data-self-id="'+s+'"].vquote');
                            vDiv.appendChild(strToEle(createDIV(res.data)));

                        }else {
                            //  document.querySelector('div[data-self-id="'+parentId+'"]');
                            res.data.vmId = res.data.id;
                            let ele =  strToEle(createDIV(res.data));
                            document.querySelector('.vcards').insertBefore(ele,document.querySelector('.vcards').firstElementChild);
                            vEditorReset();
                        }
                    }else {
                        timeoutAlter('评论失败，稍后再试...')
                    }


                },
                error:function (data) {
                    console.log(data)

                }
            })
        }



//重置评论框
        function vEditorReset() {
            document.querySelector('.vpanel').appendChild(document.querySelector('.vwrap'));
            let textarea = document.getElementById('veditor');
            let close = document.querySelector('.cancel-reply.text-right');
            close.style.display  = 'none';
            textarea.placeholder = '嗨,请不要吝啬你的想法！小技巧：在昵称位置输入QQ号就可以自动补全邮箱哦~';
            textarea.value = '';
        }

//提交form表单检验
        function blog_verify() {
            let email =  document.getElementById('blog_email').value;
            let link = document.getElementById('blog_link').value;
            let textarea = document.getElementById('veditor').value;

            let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  //邮箱正则


            //网址正则
            let strRegex = "^((https|http|ftp|rtsp|mms)?://)"
                + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
                + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
                + "|" // 允许IP和DOMAIN（域名）
                + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
                + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
                + "[a-z]{2,6})" // first level domain- .com or .museum
                + "(:[0-9]{1,4})?" // 端口- :80
                + "((/?)|" // a slash isn't required if there is no file name
                + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";

            //不为空时才校验
            if(email && !reg.test(email)){
                return '邮箱格式不正确哦~';
            }
            if( link && !new RegExp(strRegex).test(link)){
                return '链接地址不正确哦~';
            }



            if (!textarea){
                return '内容不能留空哦~';
            }

            return false;
        }

        let w = function(e, t) {
            if (document.selection) {
                e.focus();
                document.selection.createRange().text = t,
                    e.focus()
            } else if (e.selectionStart || "0" == e.selectionStart) {
                var n = e.selectionStart
                    , r = e.selectionEnd
                    , o = e.scrollTop;
                e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length),
                    e.focus(),
                    e.selectionStart = n + t.length,
                    e.selectionEnd = n + t.length,
                    e.scrollTop = o
            } else
                e.focus(),
                    e.value += t;
            setTimeout(function(t) {
                f((0,
                    S.default)(e))
            }, 100)
        }

//创建留言树
        function createDIV(data) {
            let link = data.link ? '<a class="vnick" rel="nofollow" href="'+data.link+'" target="_blank">'+data.nickname+'</a>':'<span class="vnick">'+data.nickname+'</span>';
            let divA = '<div class="vcard" id="'+data.id+'">\n' +
                '    <img class="vimg" src="'+(data.headShot ===undefined || data.headShot ==null ? data.headShot : "/blogs/medias/Anonymous.jpg")+'">\n' +
                '    <div class="vh">\n' +
                '        <div class="vhead">\n' + link +
                '            <span class="vtag vvisitor">'+data.idCard+'</span>\n' +
                '            <span class="vsys"><i class="fab fa-chrome"></i>'+data.browserVersion+'</span>\n' +
                '            <span class="vsys"><i class="fab fa-windows"></i>'+data.osVersion+'</span>\n' +
                '        </div>\n' +
                '        <div class="vmeta"><span class="vtime">'+data.createDate+'</span><span class="vat" data-vm-id="'+(data.vmId ?data.vmId:data.id)+'" onclick="getCommentsDiv(this)" data-self-id="'+data.id+'">回复</span>\n' +
                '        </div>\n' +
                '        <div class="vcontent" data-expand="查看更多...">\n' + data.content +
                '        </div>\n' +
                '        <div class="vreply-wrapper"  data-vm-id="'+(data.vmId ?data.vmId:data.id)+'"  data-self-id="'+data.id+'"></div>\n' +
                '        <div class="vquote" data-self-id="'+data.id+'">';

            let divB ='</div></div></div>';
            let gBChildren =data.gBChildren;
            let divList='';
            if (gBChildren !== undefined && gBChildren !== null && gBChildren.length > 0){
                for (let j =0 ; j < gBChildren.length; j++){
                    gBChildren[j].vmId = data.vmId; //顶层留言
                    divList +=  createDIV(gBChildren[j]);
                }
            }
            return divA +divList+ divB;
        }

//将字符串转化为dom元素
        function strToEle(str) {
            const template =`<div>${str}</div>`;
            let tempEle = document.createElement('div');
            tempEle.innerHTML = template;
            return tempEle.firstElementChild;
        }

//正在加载
        function loading() {
            document.querySelector('.vload-top.text-center').style.display='block';
        }

//加载完毕
        function loaded() {
            document.querySelector('.vload-top.text-center').style.display='none';
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
        };

//两秒自动关闭的提示框
        function timeoutAlter(msg){
            let timeoutAlterTem; //临时变量，防止短时间内重复调用

            let textNode = document.createTextNode(msg);
            let showNode = document.getElementById('blog_warning');
            showNode.appendChild(textNode);
            timeoutAlterTem=timeoutAlter;
            timeoutAlter=null;
            window.setTimeout(function(){
                showNode.removeChild(textNode);
                timeoutAlter=timeoutAlterTem;
            },2000);
        }


    });

    //点击回复 获取评论组件
    function getCommentsDiv(ele) {
        document.getElementById('veditor').placeholder = '回复 '+ele.parentElement.previousElementSibling.querySelector('.vnick').innerText+"：";
        ele.parentElement.parentElement.querySelector('.vreply-wrapper').appendChild(document.querySelector('.vwrap'));
        document.querySelector('.cancel-reply.text-right').style.display = 'block'
    }
    //分页控件
    function blog_guest_page(currentPage) {
        let pageSize = 10;
        if (currentPage === undefined || currentPage <=0 ){
            currentPage =1;
        }
        let a   =  Math.ceil(pageData.pageTotal / pageSize);
        let right = document.getElementById('pageRight');
        let left = document.getElementById('pageLeft');

        if (currentPage == 1 || a ==1 ){
            left.classList.remove('waves-effect','waves-light','bg-color');
            left.classList.add('disabled');
        }else {
            left.classList.add('waves-effect','waves-light','bg-color');
            left.classList.remove('disabled');
        }

        if (currentPage>= a){
            right.classList.remove('waves-effect','waves-light','bg-color');
            right.classList.add('disabled');
        }else {
            right.classList.add('waves-effect','waves-light','bg-color');
            right.classList.remove('disabled');
        }
        pageContent(currentPage,a);
        commentList(currentPage,10,{blogId:-1});
    }

</script>

