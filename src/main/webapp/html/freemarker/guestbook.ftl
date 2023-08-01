<!--
    @author:  zZZ....
    @description: 留言板
    @date: 2023/01/08
-->

<title>留言板 | zZZ....</title>


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
        background: url(${basePath}/medias/comment_bg.png) 100% 100% no-repeat;
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
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(${basePath}/medias/banner/1.jpg);visibility: visible">
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">留言板</h1>
                        <div class="description center-align">
                            <span class="z-blog-poetry" data-aos="zoom-in"></span>
                        </div>
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
                    <div class="guestbook-tag-title left-align">
                        <i class="fas fa-tags"></i>&nbsp;&nbsp;既然来了，就留下足迹吧～
                    </div>
                    <hr/>
                    <ul class="guestbook-ul">
                        <li> 如果你有任何更好的见解欢迎留言</li>
                        <li> 留言时建议留下你的昵称与邮箱，方便及时收到回复</li>
                        <li> 如果有需要联系博主，可以查看站点首页的联系方式</li>
                    </ul>
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
                            <input name="headShot" id="blog_headShot" hidden/>
                            <input name="blogId" id="blog_blogId" value="-1" hidden/>
                            <div class="vwrap">
                                <p class="cancel-reply text-right" style="display: none;" title="取消回复">
                                    <svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22">
                                        <path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path>
                                        <path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222"></path>
                                    </svg>
                                </p>
                                <div class="vheader item3">
                                    <input name="nickname" id="blog_nickname" placeholder="昵称(输入QQ号可自动拉取头像)" class="vnick vinput" type="text">
                                    <input name="email" id="blog_email" placeholder="邮箱(留下邮箱方便收到回复别人提醒)" class="vmail vinput" type="email">
                                    <input name="link" id="blog_link" placeholder="网址(你的网址)" class="vlink vinput" type="text">
                                </div>
                                <div class="vedit">
                                    <textarea id="veditor" name="content"   class="veditor vinput" placeholder="说点你想说的吧..."></textarea>
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
                                    <i title="tieba-1"><img alt="qq-98" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-1.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-2.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-3.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-4.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-5.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-6.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-7.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-8.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-9.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-10.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-11.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-12.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-13.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-14.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-15.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-16.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-17.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-18.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-19.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-20.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-21.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-22.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-23.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-24.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-25.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-26.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-27.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-28.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-29.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-30.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-31.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-32.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-33.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-34.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-35.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-36.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-37.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-38.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-40.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-41.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-42.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-43.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-49.png"></i>
                                    <i title="tieba-2"><img alt="qq-99" referrerpolicy="no-referrer" class="vemoji" src="/img/emoji/tieba-51.png"></i>

                                </div>
                                <div class="vinput vpreview" style="display:none;"></div>
                                <div style="display:none;" class="vmark"></div>
                            </div>
                        </div>
                        <div class="vcount" style="display: block;">
                            <span class="vnum" id="blog_guestbook_total">${total}</span> 留言</div>
                        <div class="vload-top text-center" style="display:none;">
                            <i class="vspinner"  style="width:30px;height:30px;"></i>
                        </div>
                        <div class="vcards">
                            <#--留言板-->
                            <#if guestBookList?? && ( guestBookList?size > 0)>
                                <#list guestBookList as blogGuestBook>
                                    <div class="vcard" id="${blogGuestBook.id}">
                                        <img class="vimg" src="${blogGuestBook.headShot}">
                                        <div class="vh">
                                            <div class="vhead">
                                                <a class="vnick" rel="nofollow" href="${blogGuestBook.link}" target="_blank">${blogGuestBook.nickname}</a>
                                                <span class="vtag vvisitor">${blogGuestBook.idCard}</span>
                                                <span class="vsys"><i class="fab fa-chrome"></i>${blogGuestBook.browserVersion}</span>
                                                <span class="vsys"><i class="fab fa-windows"></i>${blogGuestBook.osVersion}</span>
                                            </div>
                                            <div class="vmeta"><span class="vtime">${blogGuestBook.createDate}</span><span class="vat" data-vm-id="607967bac1d46f1cc83a0cb8" data-self-id="607967bac1d46f1cc83a0cb8">回复</span></div>
                                            <div class="vcontent" data-expand="查看更多...">
                                                ${blogGuestBook.content}
                                            </div>
                                            <div class="vreply-wrapper" data-self-id="${blogGuestBook.id}"></div>
                                            <div class="vquote" data-self-id="607967bac1d46f1cc83a0cb8">
                                                <#if gBChildren??  && (gBChildren?size > 0) >
                                                    <#list gBChildren as chilren >
                                                        <div class="vcard" id="${chilren.id}" data-aos="fade-up">
                                                            <img class="vimg" src="${chilren.headShot}">
                                                            <div class="vh">
                                                                <div class="vhead">
                                                                    <a class="vnick" rel="nofollow" href="${chilren.link}" target="_blank">${chilren.nickname}</a>
                                                                    <span class="vtag vvisitor">${chilren.idCard}</span>
                                                                    <span class="vsys"><i class="fab fa-chrome"></i>${chilren.browserVersion}</span>
                                                                    <span class="vsys"><i class="fab fa-windows"></i>${chilren.osVersion}</span>
                                                                </div>
                                                                <div class="vmeta">
                                                                    <span class="vtime">${chilren.createDate}</span>
                                                                    <span class="vat" data-vm-id="${blogGuestBook.id}" data-self-id="${chilren.id}">回复</span>
                                                                </div>
                                                                <div class="vcontent" data-expand="查看更多...">
                                                                    ${chilren.content}
                                                                </div>
                                                                <div class="vreply-wrapper" data-self-id="${chilren.id}"></div>
                                                                <div class="vquote" data-self-id="${chilren.id}"></div>
                                                            </div>
                                                        </div>
                                                    </#list>

                                                </#if>
                                            </div>
                                        </div>
                                    </div>
                                </#list>
                            </#if>
                        </div>
                        <div class="vload-bottom text-center" style="display: none;"><i class="vspinner" style="width:30px;height:30px;"></i></div>
                        <div class="vempty" style="display:none;"></div>
                        <div class="vpage txt-center" id="blogsLoading" style="display: ${loading}">
                            <button type="button" class="vmore vbtn">加载更多...</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</main>


