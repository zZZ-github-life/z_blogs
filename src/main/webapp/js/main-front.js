/*
* @author:  zZZ....
* @description:
* @date: 2022/7/29
* 
* */

var localIP;
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, null); //提示
    AOS.init({
        duration:900
    });
});
let $backTop;
$(function () {
    $backTop = $('#backTop');
    blogNProgress();/*滚动函数*/
    $('.modal').modal(); //初始化模特框
    searchFunc('/blogs/xml/search.xml', 'searchInput', 'searchResult'); //搜索
    /*回到顶部*/
    $('#backTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });
    if (!localIP){
        $.get("/blogs/blogBlogs/getIp",function (res) {
            if (res.success){
                localIP =res.data;
                setCity(); //减少根据ip寻址
            }
        })
    }

});



function blogNProgress(){
    let h1 = 0
        , h2 = 50
        , ss = $(document).scrollTop();
    NProgress.configure({ easing: 'ease', speed: 1000 ,minimum: 0.0});
    $(window).scroll(function() {
        let s = $(document).scrollTop();
        let surplus = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let coorY = s / surplus;
        NProgress.set(coorY); //进度条

        if (s === h1) {
            $(".nav-header").removeClass("nav-transparent")
            $backTop.slideUp(300);
        }
        if (s > h1) {
            $(".nav-header").addClass("nav-transparent")
            $backTop.slideDown(300);
        }
    });
    if (ss > h1) {
        $(".nav-header").addClass("nav-transparent")
        $backTop.slideDown(300);
    }

}

//pjax
function pjax(url){
    $.ajax({
        url:url,
        type:'get',
        before:function(xhr){
            NProgress.start();
        },
        success:function (req) {
            NProgress.set(0.8);
            $("#pjax").html(req);
        },
        complete:function () {
            NProgress.done();
        }
    })
}
/*开始阅读*/
function headertop_down(selector) {
    var coverOffset = $(selector).offset().top;
    $('html,body').animate({
        scrollTop: coverOffset
    }, 600);
}


/*搜索按钮*/
function m_modal1(selector) {
    $(selector).modal('open');
}

function searchFunc(path, search_id, content_id) {
    'use strict';
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // get the contents from search data
            let datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            let $input = document.getElementById(search_id);
            let $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                let str = '<ul class=\"search-result-list\">';
                let keywords = this.innerText.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.innerText.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    let isMatch = true;
                    let data_title = data.title.trim().toLowerCase();
                    let data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    let data_url = data.url;
                    data_url = data_url.indexOf('/') === 0 ? data.url : '/' + data_url;
                    let index_title = -1;
                    let index_content = -1;
                    let first_occur = -1;
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
                        let content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            let start = first_occur - 20;
                            let end = first_occur + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start === 0) {
                                end = 100;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            let match_content = content.substr(start, end);
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                let regS = new RegExp(keyword, "gi");
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
}
//将字符串转化为dom元素
function strToEle(str) {
    const template =`<div>${str}</div>`;
    let tempEle = document.createElement('div');
    tempEle.innerHTML = template;
    return tempEle.firstElementChild;
}
/*加载更多*/
function loading_m() {
    let div = document.querySelector(".loading-m.progress");
    div.querySelector("div").classList.add("indeterminate");
    div.querySelector("span").innerText = "正在加载";
    div.classList.remove("loading-hover")
}
function loaded_m() {
    let div = document.querySelector(".loading-m.progress");
    div.querySelector("div").classList.remove("indeterminate");
    div.querySelector("span").innerText = "加载更多";
    div.classList.add("loading-hover")
}
function loaded_rem() {
     document.querySelector(".loading-m.progress").remove()

}


function setCity() {
    let city =localStorage.getItem(localIP)
    if (!city){
        $.get("/blogs/blogBlogs/getCityAndIP",function (res) {
            if (res.success){
                localStorage.setItem(res.data.ip,res.data.city);
                localIP =res.data.ip;
                document.getElementById("city").innerText=res.data.city;
            }
        })
    }else {
        document.getElementById("city").innerText=city?city:"\u8fdc\u65b9";
    }
}
