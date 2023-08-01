<!--
    @author:  zZZ....
    @description: 博客标签页
    @date: 2022/8/4
-->

<#--<link rel="stylesheet" type="text/css" href="${basePath}/libs/jqcloud/jqcloud.css">-->
<style>
    div.jqcloud span:hover { color: #ff397e; font-weight: bolder ;}
    #tagsCloud {
        width: 100%;
        height: 300px;
    }
    .bottom-main{
        padding-bottom: 1.6rem;
        overflow: revert;
    }
    #categoryId {
        width: 100%;
        height: 360px;
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
                                    <span class="waves-effect blog-chip" data-tagname="${classify.classifyName}" style="background-color: ${classify.color};">
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



    <!--文章标签-->
    <div class="container" data-aos="fade-up" data-blog-dis="1">
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
                                    <span class="waves-effect blog-chip" data-tagname="${tag.tagsName}" style="background-color: ${tag.color};">
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


    <!--标签云-->
    <div  class="container" data-aos="fade-up" data-blog-dis="1">
        <div class="card">
            <div class="card-content">
                <div id="tagsCloud" style="min-height: 300px">

                </div>
            </div>
        </div>
    </div>

    <!--分类地图-->
    <div  class="container" data-aos="fade-up" data-blog-dis="1">
        <div class="card">
            <div class="card-content">
                <div id="categoryId" class="card-content" >


                </div>
            </div>
        </div>
    </div>


    <article id="articles" class="container articles blog-display" style="position: relative;min-height: 100px">
        <div class="row tags-posts">

        </div>
    </article>

</main>

<#--<script type="text/javascript" src="${basePath}/libs/jqcloud/jqcloud.js"></script>-->
<#--<script type="text/javascript" src="${basePath}/libs/echarts/echarts.min.js"></script>-->
<script type="text/javascript">

    //pjax页面的js需写在 load函数中
    $(function (e) {

        const words = [

            <#if tags?? && (tags?size > 0) >
                <#list tags as tag>
                    {"text":"${tag.tagsName}","weight":${tag.tagsNum},"link":"#","html":{"data-aos":"zoom-in",onclick:'pjax("/blogBlogs/tagsBt?type=tags&key=${tag.tagsName}",5)'}},
                </#list>
            </#if>
        ];
        const indicatorDate= [
            <#if classifyList?? && (classifyList?size > 0) >
                <#list classifyList as classify>
                        {"name":"${classify.classifyName}","max":26},
                </#list>
            </#if>
        ];

        const mapArr= [
            <#if classifyList?? && (classifyList?size > 0) >
                <#list classifyList as classify>
                    ${classify.classifyNum},
                </#list>
            </#if>
        ];

        $('#tagsCloud').jQCloud(words, {
            autoResize: true,
        });

        let radarChart = echarts.init(document.getElementById('categoryId'));
        let option = {
            title: {
                left: 'center',
                text: '文章分类雷达图',
                textStyle: {
                    fontWeight: 500,
                    fontSize: 22
                }
            },
            tooltip: {},
            radar: {
                name: {
                    textStyle: {
                        color: '#3C4858'
                    }
                },
                indicator: indicatorDate,
                nameGap: 5,
                center: ['50%','55%'],
                radius: '66%'
            },
            series: [{
                type: 'radar',
                color: ['#3ecf8e'],
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data : [
                    {
                        value : mapArr,
                        name : '文章分类数量'
                    }
                ]
            }]
        };

        radarChart.setOption(option);


        $('.blog-tags-body>span').on('click',function () {
            let name = $(this).attr('data-blog-name');
            let span =this;
            $.get('${basePath}/blogBlogs/tagsList?name='+name+'&type=tags',function(data){
                if (data.success){
                    $('#articles>div').html(data.data);
                    $('div[data-blog-dis=1]').each(function () {
                        if ($(this).find(span).length<=0){
                            this.classList.add("blog-display");
                            $(".chip-active").removeClass("chip-active");
                            $(span).children('span').addClass("chip-active")
                        }
                    });
                    $('#articles')[0].classList.remove("blog-display");
                }
            })
        });


        $('.blog-classify-body>span').on('click',function () {
            let name = $(this).attr('data-blog-name');
            let span =this;
            $.get('${basePath}/blogBlogs/tagsList?name='+name+'&type=classify',function(data){
                if (data.success){
                    $('#articles>div').html(data.data);
                    $('div[data-blog-dis=1]').each(function () {
                        if ($(this).find(span).length<=0){
                            this.classList.add("blog-display");
                            $(".chip-active").removeClass("chip-active");
                            $(span).children('span').addClass("chip-active")
                        }
                    });
                    $('#articles')[0].classList.remove("blog-display");
                }
            })
        });

    });



</script>