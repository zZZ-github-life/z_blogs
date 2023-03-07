<!--
    @author:  zZZ....
    @description: 点击标签跳转页
    @date: 2023/3/1
-->
<style>
    .bottom-main{
        padding-bottom: 1.6rem;
        overflow: revert;
    }

</style>

<!--banner-->
<div class="height-475px" style="margin-top: -75px">
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(${basePath}/medias/banner/1.jpg);visibility: visible">
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">标签|分类</h1>
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

    <#if type == "classify"  >
    <!--文章分类 -->
    <div id="category-cloud" class="container " data-blog-dis="1">
        <div class="card">
            <div class="card-content" data-aos="zoom-in">
                <div class="blog-tags-title center-align">
                    <i class="fas fa-bookmark"></i>&nbsp;&nbsp;文章分类
                </div>
                <div  class="blog-classify-body">

                    <#if classifyList??  && (classifyList?size > 0)  >
                        <#list classifyList as classify >
                            <span  title="${classify.classifyName}: ${classify.classifyNum}" data-blog-name="${classify.classifyName}" >
                                    <span class="waves-effect blog-chip  ${(classify.classifyName == key)?string("chip-active","")}" data-tagname="${classify.classifyName}" style="background-color: ${classify.color};">
                                        ${classify.classifyName}
                                        <span class="blog-tags-num">
                                             ${classify.classifyNum}
                                        </span>
                                    </span>
                             </span>
                        </#list>
                    </#if>
                </div>
            </div>
        </div>
    </div>
    </#if>


    <!--文章标签-->
    <#if type == "tags"  >
    <div class="container  " data-aos="fade-up " data-blog-dis="1">
        <div class="card">
            <div class="card-content">
                <div class="blog-tags-title center-align">
                    <i class="fas fa-tags"></i>
                    文章标签
                </div>
                <div class="blog-tags-body">
                    <#if tags?? && (tags?size > 0) >
                        <#list tags as tag>
                            <span   title="${tag.tagsName}: ${tag.tagsNum}" data-blog-name="${tag.tagsName}" >
                                    <span class="waves-effect blog-chip  ${(tag.tagsName == key)?string("chip-active","")}" data-tagname="${tag.tagsName}" style="background-color: ${tag.color};">
                                        ${tag.tagsName}
                                        <span class="blog-tags-num">${tag.tagsNum}</span>
                                    </span>
                            </span>
                        </#list>
                    </#if>
                </div>
            </div>
        </div>
    </div>
    </#if>

    <article id="articles" class="container articles " style="position: relative;min-height: 100px">
        <div class="row tags-posts">
            ${cards!""}
        </div>
    </article>


</main>

<script>
    <#if type == "tags"  >
    $('.blog-tags-body>span').on('click',function () {

        let name = $(this).attr('data-blog-name');
        let span =this;
        $.get('${basePath}/blogBlogs/tagsList?name='+name+'&type=tags',function(data){
            if (data.success){
                $('#articles>div').html(data.data);
                $(".chip-active").removeClass("chip-active");
                $(span).children('span').addClass("chip-active")
            }
        })
    });
    </#if>

    <#if type == "classify"  >
    $('.blog-classify-body>span').on('click',function () {
        let name = $(this).attr('data-blog-name');
        let span =this;
        $.get('${basePath}/blogBlogs/tagsList?name='+name+'&type=classify',function(data){
            if (data.success){
                $('#articles>div').html(data.data);
                $(".chip-active").removeClass("chip-active");
                $(span).children('span').addClass("chip-active")
            }
        })
    });
    </#if>
</script>