<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"><!--手机端窗口大小-->
        <meta name="keywords" content="7z,COFEBABE">
        <meta name="description" content="我们常常在现实与理想之间两难">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta name="renderer" content="webkit|ie-stand|ie-comp">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <link rel="icon" type="image/png" href="${basePath}/img/favicon.png">

<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/swiper/swiper-bundle.css"><!--轮播图&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/swp/style.css">-->

<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/aos/aos.css"><!--动画滚动库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/materialize/css/materialize.css"><!--Materialize-UI&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/awesome/css/all.css"><!--字体图标库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/awesome/css/fontawesome-animation.min.css"><!--字体动画库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/nprogress/nprogress.css"><!--进度条&ndash;&gt;-->
<#--        <link rel="stylesheet"  href="${basePath}/css/music.css"> <!--音乐&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/css/main-front.css"><!--个人css&ndash;&gt;-->

        <link rel="stylesheet" type="text/css" href="${basePath}/merged/css/index.min.css">
        <link rel="stylesheet" type="text/css" href="${basePath}/merged/css/home.min.css">

        <style type="text/css">
            .heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}
            .heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}
            .heart:after{top: -5px;}
            .heart:before{left: -5px;}
            .video-box {
                position: absolute;
                height: 100vh;
                width: 100%;
                /*进行视频裁剪*/
                overflow: hidden;
            }

            .video-box .video-background {
                position: absolute;
                left: 50%;
                top: 50%;
                /*保证视频内容始终居中*/
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                /*保证视频充满屏幕*/
                object-fit: cover;
                min-height: 800px;
            }
        </style>
        <script>
            function noFind(_this,path){ //声明顶部，防止网速加载过慢
                if (path){
                    _this.src=path;
                }else {
                    _this.src="/img/404_front.jpg";
                }
                if (! _this.src){
                    _this.οnerrοr=null;
                }
            }
        </script>


<#--        <script type="text/javascript" src="${basePath}/libs/jquery/jquery.min.js"></script><!--jq&ndash;&gt;-->
<#--        <script type="text/javascript" src="${basePath}/libs/materialize/js/materialize.js"></script> <!--Materialize-UI&ndash;&gt;-->
<#--        <script type="text/javascript" src="${basePath}/libs/dplayer/1.26.0/DPlayer.js"></script> <!--视频播放器DPlayer&ndash;&gt;-->
<#--        <script src="${basePath}/libs/swiper/swiper-bundle.js"></script><!--轮播图&ndash;&gt;-->
<#--        <script src="${basePath}/libs/nprogress/nprogress.js"></script><!--进度条&ndash;&gt;-->
<#--        <script src="${basePath}/js/main-front.js"></script><!--个人js&ndash;&gt;-->

        <title>Needle | welcome to Needle</title>

    </head>
    <body>
        <!--顶部导航栏-->
        <header class="navbar-fixed">
            <nav class="nav-header">
                <!--菜单-->
                <div class="nav-wrapper container">
                    <a href="/" class="brand-logo"><img style="width: 148px;vertical-align: middle;padding-bottom: 14px;" src="/img/logo.png" alt=""></a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                       <a onclick="pjax('/html/article/primary/index1.html')" class="waves-effect faa-parent  animated-hover">
<#--
                            <a href="/" class="waves-effect faa-parent  animated-hover">
