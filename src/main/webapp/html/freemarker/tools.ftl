<!--
    @author:  zZZ....
    @description: 工具导航
    @date: 2022/12/1
-->
<style>
    .bottom-main{
        padding-bottom: 1.6rem;
        overflow: revert;
    }

    .frind-ship {
        padding: 10px 20px;
    }
    .frind-ship .title {
        display: flex;
        align-items: center;
    }

    .frind-ship .title img {
        width: 100px;
        height: 100px;
        flex-shrink: 0;
    }
    .frind-ship .title div {
        color: #fff;
        padding-left: 10px;
    }
    .frind-ship img {
        border-radius: 50%;
    }
    .frind-ship .title h2 {
        padding-bottom: 5px;
        border-bottom: 2px solid #fff;
        position: relative;
        top: -15px;
        left: 3px;
    }

    .frind-card1 {
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }
    h2 {
        margin: 48px 0 22px -5px;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 2.0rem;
    }

    #tool_search.z-blog-tool-search{
        border:2px solid #79554870;
        border-radius: 39px;
        width: 50%;
        background-color: white;
        padding: 0 15px;
        color: #9e9e9e;
        font-size: 1.4rem;
        font-weight: 900;
        -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
        -webkit-box-shadow: inset 0 3px 8px rgb(0 0 0 / 40%);
        box-shadow: inset 0 3px 8px rgb(0 0 0 / 24%);
    }

    #tool_search.z-blog-tool-search:focus{
        -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.8);
        -webkit-box-shadow: inset 0 3px 8px rgb(0 0 0 / 80%);
        box-shadow: inset 0 3px 8px rgb(0 0 0 / 50%);
        border: 2px solid #5c3f35;
    }
    #tool_search.z-blog-tool-search:hover{
        -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.8);
        -webkit-box-shadow: inset 0 3px 8px rgb(0 0 0 / 80%);
        box-shadow: inset 0 3px 8px rgb(0 0 0 / 50%);
        border:2px solid #5c3f35;
    }

    .z-ioc-search{
        font-size: 1.6rem;
        color: #1b19186b;
        position: relative;
        right: 3rem;
    }

</style>
<!--banner-->
<div class="height-475px" style="margin-top: -75px;overflow-x: clip" >
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(${basePath}/medias/banner/1.jpg);visibility: visible" >
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">网站导航</h1>
                        <div class="description center-align">
                            <span class="z-blog-poetry" data-aos="zoom-in"></span>
                        </div>
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


    <div class="container article-a" >
        <div class="card">
            <div class="card-content">
                <div class="blog-tools-title center-align">
                    <div>
                        <label>

                            <input type="text" id="tool_search" class="z-blog-tool-search" placeholder=" 搜索看看吧..."/>
                            <i class="fas fa-search  z-ioc-search"  ></i>
                        </label>
                    </div>

                </div>

                <div class="container row" >
                    <div id="tool_container">
                        <#if tools??  && (tools?size > 0)  >
                            <#list tools as tool >
                                <div class="col s12 m6  l4 animated-div " data-aos="zoom-in-up" >
                                    <a href="${tool.href}" target="_blank">
                                        <div class="card frind-card1" style="background-image: linear-gradient(to right, #4facfe 0%, ${tool.color} 100%);">
                                            <div class="frind-ship" onclick="heapAdd('${tool.id}')">
                                                <div class="title">
                                                    <img src="${tool.img}" alt="" onerror="noFind(this,'')">
                                                    <div style="overflow: hidden">
                                                        <h2 class="blog-tools-div-name">${tool.title}</h2>
                                                        <p  class="blog-tools-div-p" title="${tool.des}" >${tool.des}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </#list>
                        </#if>
                    </div>

                    <div class="blog-display z-tool-search-result">

                    </div>

                </div>
            </div>
        </div>
    </div>
</main>

<script>
    $(function (e) {

        let toolSearch = document.getElementById('tool_search');
        toolSearch.oninput =function (e) {
            let searchResult = $(".z-tool-search-result");
            let toolContainer = $('#tool_container');
            let keyword =this.value.trim();
            if (keyword){
                let  results = $("#tool_container>div:contains('"+keyword+"')");
                let rc  = results.clone();
                toolContainer.addClass('blog-display');
                if(results.length!==0){
                    searchResult.html(rc);
                }
                searchResult.removeClass('blog-display');
            }else {
                searchResult.addClass('blog-display');
                toolContainer.removeClass('blog-display');
                searchResult.html('');
            }
        }
    })

</script>