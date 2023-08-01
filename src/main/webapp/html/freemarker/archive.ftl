<!--
    @author:  zZZ....
    @description: 时光轴
    @date: 2023/1/6
-->

<style>
    .bottom-main{
        padding-bottom: 1.6rem;
        overflow: revert;
    }
    .heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}
    .heart:after, .heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}
    .heart:after{top: -5px;}
    .heart:before{left: -5px;}

    #post-calendar{
        height: 225px;
    }
</style>


<!--banner-->
<div class="height-475px" style="margin-top: -75px">
    <div class="blog-bg-img blog-home-flex blog-wh-100"  style="background-image: url(${basePath}/medias/banner/1.jpg);visibility: visible">
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                    <div class="brand">
                        <h1 class="blog-text-center blog-title">时光轴</h1>
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

    <!--文章日历图表 start-->
    <div class="container archive-calendar">
        <div class="card" data-aos="zoom-in-up">
            <div id="post-calendar" class="card-content" >

            </div>
        </div>
    </div>
    <!--文章日历  end-->

    <div style="width: 100%;overflow-x: hidden;padding-bottom: 10px"><!--解决页面刷新时抖动-->


        <!--时光轴 start-->
        <div id="cd-timeline" class="container">



            <#if blogList??  && (blogList?size > 0)  >
            <#list blogList as blog >
                <#if blog_index ==0>
                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img year  aos-animate" data-aos="zoom-in-up">
                            <a href="javaScript:void(0)">NOW</a>
                        </div>

                        <div class="cd-timeline-img day " data-aos="zoom-in">
                            <span><i class="fa fa-book" aria-hidden="true"></i></span>
                            <span class="cd-date" data-aos="fade-left">${blog.publishDate}</span>
                        </div>
                        <article class="cd-timeline-content " data-aos="fade-right">
                            <div class="article col s12 m6">
                                <div class="card horizontal">
                                    <div class="card-image">
                                        <a href="${blog.href}" target="_blank">
                                            <img  src="${blog.path}" alt="${blog.title}" onerror="noFind(this,'/img/404-4l2eq2.jpg')">
                                        </a>
                                    </div>
                                    <div class="card-stacked">
                                        <div class="card-content ">
                                            <p>${blog.title}</p>
                                        </div>
                                        <div class="card-action">

                                            <#list blog.tagsName?split(",") as tagName>
                                                <a href="#"  onclick="pjax('/blogBlogs/tagsBt?type=tags&key=${tagName}',5)">
                                                    <span class="tags-m bg-color">${tagName}</span>
                                                </a>
                                            </#list>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                 <#else >

                    <#if blog_index % 2 ==0>
                        <div class="cd-timeline-block">

                            <div class="cd-timeline-img day " data-aos="zoom-in">
                                <span><i class="fa fa-book" aria-hidden="true"></i></span>
                                <span class="cd-date" data-aos="fade-left">${blog.publishDate}</span>
                            </div>
                            <article class="cd-timeline-content " data-aos="fade-right">
                                <div class="article col s12 m6">
                                    <div class="card horizontal">
                                        <div class="card-image">
                                            <a href="${blog.href}" target="_blank">
                                                <img  src="${blog.path}" alt="${blog.title}" onerror="noFind(this,'/img/404-4l2eq2.jpg')">
                                            </a>
                                        </div>
                                        <div class="card-stacked">
                                            <div class="card-content">
                                                <p>${blog.title}</p>
                                            </div>
                                            <div class="card-action">
                                                <#list blog.tagsName?split(",") as tagName>
                                                    <a href="#"  onclick="pjax('/blogBlogs/tagsBt?type=tags&key=${tagName}',5)">
                                                        <span class="tags-m bg-color">${tagName}</span>
                                                    </a>
                                                </#list>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                    <#else >
                        <div class="cd-timeline-block">

                            <div class="cd-timeline-img day " data-aos="zoom-in">
                                <span><i class="fa fa-book" aria-hidden="true"></i></span>
                                <span class="cd-date" data-aos="fade-right">${blog.publishDate}</span>
                            </div>
                            <article class="cd-timeline-content " data-aos="fade-left">
                                <div class="article col s12 m6">
                                    <div class="card horizontal">
                                        <div class="card-image">
                                            <a href="${blog.href}" target="_blank">
                                                <img  src="${blog.path}" alt="${blog.title}" onerror="noFind(this,'/img/404-4l2eq2.jpg')">
                                            </a>
                                        </div>
                                        <div class="card-stacked">
                                            <div class="card-content">
                                                <p>${blog.title}</p>
                                            </div>
                                            <div class="card-action">
                                                <#list blog.tagsName?split(",") as tagName>
                                                    <a href="#" onclick="pjax('/blogBlogs/tagsBt?type=tags&key=${tagName}',5)">
                                                        <span class="tags-m bg-color">${tagName}</span>
                                                    </a>
                                                </#list>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </#if >
                </#if>

            </#list>
            </#if>

        </div>
        <!--时光轴 end-->
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




