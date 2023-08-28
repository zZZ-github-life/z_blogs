<!--banner-->
<div class=" height-100" style="margin-top: -75px;position: relative">
    <!--            <div class="video-box">-->
    <!--                <video class="video-background" preload="auto" loop playsinline autoplay  src="${basePath}/medias/videos/cloud.mp4"  tabindex="-1" muted="muted"></video>-->
    <!--            </div>-->
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(${basePath}/medias/banner/1.jpg);visibility: visible">
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">当下 即是未来</h1>
                        <div class="blog-header-info">
                            <p>我们常常在理想与现实之间两难</p>
                            <div class="cover-social-link">
                                <a href="https://github.com/zZZ-github-life" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" >
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:976804246@qq.com" class="tooltipped" target="_blank" data-tooltip="邮件联系我" data-position="top" >
                                    <i class="fas fa-envelope-open"></i>
                                </a>
                                <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=976804246" class="tooltipped" target="_blank" data-tooltip="QQ联系我" data-position="top" >
                                    <i class="fab fa-qq"></i>
                                </a>
                                <a href="/xml/RESS.xml" class="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top" >
                                    <i class="fas fa-rss"></i>
                                </a>
                            </div>
                        </div>
                        <div class="blog-start">
                            <a  class="waves-effect waves-light btn" onclick="headertop_down('.cloud')">
                                <i class="fa fa-angle-double-down faa-float   animated"></i>开始阅读
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--波浪-->
    <div class="cloud">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250,247,239,0.7"></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250,247,239,0.5)"></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgb(250,247,239,0.3)"></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(250,247,239)"></use>
            </g>
        </svg>
    </div>
</div>

<!--主体内容-->
<main class="blog-main">
    <!--头-->
    <div class="container blog-padding-empty" style="margin-top: 20px">
        <div class="card">
            <div class="card-content">
                <!--轮播图-->
                <div class="col l8 offset-l2 m10 offset-m1 s10 offset-s1 ">

                    <div class=" blog-index-title center-align">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                        前言
                    </div>

                    <div class="row">
                        <div class="col l8 offset-l2 m10 offset-m1 s10 offset-s1 center-align text">
                            本站用于记录工作与学习之中的一些问题和见解。初衷是做一个在线记录文本，因为会有太多忘掉的技术栈。最开始在网上看了一些别人的博客站点，慢慢的想法越来越多，于是动手搭建了此站点。从找ui素瓷，搭建框架、搭建云服务、开发功能、部署上线断断续续花了差不多一年时间。在后面，会持续优化、开发一些新的功能。<p><span style="font-family: fantasy">Needle</span>：取自权游里二丫手中的短剑</p>
                        </div>
                    </div>
                </div>
                <!--视频-->
                <div >
                    <div class=" blog-index-title center-align">
                        <i class="fa fa-video" aria-hidden="true"></i>
                        视频欣赏
                    </div>
                    <div class="row">
                        <div class="col l8 offset-l2 m10 offset-m1 s12">
                            <div id="DPlayer">

                            </div>
                        </div>
                    </div>
                </div>
                <!--推荐-->
                <div>
                    <div class="blog-index-title center-align">
                        <i class="far fa-thumbs-up"></i>
                        置顶推荐
                    </div>
                </div>
                <div class="blog-slider-body" >
                    <div class="blog-slider">
                        <div class="blog-slider_wrp swiper-wrapper">
                            <#if upList??  && (upList?size > 0)  >
                                <#list upList as up >
                                    <div class="blog-slider_item swiper-slide">
                                        <div class="blog-slider_img">
                                            <img src="${up.path}" alt="" onerror="noFind(this,'/img/404-4l2eq2.jpg')">
                                        </div>
                                        <div class="blog-slider_content">
                                            <span class="blog-slider_code">${up.publishDate}</span>
                                            <div class="blog-slider_title">${up.title}</div>
                                            <div class="blog-slider_text blog-text">
                                                ${up.about}
                                            </div>
                                            <a href="${up.href}" class="blog-slider_button"  target="_blank">READ ME</a>
                                        </div>
                                    </div>
                                </#list>
                            </#if>
                        </div>
                        <div class="blog-slider_pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--文章卡片-->
    <div class="container">
        <div class="row blog-border-radius-all">
            <#if blogList??  && (blogList?size > 0)  >
                <#list blogList as blog >
                    <div class="col s12 m6 l4 animated-div"  data-aos="zoom-in-up">
                        <div class="card">
                            <div class="card-image">
                                <a href="${blog.href}" target="_blank">
                                    <img src="${blog.path}" class="blog-article-img"  alt="" onerror="noFind(this,'/img/404-4l2eq2.jpg')">
                                    <span class="card-title">${blog.title}</span>
                                </a>
                            </div>
                            <div class="card-content article-card">
                                <p class="blog-p-text">${blog.about}</p>
                                <div>
                                        <span class="publish-date">
                                            <i class="far fa-clock fa-fw icon-date"></i>${blog.publishDate}</span>
                                    <span class="publish-classify">
                                            <i class="fas fa-bookmark fa-fw icon-category"></i>
                                            <a href="#" class="post-category"  onclick="pjax('/blogBlogs/tagsBt?type=classify&key=${blog.className}',5)">
                                              ${blog.className}
                                            </a>
                                        </span>
                                </div>
                            </div>
                            <div class="card-action cat-action-tags">
                                <#list blog.tagsName?split(",") as tagName>
                                    <a href="#" target="_blank" onclick="pjax('/blogBlogs/tagsBt?type=tags&key=${tagName}',5)">
                                        <span class="tags-m bg-color">${tagName}</span>
                                    </a>
                                </#list>

                            </div>
                        </div>
                    </div>
                </#list>
            </#if>

        </div>
    </div>
