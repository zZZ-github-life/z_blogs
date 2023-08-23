<!--
    @author:  zZZ....
    @description: 文章页模板
    @date: 2022/12/7
-->
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"><!--手机端窗口大小-->
        <meta name="keywords" content="标签,COFEBABE">
        <meta name="description" content="我们常常在现实与理想之间两难">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta name="renderer" content="webkit|ie-stand|ie-comp">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <link rel="icon" type="image/png" href="${basePath}/img/favicon.png">

<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/typoCss/typo.css">-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/aos/aos.css"><!--动画滚动库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/materialize/css/materialize.css"><!--Materialize-UI&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/awesome/css/all.css"><!--字体图标库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/awesome/css/fontawesome-animation.min.css"><!--字体动画库&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/nprogress/nprogress.css"><!--进度条&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/css/main-front.css"><!--个人css&ndash;&gt;-->
<#--        <link rel="stylesheet" type="text/css" href="${basePath}/libs/tocbot/tocbot.css"><!--目录&ndash;&gt;-->

<#--        <link rel="stylesheet" type="text/css" href="${basePath}/css/guestbook.css">-->

        <link rel="stylesheet" type="text/css" href="${basePath}/merged/css/index.min.css">
        <link rel="stylesheet" type="text/css" href="${basePath}/merged/css/article.min.css">


        <style type="text/css">
            .bottom-main{
                padding-bottom: 1.6rem;
                overflow: revert;
                overflow-x: clip;
            }
            .toc-widget {
                width: 350px;
                padding-left: 20px;
            }
            .toc-widget .toc-title {
                padding: 35px 0 15px 17px;
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 1.5rem;
            }
            #articleContent h1::before,
            #articleContent h2::before,
            #articleContent h3::before,
            #articleContent h4::before,
            #articleContent h5::before,
            #articleContent h6::before {
                display: block;
                content: " ";
                height: 100px;
                margin-top: -100px;
                visibility: hidden;
            }
            #articleContent :focus {
                outline: none;
            }
            .toc-fixed {
                position: fixed;
                top: 64px;
            }
            .toc-widget .toc-title {
                padding: 35px 0 15px 17px;
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 1.5rem;
            }

            .toc-widget ol {
                padding: 0;
                list-style: none;
            }

            #tocbotId {
                padding-bottom: 18px;
                overflow: auto;
            }

            #tocbotId ol li {
                padding-left: 24px;
            }
            #tocbotId li{
                padding-bottom: 3px;
            }
            #tocbotId .toc-link:hover {
                color: #857979fc;
            }

            #tocbotId .toc-link::before {
                background-color: transparent;
                max-height: 25px;

                position: absolute;
                right: 23.5vw;
                display: block;
            }

            #tocbotId .is-active-link {
                color: #42b983;
            }

            #floating-toc-btn {
                position: fixed;
                right: 15px;
                bottom: 76px;
                padding-top: 15px;
                margin-bottom: 0;
                z-index: 998;
            }
            .typo.typo-selection{
                border-radius: 15px;
            }
            #floating-toc-btn .btn-floating {
                width: 48px;
                height: 48px;
            }

            #floating-toc-btn .btn-floating i {
                line-height: 48px;
                font-size: 1.4rem;
            }
            .shang{
                width: 2rem;height: 2rem;border-radius: 2rem;background-color: red;margin: 0 auto;color: white;font-weight: 600;font-size: 1.3rem;
                -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
                box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
                cursor: pointer;
            }
        </style>