<#--<script type="text/javascript" src="${basePath}/libs/echarts/echarts.min.js"></script>-->
<script type="text/javascript">
    $(function (e) {
        let pageData={currentLines:${currentLines},pageSize:10};
        let myChart = echarts.init(document.getElementById('post-calendar'));
        let option = {

            title: {
                top: 0,
                text: '时光轴',
                left: 'center',
                textStyle: {
                    color: '#5c9358'
                }
            },
            //鼠标悬浮提示样式
            tooltip: {
                padding: 1,
                backgroundColor: 'rgba(80,83,82,0.3)',
                borderColor: '#ccbfce',
                borderWidth: 0,
                formatter: function (obj) {
                    let value = obj.value;
                    return '<span style="font-size: 10px;color: #737474">' + value[0] + '：' + value[1] + '</span>';
                }
            },
            visualMap: {
                show: true,
                showLabel: true,
                categories: [0, 1, 2, 3, 4],
                calculable: true,
                inRange: {
                    symbol: 'rect',
                    color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
                },
                itemWidth: 20,
                itemHeight: 12,
                orient: 'horizontal',
                left: 'center',
                bottom: 0
            },
            calendar: [{
                left: 'right',
                range: ["2023-01-01", "2023-12-31"],
                cellSize: [13, 13],
                splitLine: {
                    show: false
                },
                itemStyle: {
                    color: '#ebedf0',
                    borderColor: '#fff',
                    borderWidth: 2
                },
                yearLabel: {
                    show: true,
                    align:'right',
                    fontStyle:'italic',


                },
                monthLabel: {
                    nameMap: [
                        '1月', '2月', '3月',
                        '4月', '5月', '6月',
                        '7月', '8月', '9月',
                        '10月', '11月', '12月'
                    ],
                    fontSize: 11,
                    firstDayOfMonth:5,
                    align: 'right',
                    fontStyle:'italic',
                },
                dayLabel: {
                    firstDay: 1,
                    nameMap: ['日', '周:一', '二', '三', '四', '五', '六'],
                    fontSize: 11,
                    align: 'left',
                    fontStyle:'italic'
                }
            }],
            series: [{
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: [
                    ["2023-01-01",0]
                    <#if heatmap??  && (heatmap?size > 0)  >
                    <#list heatmap as heat >
                   , ["${heat.date}", ${heat.num}]
                    </#list>
                    </#if>
                ]
            }]

        };
        myChart.setOption(option);



        if (pageData.currentLines <20){
            commentList(pageData.currentLines,10,pageData,false,loading_m,loaded_m());
        }

        document.querySelector(".loading-m").addEventListener('click',function (e) {
            pageData.pageSize=10;
            commentList( pageData.currentLines, pageData.pageSize,pageData,false,loading_m,loaded_m);

        });

        function commentList(currentLines,pageSize,queryPerm,async,beforeCallback,successCallback) {
            $.ajax({
                async:!async,
                url:'${basePath}/blogBlogs/archiveList',
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

                        document.querySelector('#cd-timeline').insertAdjacentHTML("beforeend",strHtml);
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

                } ,
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

    })
</script>