<!--留言板-->
<script>

    $(function () {
        let pageData={currentLines:${currentLines},pageSize:10,p:{blogId:'-1'}};
        let versionToJson,browserVersion,osVersion,address,ip;


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

        if (pageData.currentLines ===0){
            commentList(pageData.currentLines,2,pageData,false);
        }

        let detail  =  JSON.parse(localStorage.getItem('detail'));
        if (detail) {
            document.getElementById('blog_nickname').value = detail.nickname;
            document.getElementById('blog_email').value = detail.email;
            document.getElementById('blog_link').value = detail.link;
        }


        document.getElementById('blogsLoading').onclick= function() {
            pageData.pageSize=10;
            commentList( pageData.currentLines, pageData.pageSize,pageData,false,function () {
                document.getElementById('blogsLoading').style.display='none';
                document.querySelector('.vload-bottom.text-center').style.display='block';
            },function () {
                document.querySelector('.vload-bottom.text-center').style.display='none';
            })
        };

//获取留言列表
        //获取留言列表
        function commentList(currentLines,pageSize,queryPerm,async,beforeCallback,successCallback) {

            let spanTotal = document.querySelector('#blog_guestbook_total');
            $.ajax({
                async:!async,
                url:'${basePath}/GuestBookController/listPage',
                type:'post',
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data:JSON.stringify({currentLines:currentLines,pageSize:pageSize,p:queryPerm.p}),
                beforeSend:function(xhr){
                    if (beforeCallback){
                        beforeCallback()
                    }
                },
                success:function (res) {
                    if (successCallback){
                        successCallback()
                    }
                    //document.querySelector("#dyzgz").scrollIntoView(true); //定位到指定位置
                    if (res.success){
                        let resData = res.data.list;
                        spanTotal.innerText = res.data.total;
                        if ( res.data.total===0){
                            document.querySelector('.vcards').innerHTML = '<span id="firstSpan" style="display: inline-block;width: 100%;text-align:center;color: rgba(85,85,85,0.37)">来当第一个坐沙发的人吧~</span>'
                            //   欢迎留下第一条评论
                        }

                        window.requestAnimationFrame(function (e) {
                            document.querySelector('.vcards').insertAdjacentHTML("beforeend",resData);
                        });

                        pageData.pageTotal =  res.data.total;

                        //设置加载按钮
                        if ( res.data.size<pageSize){
                            document.getElementById('blogsLoading').style.display='none';
                        }else {
                            document.getElementById('blogsLoading').style.display='block';
                        }
                        pageData.currentLines+=pageSize;
                    }else {
                        M.toast({
                            htmlTitle: '出了点问题~',
                            htmlBody: '<(＿　＿)> 稍后再试...',
                        });
                    }
                }
            });
        }

//提交评论
        function commitComments(){
            let blogVerify = blog_verify();
            if (blogVerify){
                M.toast({
                    htmlTitle: '啊(⊙o⊙)？',
                    htmlBody: blogVerify,
                });
                return false;
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
            if (parentId!=='-1'){
                let b = textarea.placeholder.indexOf('：');
                content ='回复 '+'<a href="#'+parentId+'">'+textarea.placeholder.substring(3,b)+'</a>：'+ textarea.value;
            }else {
                content = textarea.value;
            }

            let dataBody = {
                nickname:nickname ? 'Anonymous' :nickname,
                email:email,
                link:link,
                headShot:headShot,
                blogId:blogId,
                parentId: parentId,
                browserVersion:browserVersion,
                osVersion:osVersion,
                address:localStorage.getItem(localIP),
                ip:localIP,
                content:content,
                idCard:'访客',
                city:localStorage.getItem(localIP)

        }
            $.ajax({
                url:'${basePath}/GuestBookController/save',
                type:'post',
                data:dataBody,
                beforeSend:function (xhr){
                    loading();
                    localStorage.setItem('detail','{"nickname":"'+nickname+'","email":"'+email+'","link":"'+link+'"}');  //发送请求时，存储用户信息
                },
                success:function (res) {
                    //document.querySelector("#dyzgz").scrollIntoView(true); //定位到指定位置
                    if (res.success){
                        if (res.data.parentId !== -1){  //直接留言，否则回复留言
                            vEditorReset(); //重置输入框
                            let parentIds = res.data.parentIds;
                            let lastIndex = parentIds.indexOf(',',4);
                            let s = parentIds.substring(4,lastIndex===-1?parentIds.length:lastIndex);
                            res.data.vmId =s;
                            let vDiv =  document.querySelector('div[data-self-id="'+s+'"].vquote');
                            window.requestAnimationFrame(function (e) {
                                $(vDiv).append(createDIV(res.data));
                            });
                           // vDiv.insertAdjacentHTML("beforeend",createDIV(res.data));
                        }else {
                            //  document.querySelector('div[data-self-id="'+parentId+'"]');
                            res.data.vmId = res.data.id;
                           // let ele =  strToEle(createDIV(res.data));
                           // document.querySelector('.vcards').insertBefore(ele,document.querySelector('.vcards').firstElementChild);
                            window.requestAnimationFrame(function (e) {
                                $('.vcards').prepend(createDIV(res.data));
                                vEditorReset();
                            });

                           // document.querySelector('.vcards').insertAdjacentHTML("afterbegin",createDIV(res.data));

                        }
                        let firstSpan= document.getElementById('firstSpan');
                        let totalGus= document.getElementById('blog_guestbook_total');
                        if (firstSpan){
                            document.getElementById('firstSpan').remove();
                        }
                        totalGus.innerText=(parseInt(totalGus.innerText.trim())+1);

                        M.toast({
                            htmlTitle: '留言成功！',
                            htmlBody: '留言已经提交，稍等回复..',
                        });
                    }else {

                        /*通知提示*/
                        if (res.code===3){
                            M.toast({
                                htmlTitle: '网址被攻击啦！',
                                htmlBody: '不好意思，限制了使用次数，明天再来吧~',
                            });
                        }else if (res.code===2){
                            M.toast({
                                htmlTitle: '网址被攻击啦！',
                                htmlBody: '留言过快，休息一分钟再试...~',
                            });

                        }else {
                            M.toast({
                                htmlTitle: '留言失败！',
                                htmlBody: '稍后再试...',
                            });
                        }

                    }
                },
                complete:function(){
                    loaded();
                },
                error:function (data) {
                    M.toast({
                        htmlTitle: '留言失败！',
                        htmlBody: '是不是断网了...',
                    });
                    loaded();
                }
            })
        };

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

//提交时，创建留言树
        function createDIV(data) {
            let link = data.link ? '<a class="vnick" rel="nofollow" href="'+data.link+'" target="_blank">'+data.nickname+'</a>':'<span class="vnick">'+data.nickname+'</span>';
            let divA = '<div data-aos="fade-up" class="vcard" id="'+data.id+'">\n' +
                '    <img class="vimg" src="'+(data.headShot ===undefined || data.headShot ==null ? data.headShot : "${basePath}/medias/Anonymous.jpg")+'">\n' +
                '    <div class="vh">\n' +
                '        <div class="vhead">\n' + link +
                '            <span class="vtag vvisitor">'+data.idCard+'</span>\n' +
                '            <span class="vsys"><i class="fab fa-chrome"></i> '+data.browserVersion+'</span>\n' +
                '            <span class="vsys"><i class="fab fa-windows"></i> '+data.osVersion+'</span>\n' +
                '            <span class="vsys"><i class="fa fa-map-marker"></i> '+data.address+'</span>\n' +
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


//正在加载
        function loading() {
            document.querySelector('.vload-top.text-center').style.display='block';
        }

//加载完毕
        function loaded() {
            document.querySelector('.vload-top.text-center').style.display='none';
        }
        versionToJson = getVersionToJson();
        browserVersion =versionToJson.browser+' '+versionToJson.version;
        osVersion =versionToJson.os+' '+versionToJson.osVersion;

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