<#--        <script type="text/javascript" src="${basePath}/libs/jquery/jquery.min.js"></script><!--jq&ndash;&gt;-->
<#--        <script type="text/javascript" src="${basePath}/libs/materialize/js/materialize.js"></script> <!--Materialize-UI&ndash;&gt;-->
<#--        <script src="${basePath}/libs/nprogress/nprogress.js"></script><!--进度条&ndash;&gt;-->
<#--        <script src="${basePath}/js/main-front.js"></script><!--个人js&ndash;&gt;-->
<#--        <script src="${basePath}/libs/tocbot/tocbot.js"></script><!--目录生成&ndash;&gt;-->



        <title>${blog.title}</title>

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
                            <a href="${DOMAIN}" class="waves-effect faa-parent  animated-hover">
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
                            <a   onclick="pjax('/html/article/primary/404.html',5)" class="waves-effect faa-parent animated-hover">
                                <i class="fas fa-link faa-horizontal faa-slow" style="zoom: 0.7;"></i>
                                <span>友情链接</span>
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
            <div class="height-475px" style="margin-top: -75px">
                <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image:url(${galleryPath}),url(${basePath}/medias/banner/1.jpg);visibility: visible">
                    <div class="container">
                        <div class="row">
                            <div >
                                <div class="brand">
                                    <h1 class="blog-text-center articlepage-title">${blog.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--主体内容-->
            <main class="blog-main bottom-main">
                <!--弧度-->
                <div class="blog-bending-body top ">
                    <div class="blog-bending">
                    </div>
                </div>

                <div class="container top-a">

                    <div class=" article-a">
                        <!--内容-->
                        <div class="card">
                            <div class="card-content article-info">
                                <div class="row tag-cate">
                                    <div class="col s7">

                                        <div class="article-tag">


                                            <#list tags as tag >
                                                <a href="${basePath}/ct/tags/${tag.id}/" target="_blank">
                                                    <span class="tags-m bg-color">${tag.tagsName}</span>
                                                </a>
                                            </#list>

                                        </div>

                                    </div>
                                    <div class="col s5 right-align">

                                        <div class="post-cate">
                                            <i class="fas fa-bookmark fa-fw icon-category"></i>

                                            <a href="${basePath}/ct/classify/${classify.id}" class="post-category">
                                                ${classify.classifyName}
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                <div class="post-info">

                                    <div class="post-date info-break-policy">
                                        <i class="far fa-calendar-minus fa-fw"></i><span class="iw"> 发布日期：</span>${(blog.publishDate)?string("yyyy/MM/dd")}
                                    </div>





                                    <div class="info-break-policy">
                                        <i class="far fa-file-word fa-fw"></i><span class="iw"> 文章字数：</span>${blog.words}
                                    </div>



                                    <div class="info-break-policy">
                                        <i class="far fa-clock fa-fw"></i><span class="iw"> 阅读时长：</span>${blog.duration}
                                    </div>



                                    <div id="busuanzi_container_page_pv" class="info-break-policy" style="display: inline;">
                                        <i class="far fa-eye fa-fw"></i><span class="iw"> 阅读次数：</span><span id="busuanzi_value_page_pv">${(blog.hits)!10}</span>
                                    </div>

                                </div>
                            </div>
                            <hr>
                            <div class="card-content typo typo-selection" id="typo">
                                <div id="articleContent">
                                    ${blog.contentHtml}
                                </div>
                            </div>
                            <hr>
                            <div class="card-content" id="commentsId">
                                <div class="row">
                                    <span class="rep-bold"><i class="fas fa-user"></i> 文章作者：</span> <span class="href-b">${WEBSITENAME}</span>
                                </div>
                                <div class="row">
                                    <span class="rep-bold"><i class="fas fa-user"></i> 文章链接：</span> <a href="${DOMAIN}${blog.href}" target="_blank" class="href-b">${DOMAIN}${blog.href}</a>
                                </div>
                                <div class="row">
                                    <span class="rep-bold"><i class="fas fa-user"></i> 转载声明：</span>本博客所有文章除特別声明外，均采用 CC BY 4.0 许可协议。转载请注明来源 ${WEBSITENAME} !
                                </div>
                                <#if blog.isPraise >
                                <div class="row">
                                    <div style="width: 100%;text-align: center">
                                        <div class="shang" id="shang" data-position="top" >
                                            赏
                                        </div>
                                    </div>
                                </div>
                                </#if>

                            </div>


                        </div>

                        <!--评论-->
                        <#if blog.isReview >
                        <div  data-aos="fade-up">
                            <div class="card" >
                                <div class="card-content">

                                    <article class="post white-box reveal shadow" id="comments" data-sr-id="15" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
                                        <p ct=""><i class="fas fa-comments"></i> 评论</p>

                                        <div id="valine_container" class="valine_thread v" data-class="v">
                                            <div class="vpanel" data-self-id="-1">
                                                <input name="headShot" id="blog_headShot" hidden>
                                                <input name="blogId" id="blog_blogId" value="${blog.id}" hidden>
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
                                                        <textarea id="veditor" name="content"   class="veditor vinput" placeholder="嗨,请不要吝啬你的想法！小技巧：在昵称位置输入QQ号就可以自动补全邮箱哦~"></textarea>
                                                        <div class="vrow">
                                                            <div id="blog_warning" class="vcol vcol-60 status-bar"></div>
                                                            <div class="vcol vcol-40 vctrl text-right">
                                                                <span title="表情"  class="vicon vemoji-btn">
                                                                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22">
                                                                      <path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path>
                                                                      <path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path>
                                                                      <path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path>
                                                                  </svg>
                                                                </span>
                                                                <span title="预览" class="vicon vpreview-btn">
                                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22">
                                                                    <path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path>
                                                                    <path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path>
                                                                    <path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path>
                                                                </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="vrow">
                                                        <div class="vcol vcol-30" id="blog_guest_comments">
                                                            <a alt="Markdown is supported"  href="https://guides.github.com/features/mastering-markdown/"  class="vicon" target="_blank">
                                                                支持Markdown语法
                                                            </a>
                                                        </div>
                                                        <div class="vcol vcol-70 text-right">
                                                            <button type="button" title="Cmd|Ctrl+Enter" id="blog_guest_commit" class="vsubmit vbtn">提交</button>
                                                        </div>
                                                    </div>
                                                    <div class="vemojis" style="display: none;">
                                                        <i title="tieba-7"><img alt="tieba-7" referrerpolicy="no-referrer" class="vemoji" src="${basePath}/img/emoji/tieba-7.png"></i>
                                                    </div>
                                                    <div class="vinput vpreview" style="display:none;"></div>
                                                    <div style="display:none;" class="vmark"></div>
                                                </div>
                                            </div>
                                            <div class="vcount" style="display: block;">
                                                <span class="vnum" id="blog_guestbook_total">0</span> 评论</div>
                                            <div class="vload-top text-center" style="display:none;">
                                                <i class="vspinner"  style="width:30px;height:30px;"></i>
                                            </div>

                                            <div class="vcards">

                                                <#if blogGuestBookList??  && (blogGuestBookList?size > 0)  >
                                                 <#list blogGuestBookList as blogGuestBook >
                                                <div class="vcard" id="${blogGuestBook.id}">
                                                    <img class="vimg" src="${blogGuestBook.headShot}">
                                                    <div class="vh">
                                                        <div class="vhead">
                                                            <a class="vnick" rel="nofollow" href="${blogGuestBook.link}" target="_blank">${blogGuestBook.nickname}</a>
                                                            <span class="vtag vvisitor">${blogGuestBook.idCard}</span>
                                                            <span class="vsys"><i class="fab fa-chrome"></i>${blogGuestBook.browserVersion}</span>
                                                            <span class="vsys"><i class="fab fa-windows"></i>${blogGuestBook.osVersion}</span>
                                                        </div>
                                                        <div class="vmeta">
                                                            <span class="vtime">${blogGuestBook.createDate}</span>
                                                            <span class="vat" data-vm-id="${blogGuestBook.id}" data-self-id="${blogGuestBook.id}">回复</span>
                                                        </div>
                                                        <div class="vcontent" data-expand="查看更多...">
                                                            ${blogGuestBook.content}
                                                        </div>
                                                        <div class="vreply-wrapper" data-self-id="${blogGuestBook.id}"></div>
                                                        <div class="vquote" data-self-id="${blogGuestBook.id}">
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
                                            <div class="vload-bottom text-center" style="display: none;">
                                                <i class="vspinner" style="width:30px;height:30px;"></i>
                                            </div>
                                            <div class="vempty" style="display:none;"></div>
                                            <div class="vpage txt-center" id="blogsLoading" style="display: ${loading}">
                                                <button type="button" class="vmore vbtn">加载更多...</button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                            <script>
                                $(function () {
                                    let pageData={currentLines:${currentLines},pageSize:10,p:{blogId:'${blog.id}'}};
                                    let versionToJson,browserVersion,osVersion,address,ip;

                                    versionToJson = getVersionToJson();
                                    browserVersion =versionToJson.browser+' '+versionToJson.version;
                                    osVersion =versionToJson.os+' '+versionToJson.osVersion;
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

                                    document.getElementById('blogsLoading').onclick= function() {
                                            pageData.pageSize=10;
                                            commentList( pageData.currentLines, pageData.pageSize,pageData,false,function () {
                                                document.getElementById('blogsLoading').style.display='none';
                                                document.querySelector('.vload-bottom.text-center').style.display='block';
                                            },function () {
                                                document.querySelector('.vload-bottom.text-center').style.display='none';
                                            })
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
                                                    let list ='';
                                                    // for (let i = 0; i < resData.length; i++) {
                                                    //     resData[i].vmId = resData[i].id;
                                                    //     list += createDIV(resData[i]);
                                                    // }
                                                    document.querySelector('.vcards').insertAdjacentHTML("beforeend",resData);
                                                    // document.querySelector('.vcards').appendChild(strToEle(list)) ;
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
                                        if (parentId!=='-1'){
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
                                                    let firstSpan= document.getElementById('firstSpan');
                                                    let totalGus= document.getElementById('blog_guestbook_total');
                                                    if (firstSpan){
                                                        document.getElementById('firstSpan').remove();
                                                    }
                                                    totalGus.innerText=(parseInt(totalGus.innerText.trim())+1);
                                                }else {
                                                    /*通知提示*/
                                                    M.toast({
                                                        htmlTitle: '这是一个艺术长廊',
                                                        htmlBody: '评论失败，稍后再试...',
                                                    });
                                                }
                                            },
                                            error:function (data) {
                                                M.toast({
                                                    htmlTitle: '这是一个艺术长廊',
                                                    htmlBody: '评论失败，稍后再试...',
                                                });
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

    //创建留言树
                                    function createDIV(data) {
                                        let link = data.link ? '<a class="vnick" rel="nofollow" href="'+data.link+'" target="_blank">'+data.nickname+'</a>':'<span class="vnick">'+data.nickname+'</span>';
                                        let divA = '<div class="vcard" id="'+data.id+'"  data-aos="fade-up">\n' +
                                            '    <img class="vimg" src="'+(data.headShot ===undefined || data.headShot ==null ? data.headShot : "${basePath}/medias/Anonymous.jpg")+'">\n' +
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


                                });

                                //点击回复 获取评论组件
                                function getCommentsDiv(ele) {
                                    document.getElementById('veditor').placeholder = '回复 '+ele.parentElement.previousElementSibling.querySelector('.vnick').innerText+"：";
                                    ele.parentElement.parentElement.querySelector('.vreply-wrapper').appendChild(document.querySelector('.vwrap'));
                                    document.querySelector('.cancel-reply.text-right').style.display = 'block'
                                }



                            </script>
                        </#if>
                    </div>

                    <!--目录-->
                    <div  class="expanded col l3 hide-on-med-and-down">
                        <div class="toc-widget card" style="background-color: white;">
                            <div class="toc-title"><i class="far fa-list-alt"></i>&nbsp;&nbsp;目录</div>
                            <div id="tocbotId">

                            </div>
                            <#if blog.isReview >
                                <div class="toc-comments" onclick="headertop_down('#commentsId')">
                                    <i class="fas fa-comments"></i>&nbsp;&nbsp;评论
                                </div>
                            </#if>
                        </div>
                    </div>
                </div>

            </main>

        </div>


        <!--页脚-->
        <footer class="page-footer">

            <!-- 回到顶部按钮 start -->
            <div id="backTop" class="top-scroll">
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


<#--        <script src="${basePath}/libs/aos/aos.js"></script><!--动画滚动库&ndash;&gt;-->

<#--        <script type="text/javascript"  src="${basePath}/libs/background/ribbon-refresh.min.js" async="async"></script>-->
        <script src="${basePath}/merged/js/index.min.js" type="text/javascript"></script>
        <script>

            $(document).ready(function(){

                tocbot.init({ //目录
                    // Where to render the table of contents.
                    tocSelector: '#tocbotId',
                    // Where to grab the headings to build the table of contents.
                    contentSelector: '#articleContent',
                    // Which headings to grab inside of the contentSelector element.
                    headingSelector: 'h1, h2, h3,h4,h5',
                    // For headings inside relative or absolute positioned containers within content.
                    hasInnerContainers: true,
                });
                M.Tooltip.init(document.getElementById("shang"), {
                    html:'<img src="${basePath}/medias/weixin_zhifu.jpg" style="width: 14rem">',
                });
            });
        </script>
    </body>
</html>