</main>

<!--下一页-->
    <div class="container paging">
        <div class="row">
            <div class="loading-m loading-hover progress">
                <div class=""></div>
                <span>加载更多</span>
            </div>
        </div>
    </div>



<script>

    $(document).ready(function(){
        let pageData={currentLines:${currentLines},pageSize:10};

        $('.tooltipped').tooltip(); //开启小提示

        if (pageData.currentLines <12){
            commentList(pageData.currentLines,6,pageData,false,loading_m,loaded_m());
        }

        document.querySelector(".loading-m").addEventListener('click',function (e) {
            pageData.pageSize=12;
            commentList( pageData.currentLines, pageData.pageSize,pageData,false,loading_m,loaded_m)

        });

        function commentList(currentLines,pageSize,queryPerm,async,beforeCallback,successCallback) {
            $.ajax({
                async:!async,
                url:'${basePath}/blogBlogs/frontList',
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

                    //document.querySelector("#dyzgz").scrollIntoView(true); //定位到指定位置
                    if (res.success){
                        let strHtml = res.data.data;

                        document.querySelector('.row.blog-border-radius-all').insertAdjacentHTML("beforeend",strHtml);
                        pageData.pageTotal =  res.data.count;
                        if (successCallback){
                            successCallback()
                        }
                        //设置加载按钮
                        if (res.data.size<pageSize || !strHtml ){
                            loaded_rem();
                        }else {
                            loaded_m();
                        }
                        pageData.currentLines+=pageSize;
                    }else {
                        M.toast({
                            htmlTitle: '出了点问题~',
                            htmlBody: '<(＿　＿)> 联系博主看看吧...',
                        });
                    }
                },
                complete:function () {
                },
                error:function (data) {
                    M.toast({
                        htmlTitle: '出了点问题~',
                        htmlBody: '好像断开连接了，是不是断网了...',
                    });
                }
            });
        }

        //TODO 获取浏览量，人数，字数

        //获取当前人的ip 城市


        //初始化DPlayer播放器
        const dp1 = new DPlayer({
            container: document.getElementById('DPlayer'),
            video: {
                quality: [
                    {
                        name: 'HD',
                        url: '${basePath}/medias/videos/home.mp4',
                        type: 'mp4',
                    },
                    {
                        name: 'SD',
                        url: 'home.mp4',
                        type: 'normal',
                    },
                ],
                defaultQuality: 0,
                pic: '${basePath}/medias/videos/home.png',
                thumbnails: '${basePath}/medias/videos/home.png',
            },
        });

        let swiper1 = new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            pagination: {
                el: '.blog-slider_pagination',
                clickable: true,
            }
        });

        <#if loading >
            loaded_rem();
        </#if>
    });


</script>