-->
                                <i class="fas fa-home faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>首页</span>
                            </a>
                        </li>
                        <li>
                            <a  onclick="pjax('/html/article/primary/tags.html',0)" class="waves-effect faa-parent animated-hover">
                                <i class="fas fa-tags faa-horizontal faa-slow " style="zoom: 0.7;"></i>
                                <span>标签|分类</span>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/404.html',1)" class="waves-effect faa-parent animated-hover">
                                <i class="fas fa-graduation-cap  faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>随性</span>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/archive.html',2)" class="waves-effect  faa-parent  animated-hover ">
                                <i class="fas  fa-hourglass-half faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>时光轴</span>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/tools.html',3)" class="waves-effect  faa-parent  animated-hover ">
                                <i class="fas fa-map faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>导航</span>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/guestbook.html',4)" class="waves-effect  faa-parent  animated-hover ">
                                <i class="fas  fa-comments faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>留言板</span>
                            </a>
                        </li>

                        <li>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                        </li>
                        <li>
                            <a href="#modal1" onclick="m_modal1('#modal1')" class="waves-effect faa-parent animated-hover">
                                <i class="fas fa-search fa-2x faa-pulse" ></i>
                            </a>
                        </li>
                    </ul>


                    <!--移动端 侧面导航-->
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="fas fa-bars"></i></a>
                    <ul id="slide-out" class="sidenav sidenav-width" style="background-color: oldlace">
                        <li><div class="user-view">
                                <div class="background">
                                    <img src="/medias/banner/1.jpg" alt="">
                                </div>
                                <a href="javaScript:void(0)"><img style="width: 167px" src="/img/logo.png" alt=""></a>
                                <a href="javaScript:void(0)"><span class="phone-qm">当下即是未来</span></a>
                            </div>
                        </li>

                        <li>
                            <a   onclick="pjax('/html/article/primary/index1.html',0)" class="waves-effect  faa-parent  animated-hover sidenav-close">
                                <i class="fas  fa-home faa-horizontal faa-slow" ></i>
                                <span>首页</span>
                                <i class="fa fa-angle-right" style="float: right"></i>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/tags.html',1)" class="waves-effect  faa-parent  animated-hover sidenav-close">
                                <i class="fas  fa-tags faa-horizontal faa-slow" ></i>
                                <span>标签 | 分类</span>
                                <i class="fa fa-angle-right" style="float: right"></i>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/404.html',2)" class="waves-effect  faa-parent  animated-hover sidenav-close">
                                <i class="fas   fa-graduation-cap  faa-horizontal faa-slow" ></i>
                                <span>随性</span>
                                <i class="fa fa-angle-right" style="float: right"></i>
                            </a>
                        </li>
                        <li>
                            <a   onclick="pjax('/html/article/primary/archive.html',3)" class="waves-effect  faa-parent  animated-hover sidenav-close">
                                <i class="fas  fa-hourglass-half faa-horizontal faa-slow" ></i>
                                <span>时光轴</span>
                                <i class="fa fa-angle-right" style="float: right"></i>
                            </a>
                        </li>

                        <li>
                            <a   onclick="pjax('/html/article/primary/guestbook.html',4)" class="waves-effect  faa-parent  animated-hover sidenav-close">
                                <i class="fas  fa-comments faa-horizontal faa-slow" ></i>
                                <span>留言板</span>
                                <i class="fa fa-angle-right" style="float: right"></i>
                            </a>
                        </li>
                    </ul>

                </div>
                <a href="${basePath}/login" class="github-corner hide-on-med-and-down" target="_blank"  >
                    <svg viewBox="0 0 250 250" aria-hidden="true">
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
                    </svg>
                </a>
            </nav>
        </header>

        <div id="pjax">
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
                                            <a href="#"  onclick="pjax('/blogBlogs/tagsBt?type=tags&key=${tagName}',5)">
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

        </div>

        <!--页脚-->
        <footer class="page-footer">


            <!-- Chat GPT -->
            <div id="Chat" class="chat-wrapper" style="display: none">

                <div class="chat-header">
                    <div class="chat-header-title">
                        <div class="chat-header-hot">
                            <img alt="" src="${basePath}/img/article/chatbots.svg">
                        </div>
                        <div class="chat-header-hi" >
                            <span>Hi there ！</span>
                        </div>

                        <div></div>

                        <div class="chat-header-buttom">

                            <i class="fas fa-bell-slash" id="bellId" style="float: left"></i>
                            &nbsp;
                            <i class="fas fa-angle-down" id="hideId"  style="float: right"></i>
                        </div>

                    </div>
                    <div class="chat-header-banner">
                        <div >
                            你好，我是智能机器人Chat-N。有什么可以为您效劳的吗？
                        </div>
                    </div>
                </div>
                <div class="chat-content" id="chatContent">
                    <div class="chat-content-message" id="chatContentMessage">

                        <div class="chat-message-robot chat-message" id="msgRoot">你好呀，想聊点什么呢？</div>
                        <!--                        <div class="chat-message-me chat-message"> 我是只能机器人小天我是只能机器人小天我是只能机器人小天我是只能机器人小天我是只能机器人小天我是只能机器人小天</div>-->
                        <!--                 -->
                        <div class="chat-message-robot chat-message " id="chatLoading" style="display: none">

                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="chat-footer">
                    <div class="chat-footer-input">

                        <label>
                            <textarea id="inputMessage" class="chat-footer-textarea" placeholder="Enter your message..."></textarea>
                        </label>

                    </div>
                    <div class="chat-footer-bottom">
                        <div>
                            <i class="fas fa-bell-slash" ></i>
                            &nbsp;
                            <i class="fas fa-angle-down" ></i>
                        </div>
                        <div class="chat-send" id="chatSend">
                            <a class="waves-effect ">
                                <i class="fas fa-paper-plane" style="font-size: 1.7rem;color: #8fa4c4;"></i>
                            </a>

                        </div>

                    </div>
                </div>

            </div>

            <!-- 回到顶部按钮 start -->
            <div id="chatBom" class="chat-windows">
                <a  class="btn-floating btn-large waves-effect waves-light Chat-GPT-bottom" href="#!">
                    <i class="fas fa-comment-dots" aria-hidden="true" ></i>
                </a>
            </div>
            <div id="backTop"  class="top-scroll">
                <a class="btn-floating btn-large waves-effect waves-light" href="#!">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </div>

            <!-- 搜索模态框 -->
            <div id="modal1" class="modal">
                <div class="search-modal">
                    <i class="fas fa-search  faa-pulse search-i"></i>
                    <div class="search-input" id="searchInput" aria-placeholder="站点内光速搜索..."  contenteditable></div>
                </div>

                <div class="search-contain" id="searchResult">

                </div>
            </div>

            <!--弧度-->
            <div class="blog-bending-body ">
                <div class="blog-bending">
                </div>
            </div>
            <!--内容-->
            <div class="blog-background-color">
                <div class="container  center-align " >
                    <!-- 访客地图 -->
                    <div class="col s12 m3 l3 social-link" >

                    </div>
                    <!-- 版权信息 -->
                    <div class="col s12 m6 l6 copy-right">
                        <div class="footer_row">
                            <span>Copyright&nbsp;© 2022   ZouXiaoLong</span> &nbsp;
                            <span><a href="https://beian.miit.gov.cn" style="color:rgb(255 255 255 / 70%)" target="_blank">苏ICP备2023002046号</a></span>
                        </div>
                        <div class="footer_row">
                            <span style="color: white;font-style: italic;">Hello ~  来自<span id="city">远方</span>的朋友</span>
                        </div>
                        <div class="footer_row">
                            <span  style="display: inline;"><i class="far fa-eye"></i> 总浏览量：<span class="white-color" id="PV">${PV}</span></span>
                            |
                            <span  style="display: inline;"><i class="far fa-eye"></i> 总访问量：<span class="white-color" id="TV">${TV}</span></span>
                            |
                            <span  style="display: inline;"><i class="fas fa-users"></i> 访客人数：<span  class="white-color" id="UV">${UV}</span></span>
                            |
                            <span  style="display: inline;"><i class="fas fa-chart-area"></i> 字数统计：<span  class="white-color" id="WC">${WC}</span></span>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
        <#--nodejs grunt压缩的js-->
        <script src="${basePath}/merged/js/index.min.js" type="text/javascript"></script>
        <script>
            //初始化DPlayer播放器
            const dp = new DPlayer({
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

        </script>

        <script>

            var swiper = new Swiper('.blog-slider', {
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
        </script>

<#--       -->

<#--        <script src="${basePath}/libs/aos/aos.js"></script><!--动画滚动库&ndash;&gt;-->
<#--        <script src="${basePath}/js/music.js"  ></script><!--音乐&ndash;&gt;-->
<#--        <script type="text/javascript"  src="${basePath}/libs/background/ribbon-refresh.js" async="async"></script>-->

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

                <#if loading >
                    loaded_rem();
                </#if>


                //TODO 获取浏览量，人数，字数

                //获取当前人的ip 城市
            });
        </script>
        <script src="${basePath}/libs/echarts/echarts.min.js" ></script>
    </body>
</html>