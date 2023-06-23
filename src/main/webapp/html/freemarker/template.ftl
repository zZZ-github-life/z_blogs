<html lang="zh-cmn-Hans"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta name="renderer" content="webkit|ie-stand|ie-comp">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <!-- Global site tag (gtag.js) - Google Analytics -->


        <title>一个极简的 Java ASCII 表格生成库 | 闪烁之狐</title>
        <link rel="icon" type="image/png" href="/favicon.png">

        <link rel="stylesheet" type="text/css" href="/libs/awesome/css/all.css">
        <link rel="stylesheet" type="text/css" href="/libs/materialize/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="/libs/aos/aos.css">
        <link rel="stylesheet" type="text/css" href="/libs/animate/animate.min.css">
        <link rel="stylesheet" type="text/css" href="/libs/lightGallery/css/lightgallery.min.css">
        <link rel="stylesheet" type="text/css" href="/css/matery.css">
        <link rel="stylesheet" type="text/css" href="/css/my.css">

        <script src="https://zz.bdstatic.com/linksubmit/push.js"></script>
        <script src="/libs/jquery/jquery.min.js"></script>

        <meta name="generator" content="Hexo 5.2.0">
        <link rel="alternate" href="/atom.xml" title="闪烁之狐" type="application/atom+xml">
        <style type="text/css">
            .heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}
            .heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}
            .heart:after{top: -5px;}
            .heart:before{left: -5px;}
        </style>
        <link rel="prefetch">
    </head>




    <body data-aos-easing="ease-in-out-sine" data-aos-duration="700" data-aos-delay="100" style="">
        <!--引入html头部 生产模式-->
        <!--<script type="text/javascript" src="../js/1_header.js"></script>-->
        <script  >
            //开发模式下用此种方式加载 外部html，略微降低性能
            let blogs_xhr_1 = new XMLHttpRequest();
            blogs_xhr_1.open('get','http://localhost:8853${basePath}/html/front/1_header.html',false);
            blogs_xhr_1.onreadystatechange = function () {
                if(blogs_xhr_1.readyState === 4 ){
                    document.write(blogs_xhr_1.responseText)
                }
            };
            blogs_xhr_1.send(null);
        </script>




        <div class="bg-cover pd-header post-cover" style="background-image: url('https://statics.sh1a.qingstor.com/2019/01/25/minitable.jpg')">
            <div class="container" style="right: 0px;left: 0px;">
                <div class="row">
                    <div class="col s12 m12 l12">
                        <div class="brand">
                            <h1 class="description center-align post-title">一个极简的 Java ASCII 表格生成库</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <main class="post-container content" style="min-height: 780px;">


            <link rel="stylesheet" href="/libs/tocbot/tocbot.css">
            <style>
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

                .toc-widget {
                    width: 345px;
                    padding-left: 20px;
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

                #toc-content {
                    padding-bottom: 30px;
                    overflow: auto;
                }

                #toc-content ol {
                    padding-left: 10px;
                }

                #toc-content ol li {
                    padding-left: 10px;
                }

                #toc-content .toc-link:hover {
                    color: #42b983;
                    font-weight: 700;
                    text-decoration: underline;
                }

                #toc-content .toc-link::before {
                    background-color: transparent;
                    max-height: 25px;

                    position: absolute;
                    right: 23.5vw;
                    display: block;
                }

                #toc-content .is-active-link {
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

                #floating-toc-btn .btn-floating {
                    width: 48px;
                    height: 48px;
                }

                #floating-toc-btn .btn-floating i {
                    line-height: 48px;
                    font-size: 1.4rem;
                }
            </style>
            <div class="row">
                <div id="main-content" class="col s12 m12">
                    <!-- 文章内容详情 -->
                    <div id="artDetail">
                        <div class="card">
                            <div class="card-content article-info">
                                <div class="row tag-cate">
                                    <div class="col s7">

                                        <div class="article-tag">

                                            <a href="/tags/Java/">
                                                <span class="chip bg-color">Java</span>
                                            </a>

                                        </div>

                                    </div>
                                    <div class="col s5 right-align">

                                        <div class="post-cate">
                                            <i class="fas fa-bookmark fa-fw icon-category"></i>

                                            <a href="/categories/%E5%90%8E%E7%AB%AF/" class="post-category">
                                                后端
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                <div class="post-info">

                                    <div class="post-date info-break-policy">
                                        <i class="far fa-calendar-minus fa-fw"></i>发布日期:&nbsp;&nbsp;
                                        2019-01-25
                                    </div>





                                    <div class="info-break-policy">
                                        <i class="far fa-file-word fa-fw"></i>文章字数:&nbsp;&nbsp;
                                        215
                                    </div>



                                    <div class="info-break-policy">
                                        <i class="far fa-clock fa-fw"></i>阅读时长:&nbsp;&nbsp;
                                        1 分
                                    </div>



                                    <div id="busuanzi_container_page_pv" class="info-break-policy" style="display: inline;">
                                        <i class="far fa-eye fa-fw"></i>阅读次数:&nbsp;&nbsp;
                                        <span id="busuanzi_value_page_pv">204017</span>
                                    </div>

                                </div>
                            </div>
                            <hr class="clearfix">

                            <link rel="stylesheet" href="/libs/prism/prism.css">
                            <!-- 代码块折行 -->


                            <div class="card-content article-card-content">
                                <div id="articleContent">
                                    <blockquote>
                                        <p>一个轻量级、零依赖的 Java ASCII 表格生成库。</p>
                                    </blockquote>
                                    <h2 id="toc-heading-1"><a href="#特性" class="headerlink" title="特性" target="_blank"></a>特性</h2><ul>
                                        <li>轻量级、无依赖（jar包仅<code>9kb</code>）</li>
                                        <li>API简单易用</li>
                                        <li>易于集成或定制修改，仅一个<a target="_blank" rel="noopener" href="https://github.com/blinkfox/mini-table/blob/master/src/main/java/com/blinkfox/minitable/MiniTable.java">Java</a>文件，且代码规范</li>
                                    </ul>
                                    <h2 id="toc-heading-2"><a href="#集成使用" class="headerlink" title="集成使用" target="_blank"></a>集成使用</h2><h3 id="toc-heading-3"><a href="#Maven集成" class="headerlink" title="Maven集成" target="_blank"></a>Maven集成</h3><div class="code-area" style="position: relative"><i class="fas fa-angle-up code-expand" aria-hidden="true"></i><div class="codecopy_notice" style="opacity: 0; top: 0px;">复制成功</div><i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i><div class="code_lang" title="代码语言">xml</div><pre class="line-numbers language-xml" data-language="xml"><code class="language-xml" style=""><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.blinkfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mini-table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>

                                    <h3 id="toc-heading-4"><a href="#API-使用" class="headerlink" title="API 使用" target="_blank"></a>API 使用</h3><h4 id="toc-heading-5"><a href="#示例1（无标题）" class="headerlink" title="示例1（无标题）" target="_blank"></a>示例1（无标题）</h4><div class="code-area" style="position: relative"><i class="fas fa-angle-up code-expand" aria-hidden="true"></i><div class="codecopy_notice"></div><i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i><div class="code_lang" title="代码语言">java</div><pre class="line-numbers language-java" data-language="java"><code class="language-java"><span class="token class-name">String</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MiniTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addHeaders</span><span class="token punctuation">(</span><span class="token string">"header1"</span><span class="token punctuation">,</span> <span class="token string">"header2"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addDatas</span><span class="token punctuation">(</span><span class="token string">"col11"</span><span class="token punctuation">,</span> <span class="token string">"col12"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addDatas</span><span class="token punctuation">(</span><span class="token string">"col21"</span><span class="token punctuation">,</span> <span class="token string">"col22"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>

                                    <p>输出结果:</p>
                                    <div class="code-area" style="position: relative"><i class="fas fa-angle-up code-expand" aria-hidden="true"></i><div class="codecopy_notice" style="opacity: 0; top: 0px;">复制成功</div><i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i><div class="code_lang" title="代码语言">bash</div><pre class="line-numbers language-bash" data-language="bash"><code class="language-bash">+---------+---------+
<span class="token operator">|</span> header1 <span class="token operator">|</span> header2 <span class="token operator">|</span>
+---------+---------+
<span class="token operator">|</span>  col11  <span class="token operator">|</span>  col12  <span class="token operator">|</span>
<span class="token operator">|</span>  col21  <span class="token operator">|</span>  col22  <span class="token operator">|</span>
+---------+---------+<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>

                                    <h4 id="toc-heading-6"><a href="#示例2（有标题）" class="headerlink" title="示例2（有标题）" target="_blank"></a>示例2（有标题）</h4><div class="code-area" style="position: relative"><i class="fas fa-angle-up code-expand" aria-hidden="true"></i><div class="codecopy_notice"></div><i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i><div class="code_lang" title="代码语言">java</div><pre class="line-numbers language-java" data-language="java"><code class="language-java"><span class="token class-name">String</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MiniTable</span><span class="token punctuation">(</span><span class="token string">"The Title"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addHeaders</span><span class="token punctuation">(</span><span class="token string">"Name"</span><span class="token punctuation">,</span> <span class="token string">"Sex"</span><span class="token punctuation">,</span> <span class="token string">"Age"</span><span class="token punctuation">,</span> <span class="token string">"Email"</span><span class="token punctuation">,</span> <span class="token string">"Phone"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addDatas</span><span class="token punctuation">(</span><span class="token string">"LiLei"</span><span class="token punctuation">,</span> <span class="token string">"male"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">"lilei@gmail.com"</span><span class="token punctuation">,</span> <span class="token string">"13809345219"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addDatas</span><span class="token punctuation">(</span><span class="token string">"hanMeiMei"</span><span class="token punctuation">,</span> <span class="token string">"female"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">"hmm@163.com"</span><span class="token punctuation">,</span> <span class="token string">"13515343853"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addDatas</span><span class="token punctuation">(</span><span class="token string">"ZhangSan"</span><span class="token punctuation">,</span> <span class="token string">"female"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token string">"zhangsan@gmail.com"</span><span class="token punctuation">,</span> <span class="token string">"13920199836"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>

                                    <p>输出结果:</p>
                                    <div class="code-area" style="position: relative"><i class="fas fa-angle-up code-expand" aria-hidden="true"></i><div class="codecopy_notice"></div><i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i><div class="code_lang" title="代码语言">bash</div><pre class="line-numbers language-bash" data-language="bash"><code class="language-bash">+-------------------------------------------------------------+
<span class="token operator">|</span>                          The Title                          <span class="token operator">|</span>
+-----------+--------+-----+--------------------+-------------+
<span class="token operator">|</span>   Name    <span class="token operator">|</span>  Sex   <span class="token operator">|</span> Age <span class="token operator">|</span>       Email        <span class="token operator">|</span>    Phone    <span class="token operator">|</span>
+-----------+--------+-----+--------------------+-------------+
<span class="token operator">|</span>   LiLei   <span class="token operator">|</span>  male  <span class="token operator">|</span> <span class="token number">25</span>  <span class="token operator">|</span>  lilei@gmail.com   <span class="token operator">|</span> <span class="token number">13809345219</span> <span class="token operator">|</span>
<span class="token operator">|</span> hanMeiMei <span class="token operator">|</span> female <span class="token operator">|</span> <span class="token number">23</span>  <span class="token operator">|</span>    hmm@163.com     <span class="token operator">|</span> <span class="token number">13515343853</span> <span class="token operator">|</span>
<span class="token operator">|</span> ZhangSan  <span class="token operator">|</span> female <span class="token operator">|</span> <span class="token number">32</span>  <span class="token operator">|</span> zhangsan@gmail.com <span class="token operator">|</span> <span class="token number">13920199836</span> <span class="token operator">|</span>
+-----------+--------+-----+--------------------+-------------+<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>

                                    <h2 id="toc-heading-7"><a href="#许可证" class="headerlink" title="许可证" target="_blank"></a>许可证</h2><p>本 <a target="_blank" rel="noopener" href="https://github.com/blinkfox/mini-table">mini-table</a> 类库遵守 <a target="_blank" rel="noopener" href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a> 许可证。</p>


                                </div>
                                <hr>



                                <div class="reprint" id="reprint-statement">

                                    <div class="reprint__author">
                <span class="reprint-meta" style="font-weight: bold;">
                    <i class="fas fa-user">
                        文章作者:
                    </i>
                </span>
                                        <span class="reprint-info">
                    <a href="/about" rel="external nofollow noreferrer">blinkfox</a>
                </span>
                                    </div>
                                    <div class="reprint__type">
                <span class="reprint-meta" style="font-weight: bold;">
                    <i class="fas fa-link">
                        文章链接:
                    </i>
                </span>
                                        <span class="reprint-info">
                    <a href="https://blinkfox.github.io/2019/01/25/hou-duan/java/yi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku/">https://blinkfox.github.io/2019/01/25/hou-duan/java/yi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku/</a>
                </span>
                                    </div>
                                    <div class="reprint__notice">
                <span class="reprint-meta" style="font-weight: bold;">
                    <i class="fas fa-copyright">
                        版权声明:
                    </i>
                </span>
                                        <span class="reprint-info">
                    本博客所有文章除特別声明外，均采用
                    <a href="https://creativecommons.org/licenses/by/4.0/deed.zh" rel="external nofollow noreferrer" target="_blank">CC BY 4.0</a>
                    许可协议。转载请注明来源
                    <a href="/about" target="_blank">blinkfox</a>
                    !
                </span>
                                    </div>

                                </div>

                                <script async="" defer="">
                                    document.addEventListener("copy", function (e) {
                                        let toastHTML = '<span>复制成功，请遵循本文的转载规则</span><button class="btn-flat toast-action" onclick="navToReprintStatement()" style="font-size: smaller">查看</a>';
                                        M.toast({html: toastHTML})
                                    });

                                    function navToReprintStatement() {
                                        $("html, body").animate({scrollTop: $("#reprint-statement").offset().top - 80}, 800);
                                    }
                                </script>



                                <div class="tag_share" style="display: block;">
                                    <div class="post-meta__tag-list" style="display: inline-block;">

                                        <div class="article-tag">

                                            <a href="/tags/Java/">
                                                <span class="chip bg-color">Java</span>
                                            </a>

                                        </div>

                                    </div>
                                    <div class="post_share" style="zoom: 80%; width: fit-content; display: inline-block; float: right; margin: -0.15rem 0;">
                                        <link rel="stylesheet" type="text/css" href="/libs/share/css/share.min.css">
                                        <div id="article-share">


                                            <div class="social-share share-component" data-sites="twitter,facebook,google,qq,qzone,wechat,weibo,douban,linkedin" data-wechat-qrcode-helper="<p>微信扫一扫即可分享！</p>"><a class="social-share-icon icon-twitter" href="https://twitter.com/intent/tweet?text=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;via=https%3A%2F%2Fblinkfox.github.io" target="_blank"></a><a class="social-share-icon icon-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F" target="_blank"></a><a class="social-share-icon icon-google" href="https://plus.google.com/share?url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F" target="_blank"></a><a class="social-share-icon icon-qq" href="http://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;title=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;source=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;desc=%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&amp;pics=https%3A%2F%2Fblinkfox.github.io%2Fmedias%2Flogo.png&amp;summary=&quot;%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&quot;" target="_blank"></a><a class="social-share-icon icon-qzone" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;title=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;desc=%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&amp;summary=%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&amp;site=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;pics=https%3A%2F%2Fblinkfox.github.io%2Fmedias%2Flogo.png" target="_blank"></a><a class="social-share-icon icon-wechat" href="javascript:"><div class="wechat-qrcode"><h4>微信扫一扫：分享</h4><div class="qrcode" title="https://blinkfox.github.io/2019/01/25/hou-duan/java/yi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku/"><canvas width="100" height="100" style="display: none;"></canvas><img alt="Scan me!" src="data:image/png;base64,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" style="display: block;"></div><div class="help"><p>微信扫一扫即可分享！</p></div></div></a><a class="social-share-icon icon-weibo" href="https://service.weibo.com/share/share.php?url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;title=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;pic=https%3A%2F%2Fblinkfox.github.io%2Fmedias%2Flogo.png&amp;appkey=" target="_blank"></a><a class="social-share-icon icon-douban" href="http://shuo.douban.com/!service/share?href=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;name=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;text=%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&amp;image=https%3A%2F%2Fblinkfox.github.io%2Fmedias%2Flogo.png&amp;starid=0&amp;aid=0&amp;style=11" target="_blank"></a><a class="social-share-icon icon-linkedin" href="http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;url=https%3A%2F%2Fblinkfox.github.io%2F2019%2F01%2F25%2Fhou-duan%2Fjava%2Fyi-ge-ji-jian-de-java-ascii-biao-ge-sheng-cheng-ku%2F&amp;summary=%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%BB%9D%E5%A2%83%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BF%83%E7%81%B5%E7%9A%84%E8%BF%B7%E9%80%94&amp;source=%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%20Java%20ASCII%20%E8%A1%A8%E6%A0%BC%E7%94%9F%E6%88%90%E5%BA%93%20%7C%20%E9%97%AA%E7%83%81%E4%B9%8B%E7%8B%90&amp;armin=armin" target="_blank"></a></div>
                                            <script src="/libs/share/js/social-share.min.js"></script>




                                        </div>

                                    </div>
                                </div>

                                <style>
                                    #reward {
                                        margin: 40px 0;
                                        text-align: center;
                                    }

                                    #reward .reward-link {
                                        font-size: 1.4rem;
                                        line-height: 38px;
                                    }

                                    #reward .btn-floating:hover {
                                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.2);
                                    }

                                    #rewardModal {
                                        width: 320px;
                                        height: 350px;
                                    }

                                    #rewardModal .reward-title {
                                        margin: 15px auto;
                                        padding-bottom: 5px;
                                    }

                                    #rewardModal .modal-content {
                                        padding: 10px;
                                    }

                                    #rewardModal .close {
                                        position: absolute;
                                        right: 15px;
                                        top: 15px;
                                        color: rgba(0, 0, 0, 0.5);
                                        font-size: 1.3rem;
                                        line-height: 20px;
                                        cursor: pointer;
                                    }

                                    #rewardModal .close:hover {
                                        color: #ef5350;
                                        transform: scale(1.3);
                                        -moz-transform:scale(1.3);
                                        -webkit-transform:scale(1.3);
                                        -o-transform:scale(1.3);
                                    }

                                    #rewardModal .reward-tabs {
                                        margin: 0 auto;
                                        width: 210px;
                                    }

                                    .reward-tabs .tabs {
                                        height: 38px;
                                        margin: 10px auto;
                                        padding-left: 0;
                                    }

                                    .reward-content ul {
                                        padding-left: 0 !important;
                                    }

                                    .reward-tabs .tabs .tab {
                                        height: 38px;
                                        line-height: 38px;
                                    }

                                    .reward-tabs .tab a {
                                        color: #fff;
                                        background-color: #ccc;
                                    }

                                    .reward-tabs .tab a:hover {
                                        background-color: #ccc;
                                        color: #fff;
                                    }

                                    .reward-tabs .wechat-tab .active {
                                        color: #fff !important;
                                        background-color: #22AB38 !important;
                                    }

                                    .reward-tabs .alipay-tab .active {
                                        color: #fff !important;
                                        background-color: #019FE8 !important;
                                    }

                                    .reward-tabs .reward-img {
                                        width: 210px;
                                        height: 210px;
                                    }
                                </style>

                                <div id="reward">
                                    <a href="#rewardModal" class="reward-link modal-trigger btn-floating btn-medium waves-effect waves-light red">赏</a>

                                    <!-- Modal Structure -->
                                    <div id="rewardModal" class="modal" tabindex="0" style="z-index: 1003; display: none; opacity: 0; top: 4%; transform: scaleX(0.8) scaleY(0.8);">
                                        <div class="modal-content">
                                            <a class="close modal-close"><i class="fas fa-times"></i></a>
                                            <h4 class="reward-title">你的赏识是我前进的动力</h4>
                                            <div class="reward-content">
                                                <div class="reward-tabs">
                                                    <ul class="tabs row">
                                                        <li class="tab col s6 alipay-tab waves-effect waves-light"><a href="#alipay" class="">支付宝</a></li>
                                                        <li class="tab col s6 wechat-tab waves-effect waves-light"><a href="#wechat" class="active">微 信</a></li>
                                                        <li class="indicator" style="left: 0px; right: 105px;"></li></ul>
                                                    <div id="alipay" class="" style="display: none;">
                                                        <img src="/medias/reward/alipay.jpg" class="reward-img" alt="支付宝打赏二维码">
                                                    </div>
                                                    <div id="wechat" class="active" style="display: block;">
                                                        <img src="/medias/reward/wechat.png" class="reward-img" alt="微信打赏二维码">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <script>
                                    $(function () {
                                        $('.tabs').tabs();
                                    });
                                </script>


                            </div>
                        </div>

                        <article id="prenext-posts" class="prev-next articles" style="width: 888.438px;">
                            <div class="row article-row">

                                <div class="article col s12 m6 aos-init" data-aos="fade-up">
                                    <div class="article-badge left-badge text-color">
                                        <i class="fas fa-chevron-left"></i>&nbsp;上一篇</div>
                                    <div class="card">
                                        <a href="/2019/02/14/hou-duan/java/java-dai-ma-xing-neng-ping-gu-ku-stalker-jie-shao/">
                                            <div class="card-image">

                                                <img src="https://statics.sh1a.qingstor.com/2019/02/14/stalker.jpg" class="responsive-img" alt="Java代码性能评估库Stalker介绍">

                                                <span class="card-title">Java代码性能评估库Stalker介绍</span>
                                            </div>
                                        </a>
                                        <div class="card-content article-content">
                                            <div class="summary block-with-text">



                                            </div>
                                            <div class="publish-info">
                        <span class="publish-date">
                            <i class="far fa-clock fa-fw icon-date"></i>2019-02-14
                        </span>
                                                <span class="publish-author">

                            <i class="fas fa-bookmark fa-fw icon-category"></i>

                            <a href="/categories/%E5%90%8E%E7%AB%AF/" class="post-category">
                                    后端
                                </a>


                        </span>
                                            </div>
                                        </div>

                                        <div class="card-action article-tags">

                                            <a href="/tags/Java/">
                                                <span class="chip bg-color">Java</span>
                                            </a>

                                            <a href="/tags/%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95/">
                                                <span class="chip bg-color">性能测试</span>
                                            </a>

                                        </div>

                                    </div>
                                </div>


                                <div class="article col s12 m6 aos-init" data-aos="fade-up">
                                    <div class="article-badge right-badge text-color">
                                        下一篇&nbsp;<i class="fas fa-chevron-right"></i>
                                    </div>
                                    <div class="card">
                                        <a href="/2018/12/19/ruan-jian-she-ji/she-ji-mo-shi/java-mian-xiang-dui-xiang-she-ji-zhi-qiao-jie-mo-shi/">
                                            <div class="card-image">

                                                <img src="https://statics.sh1a.qingstor.com/2018/12/19/bridge.jpg" class="responsive-img" alt="Java面向对象设计之桥接模式">

                                                <span class="card-title">Java面向对象设计之桥接模式</span>
                                            </div>
                                        </a>
                                        <div class="card-content article-content">
                                            <div class="summary block-with-text">



                                            </div>
                                            <div class="publish-info">
                            <span class="publish-date">
                                <i class="far fa-clock fa-fw icon-date"></i>2018-12-19
                            </span>
                                                <span class="publish-author">

                            <i class="fas fa-bookmark fa-fw icon-category"></i>

                            <a href="/categories/%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1/" class="post-category">
                                    软件设计
                                </a>


                        </span>
                                            </div>
                                        </div>

                                        <div class="card-action article-tags">

                                            <a href="/tags/Java/">
                                                <span class="chip bg-color">Java</span>
                                            </a>

                                            <a href="/tags/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/">
                                                <span class="chip bg-color">设计模式</span>
                                            </a>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </article>

                    </div>



                    <!-- 代码块功能依赖 -->
                    <script type="text/javascript" src="/libs/codeBlock/codeBlockFuction.js"></script>

                    <!-- 代码语言 -->

                    <script type="text/javascript" src="/libs/codeBlock/codeLang.js"></script>


                    <!-- 代码块复制 -->

                    <script type="text/javascript" src="/libs/codeBlock/codeCopy.js"></script>


                    <!-- 代码块收缩 -->

                    <script type="text/javascript" src="/libs/codeBlock/codeShrink.js"></script>


                </div>
                <div id="toc-aside" class="col l3 hide-on-med-and-down" style="display: none;">
                    <div class="toc-widget card" style="background-color: white;">
                        <div class="toc-title"><i class="far fa-list-alt"></i>&nbsp;&nbsp;目录</div>
                        <div id="toc-content"><ol class="toc-list "><li class="toc-list-item is-active-li"><a href="#toc-heading-1" class="toc-link node-name--H2  is-active-link">特性</a></li><li class="toc-list-item"><a href="#toc-heading-2" class="toc-link node-name--H2 ">集成使用</a><ol class="toc-list  is-collapsible is-collapsed"><li class="toc-list-item"><a href="#toc-heading-3" class="toc-link node-name--H3 ">Maven集成</a></li><li class="toc-list-item"><a href="#toc-heading-4" class="toc-link node-name--H3 ">API 使用</a><ol class="toc-list  is-collapsible is-collapsed"><li class="toc-list-item"><a href="#toc-heading-5" class="toc-link node-name--H4 ">示例1（无标题）</a></li><li class="toc-list-item"><a href="#toc-heading-6" class="toc-link node-name--H4 ">示例2（有标题）</a></li></ol></li></ol></li><li class="toc-list-item"><a href="#toc-heading-7" class="toc-link node-name--H2 ">许可证</a></li></ol></div>
                    </div>
                </div>
            </div>

            <!-- TOC 悬浮按钮. -->

            <div id="floating-toc-btn" class="hide-on-med-and-down">
                <a class="btn-floating btn-large bg-color">
                    <i class="fas fa-list-ul"></i>
                </a>
            </div>


            <script src="/libs/tocbot/tocbot.min.js"></script>
            <script>
                $(function () {
                    tocbot.init({
                        tocSelector: '#toc-content',
                        contentSelector: '#articleContent',
                        headingsOffset: -($(window).height() * 0.4 - 45),
                        collapseDepth: Number('0'),
                        headingSelector: 'h2, h3, h4'
                    });

                    // modify the toc link href to support Chinese.
                    let i = 0;
                    let tocHeading = 'toc-heading-';
                    $('#toc-content a').each(function () {
                        $(this).attr('href', '#' + tocHeading + (++i));
                    });

                    // modify the heading title id to support Chinese.
                    i = 0;
                    $('#articleContent').children('h2, h3, h4').each(function () {
                        $(this).attr('id', tocHeading + (++i));
                    });

                    // Set scroll toc fixed.
                    let tocHeight = parseInt($(window).height() * 0.4 - 64);
                    let $tocWidget = $('.toc-widget');
                    $(window).scroll(function () {
                        let scroll = $(window).scrollTop();
                        /* add post toc fixed. */
                        if (scroll > tocHeight) {
                            $tocWidget.addClass('toc-fixed');
                        } else {
                            $tocWidget.removeClass('toc-fixed');
                        }
                    });


                    /* 修复文章卡片 div 的宽度. */
                    let fixPostCardWidth = function (srcId, targetId) {
                        let srcDiv = $('#' + srcId);
                        if (srcDiv.length === 0) {
                            return;
                        }

                        let w = srcDiv.width();
                        if (w >= 450) {
                            w = w + 21;
                        } else if (w >= 350 && w < 450) {
                            w = w + 18;
                        } else if (w >= 300 && w < 350) {
                            w = w + 16;
                        } else {
                            w = w + 14;
                        }
                        $('#' + targetId).width(w);
                    };

                    // 切换TOC目录展开收缩的相关操作.
                    const expandedClass = 'expanded';
                    let $tocAside = $('#toc-aside');
                    let $mainContent = $('#main-content');
                    $('#floating-toc-btn .btn-floating').click(function () {
                        if ($tocAside.hasClass(expandedClass)) {
                            $tocAside.removeClass(expandedClass).hide();
                            $mainContent.removeClass('l9');
                        } else {
                            $tocAside.addClass(expandedClass).show();
                            $mainContent.addClass('l9');
                        }
                        fixPostCardWidth('artDetail', 'prenext-posts');
                    });

                });
            </script>



        </main>




        <footer class="page-footer bg-color">

            <link rel="stylesheet" href="/libs/aplayer/APlayer.min.css">
            <style>
                .aplayer .aplayer-lrc p {

                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px !important;
                }

                .aplayer .aplayer-lrc p.aplayer-lrc-current {

                    font-size: 15px;
                    color: #42b983;
                }


                .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
                    left: -66px !important;
                }

                .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
                    left: 0px !important;
                }


            </style>
            <div class="">

                <div class="row">
                    <meting-js class="col l8 offset-l2 m10 offset-m1 s12" server="netease" type="playlist" id="503838841" fixed="true" autoplay="false" theme="#42b983" loop="all" order="random" preload="auto" volume="0.7" list-folded="true">
                    </meting-js>
                </div>
            </div>

            <script src="/libs/aplayer/APlayer.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>



            <div class="container row center-align" style="margin-bottom: 15px !important;">
                <div class="col s12 m8 l8 copy-right">
                    Copyright&nbsp;©

                    <span id="year">2018 - 2022</span>

                    <span id="year">2018</span>
                    <a href="/about" target="_blank">blinkfox</a>
                    |&nbsp;Powered by&nbsp;<a href="https://hexo.io/" target="_blank">Hexo</a>
                    |&nbsp;Theme&nbsp;<a href="https://github.com/blinkfox/hexo-theme-matery" target="_blank">Matery</a>
                    <br>

                    &nbsp;<i class="fas fa-chart-area"></i>&nbsp;站点总字数:&nbsp;<span class="white-color">197k</span>&nbsp;字






                    <span id="busuanzi_container_site_pv" style="display: inline;">
                |&nbsp;<i class="far fa-eye"></i>&nbsp;总访问量:&nbsp;<span id="busuanzi_value_site_pv" class="white-color">357340</span>&nbsp;次
            </span>


                    <span id="busuanzi_container_site_uv" style="display: inline;">
                |&nbsp;<i class="fas fa-users"></i>&nbsp;总访问人数:&nbsp;<span id="busuanzi_value_site_uv" class="white-color">78023</span>&nbsp;人
            </span>

                    <br>

                    <span id="sitetime">本站已安全运行 3 年 299 天 9 小时 31 分钟 41 秒</span>
                    <script>
                        function siteTime() {
                            var seconds = 1000;
                            var minutes = seconds * 60;
                            var hours = minutes * 60;
                            var days = hours * 24;
                            var years = days * 365;
                            var today = new Date();
                            var startYear = "2018";
                            var startMonth = "09";
                            var startDate = "20";
                            var startHour = "0";
                            var startMinute = "0";
                            var startSecond = "0";
                            var todayYear = today.getFullYear();
                            var todayMonth = today.getMonth() + 1;
                            var todayDate = today.getDate();
                            var todayHour = today.getHours();
                            var todayMinute = today.getMinutes();
                            var todaySecond = today.getSeconds();
                            var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
                            var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
                            var diff = t2 - t1;
                            var diffYears = Math.floor(diff / years);
                            var diffDays = Math.floor((diff / days) - diffYears * 365);
                            var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
                            var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
                                minutes);
                            var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
                                diffMinutes * minutes) / seconds);
                            if (startYear == todayYear) {
                                document.getElementById("year").innerHTML = todayYear;
                                document.getElementById("sitetime").innerHTML = "本站已安全运行 " + diffDays + " 天 " + diffHours +
                                    " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
                            } else {
                                document.getElementById("year").innerHTML = startYear + " - " + todayYear;
                                document.getElementById("sitetime").innerHTML = "本站已安全运行 " + diffYears + " 年 " + diffDays +
                                    " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
                            }
                        }
                        setInterval(siteTime, 1000);
                    </script>

                    <br>

                </div>
                <div class="col s12 m4 l4 social-link social-statis">
                    <a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
                        <i class="fab fa-github"></i>
                    </a>



                    <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank" data-tooltip="邮件联系我" data-position="top" data-delay="50">
                        <i class="fas fa-envelope-open"></i>
                    </a>







                    <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873" class="tooltipped" target="_blank" data-tooltip="QQ联系我: 1181062873" data-position="top" data-delay="50">
                        <i class="fab fa-qq"></i>
                    </a>







                    <a href="/atom.xml" class="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top" data-delay="50">
                        <i class="fas fa-rss"></i>
                    </a>

                </div>
            </div>
        </footer>

        <div class="progress-bar" style="width: 0%;"></div>


        <!-- 搜索遮罩框 -->
        <div id="searchModal" class="modal" tabindex="0" style="z-index: 1003; display: none; opacity: 0; top: 4%; transform: scaleX(0.8) scaleY(0.8);">
            <div class="modal-content">
                <div class="search-header">
                    <span class="title"><i class="fas fa-search"></i>&nbsp;&nbsp;搜索</span>
                    <input type="search" id="searchInput" name="s" placeholder="请输入搜索的关键字" class="search-input">
                </div>
                <div id="searchResult"></div>
            </div>
        </div>

        <script type="text/javascript">
            $(function () {
                var searchFunc = function (path, search_id, content_id) {
                    'use strict';
                    $.ajax({
                        url: path,
                        dataType: "xml",
                        success: function (xmlResponse) {
                            // get the contents from search data
                            var datas = $("entry", xmlResponse).map(function () {
                                return {
                                    title: $("title", this).text(),
                                    content: $("content", this).text(),
                                    url: $("url", this).text()
                                };
                            }).get();
                            var $input = document.getElementById(search_id);
                            var $resultContent = document.getElementById(content_id);
                            $input.addEventListener('input', function () {
                                var str = '<ul class=\"search-result-list\">';
                                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                                $resultContent.innerHTML = "";
                                if (this.value.trim().length <= 0) {
                                    return;
                                }
                                // perform local searching
                                datas.forEach(function (data) {
                                    var isMatch = true;
                                    var data_title = data.title.trim().toLowerCase();
                                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                                    var data_url = data.url;
                                    data_url = data_url.indexOf('/') === 0 ? data.url : '/' + data_url;
                                    var index_title = -1;
                                    var index_content = -1;
                                    var first_occur = -1;
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
                                        var content = data.content.trim().replace(/<[^>]+>/g, "");
                                        if (first_occur >= 0) {
                                            // cut out 100 characters
                                            var start = first_occur - 20;
                                            var end = first_occur + 80;
                                            if (start < 0) {
                                                start = 0;
                                            }
                                            if (start === 0) {
                                                end = 100;
                                            }
                                            if (end > content.length) {
                                                end = content.length;
                                            }
                                            var match_content = content.substr(start, end);
                                            // highlight all keywords
                                            keywords.forEach(function (keyword) {
                                                var regS = new RegExp(keyword, "gi");
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
                };

                searchFunc('/search.xml', 'searchInput', 'searchResult');
            });
        </script>

        <!-- 回到顶部按钮 -->
        <div id="backTop" class="top-scroll" style="display: none;">
            <a class="btn-floating btn-large waves-effect waves-light" href="#!">
                <i class="fas fa-arrow-up"></i>
            </a>
        </div>


        <script src="/libs/materialize/materialize.min.js"></script>
        <script src="/libs/masonry/masonry.pkgd.min.js"></script>
        <script src="/libs/aos/aos.js"></script>
        <script src="/libs/scrollprogress/scrollProgress.min.js"></script>
        <script src="/libs/lightGallery/js/lightgallery-all.min.js"></script>
        <script src="/js/matery.js"></script>

        <!-- Baidu Analytics -->

        <!-- Baidu Push -->

        <script>
            (function () {
                var bp = document.createElement('script');
                var curProtocol = window.location.protocol.split(':')[0];
                if (curProtocol === 'https') {
                    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
                } else {
                    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
                }
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(bp, s);
            })();
        </script>


        <script src="/libs/others/clicklove.js" async="async"></script>


        <script async="" src="/libs/others/busuanzi.pure.mini.js"></script>











        <script type="text/javascript" size="150" alpha="0.6" zindex="-1" src="/libs/background/ribbon-refresh.min.js" async="async"></script>





        <script src="/libs/instantpage/instantpage.js" type="module"></script>





        <canvas width="1920" height="945" style="opacity: 0.6; position: fixed; top: 0px; left: 0px; z-index: -1; width: 100%; height: 100%; pointer-events: none;"></canvas><div class="sidenav-overlay"></div><div class="drag-target"></div><div class="material-tooltip"><div class="tooltip-content"></div></div><div class="material-tooltip"><div class="tooltip-content"></div></div><div class="material-tooltip"><div class="tooltip-content"></div></div><div class="material-tooltip"><div class="tooltip-content"></div></div><div class="material-tooltip"><div class="tooltip-content"></div></div></body></html>