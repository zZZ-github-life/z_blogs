/*
* @author:  zZZ....
* @description:
* @date: 2022/7/29
* 
* */
function blogNProgress(){
    let h1 = 0
        , h2 = 50
        , ss = $(document).scrollTop();
    NProgress.configure({ easing: 'ease', speed: 1000 ,minimum: 0.0});
    $(window).scroll(function() {
        let s = $(document).scrollTop();
        let surplus = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let coorY = s / surplus;
        NProgress.set(coorY);
        if (s == h1) {
            $(".site-header").removeClass("yya")
        }
        if (s > h1) {
            $(".site-header").addClass("yya")
        }
        if (s > h2) {
            $(".site-header").addClass("gizle");
            if (s > ss) {
                $(".site-header").removeClass("sabit")
            } else {
                $(".site-header").addClass("sabit")
            }
            ss = s
        }
    });
}
$(function () {

    blogNProgress();/*滚动函数*/
});
