/*
    @author:  zZZ....
    @description:  头部js 实在找不到好的方式，只能采用这种笨比方式
    @date: 2022/1/19
*/
document.write(
    ' <header class="navbar-fixed">\n' +
    '    <nav id="headNav" class="bg-color nav-transparent">\n' +
    '        <div id="navContainer" class="nav-wrapper container">\n' +
    '\n' +
    '            <div class="brand-logo">\n' +
    '                <a href="/" class="waves-effect waves-light">\n' +
    '\n' +
    '                    <img src="../img/medias/logo.png" class="logo-img" alt="LOGO">\n' +
    '\n' +
    '                    <span class="logo-span">闪烁之狐</span>\n' +
    '                </a>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <a href="#" data-target="mobile-nav" class="sidenav-trigger button-collapse"><i class="fas fa-bars"></i></a>\n' +
    '            <ul class="right nav-menu">\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="../html/home.html" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-home" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>首页</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="/tags" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-tags" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>标签</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="/categories" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-bookmark" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>分类</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="./archive.html" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-archive" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>时光轴</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="/about" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-user-circle-o" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>关于</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li class="hide-on-med-and-down nav-item">\n' +
    '\n' +
    '                    <a href="/friends" class="waves-effect waves-light">\n' +
    '\n' +
    '                        <i class="fas fa-address-book" style="zoom: 0.6;"></i>\n' +
    '\n' +
    '                        <span>友情链接</span>\n' +
    '                    </a>\n' +
    '\n' +
    '                </li>\n' +
    '\n' +
    '                <li>\n' +
    '                    <a href="#searchModal" class="modal-trigger waves-effect waves-light">\n' +
    '                        <i id="searchIcon" class="fas fa-search" title="搜索" style="zoom: 0.85;"></i>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '\n' +
    '            <!--移动端 侧面导航-->\n' +
    '            <div id="mobile-nav" class="side-nav sidenav">\n' +
    '\n' +
    '                <div class="mobile-head bg-color">\n' +
    '\n' +
    '                    <img src="../medias/logo.png" class="logo-img circle responsive-img">\n' +
    '\n' +
    '                    <div class="logo-name">闪烁之狐</div>\n' +
    '                    <div class="logo-desc">\n' +
    '\n' +
    '                        从来没有真正的绝境，只有心灵的迷途\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <ul class="menu-list mobile-menu-list">\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-home"></i>\n' +
    '\n' +
    '                            首页\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/tags" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-tags"></i>\n' +
    '\n' +
    '                            标签\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/categories" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-bookmark"></i>\n' +
    '\n' +
    '                            分类\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/archives" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-archive"></i>\n' +
    '\n' +
    '                            归档\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/about" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-user-circle-o"></i>\n' +
    '\n' +
    '                            关于\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '                    <li class="m-nav-item">\n' +
    '\n' +
    '                        <a href="/friends" class="waves-effect waves-light">\n' +
    '\n' +
    '                            <i class="fa-fw fas fa-address-book"></i>\n' +
    '\n' +
    '                            友情链接\n' +
    '                        </a>\n' +
    '\n' +
    '                    </li>\n' +
    '\n' +
    '\n' +
    '                    <li>\n' +
    '                        <div class="divider"></div>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="https://github.com/blinkfox/hexo-theme-matery" class="waves-effect waves-light"\n' +
    '                           target="_blank">\n' +
    '                            <i class="fab fa-github-square fa-fw"></i>Fork Me\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <style>\n' +
    '            .nav-transparent .github-corner {\n' +
    '                display: none !important;\n' +
    '            }\n' +
    '\n' +
    '            .github-corner {\n' +
    '                position: absolute;\n' +
    '                z-index: 10;\n' +
    '                top: 0;\n' +
    '                right: 0;\n' +
    '                border: 0;\n' +
    '                transform: scale(1.1);\n' +
    '            }\n' +
    '\n' +
    '            .github-corner svg {\n' +
    '                color: #eaeaea;\n' +
    '                fill: #161515a1;\n' +
    '                height: 64px;\n' +
    '                width: 64px;\n' +
    '            }\n' +
    '\n' +
    '            .github-corner:hover .octo-arm {\n' +
    '                animation: a 0.56s ease-in-out;\n' +
    '            }\n' +
    '\n' +
    '            .github-corner .octo-arm {\n' +
    '                animation: none;\n' +
    '            }\n' +
    '\n' +
    '            @keyframes a {\n' +
    '                0%,\n' +
    '                to {\n' +
    '                    transform: rotate(0);\n' +
    '                }\n' +
    '                20%,\n' +
    '                60% {\n' +
    '                    transform: rotate(-25deg);\n' +
    '                }\n' +
    '                40%,\n' +
    '                80% {\n' +
    '                    transform: rotate(10deg);\n' +
    '                }\n' +
    '            }\n' +
    '        </style>\n' +
    '\n' +
    '        <a href="https://github.com/blinkfox/hexo-theme-matery" class="github-corner tooltipped hide-on-med-and-down"\n' +
    '           target="_blank" data-tooltip="Fork Me" data-position="left" data-delay="50">\n' +
    '            <svg viewBox="0 0 250 250" aria-hidden="true">\n' +
    '                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n' +
    '                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n' +
    '                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n' +
    '            </svg>\n' +
    '        </a>\n' +
    '\n' +
    '    </nav>\n' +
    '\n' +
    '</header>'

);
