if ("undefined" !== typeof myhkplayer )
    throw Error("音乐播放器已加载，禁止重复添加！");
if ("undefined" === typeof jQuery)
    throw console.log("\n %c 音乐播放器提示： %c 网站没有加载jQuery！\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"),
        Error("请先加载Jquery.js");
(function($) {
        eval("window.timer=[];jQuery.fn.extend({DragClose:function(){if(this.length)for(var c in $(this).data(\"options\"))\"dragObj\"==c&&$(this).data(\"options\").dragObj.dostop()},Drag:function(){var c={dragObj:$(this),parentObj:$(document),callback:null,isPhone:!1,lockX:!1,lockY:!1,maxWidth:0,maxHeight:0};arguments.length&&(c=$.extend({},c,arguments[0]));c.dragObj.data(\"options\",c);var e=$(this)[0],a=c.dragObj,k=0,l=0,g=c.callback;\"static\"==$(this).css(\"position\")&&$(this).css(\"position\",\"relative\");var m=0,n=0;c.isPhone?(a.__start=function(b){m=Math.max(c.parentObj.width(),c.maxWidth);n=Math.max(c.parentObj.height(),c.maxHeight);b=event.targetTouches[0];k=b.clientX-e.offsetLeft;l=b.clientY-e.offsetTop;a.on(\"touchmove\",a.__move);a.on(\"touchend\",a.__end);return!1},a.__move=function(b){touch=event.targetTouches[0];b=touch.clientX-k;var d=touch.clientX-l,f=e.offsetWidth,h=e.offsetHeight;0>b?b=0:b+f>m&&(b=m-f);0>d?d=0:d+h>n&&(d=n-h);c.lockX||(e.style.top=d+\"px\");c.lockY||(e.style.left=b+\"px\");g&&g(a[0],b,d,f,h);return!1},a.__end=function(b){a.off(\"touchmove\");a.off(\"touchend\");_flag=!1;l=k=0;g&&g(a[0]);return!1},a.dostart=function(){a.on(\"touchstart\",a.__start)},a.dostop=function(){a.off(\"touchstart\");a.off(\"touchmove\");a.off(\"touchend\")}):(a.__start=function(b){m=Math.max(c.parentObj.width(),c.maxWidth);n=Math.max(c.parentObj.height(),c.maxHeight);k=b.clientX-e.offsetLeft;l=b.clientY-e.offsetTop;$(document).on(\"mousemove\",a.__move);$(document).on(\"mouseup\",a.__end);a[0].setCapture?a[0].setCapture():window.captureEvents&&window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);b.stopPropagation();b.preventDefault()},a.__move=function(b){var d=b.clientX-k,f=b.clientY-l,h=e.offsetWidth,p=e.offsetHeight;0>d?d=0:d+h>m&&(d=m-h);0>f?f=0:f+p>n&&(f=n-p);c.lockX||(e.style.top=f+\"px\");c.lockY||(e.style.left=d+\"px\");g&&g(a[0],d,f,h,p);b.stopPropagation();b.preventDefault()},a.__end=function(b){a[0].releaseCapture?a[0].releaseCapture():window.releaseEvents&&window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);$(document).off(\"mousemove\");$(document).off(\"mouseup\");l=k=0;g&&g(a[0]);b.stopPropagation();b.preventDefault()},a.dostart=function(){a.on(\"mousedown\",a.__start)},a.dostop=function(){a.off(\"mousedown\");$(document).off(\"mousemove\");$(document).off(\"mouseup\")});a.dostart()}});")
    }
)(jQuery);
/*mousewheel plugin*/
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a
        } else {
            a(jQuery)
        }
    }
}(function(c) {
    var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], k = ("onwheel"in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice, j, b;
    if (c.event.fixHooks) {
        for (var e = d.length; e; ) {
            c.event.fixHooks[d[--e]] = c.event.mouseHooks
        }
    }
    var f = c.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) {
                for (var m = k.length; m; ) {
                    this.addEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var m = k.length; m; ) {
                    this.removeEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = null
            }
        },
        getLineHeight: function(i) {
            return parseInt(c(i)["offsetParent"in c.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(i) {
            return c(i).height()
        },
        settings: {
            adjustOldDeltas: true
        }
    };
    c.fn.extend({
        mousewheel: function(i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        },
        unmousewheel: function(i) {
            return this.unbind("mousewheel", i)
        }
    });
    function l(i) {
        var n = i || window.event
            , r = h.call(arguments, 1)
            , t = 0
            , p = 0
            , o = 0
            , q = 0;
        i = c.event.fix(n);
        i.type = "mousewheel";
        if ("detail"in n) {
            o = n.detail * -1
        }
        if ("wheelDelta"in n) {
            o = n.wheelDelta
        }
        if ("wheelDeltaY"in n) {
            o = n.wheelDeltaY
        }
        if ("wheelDeltaX"in n) {
            p = n.wheelDeltaX * -1
        }
        if ("axis"in n && n.axis === n.HORIZONTAL_AXIS) {
            p = o * -1;
            o = 0
        }
        t = o === 0 ? p : o;
        if ("deltaY"in n) {
            o = n.deltaY * -1;
            t = o
        }
        if ("deltaX"in n) {
            p = n.deltaX;
            if (o === 0) {
                t = p * -1
            }
        }
        if (o === 0 && p === 0) {
            return
        }
        if (n.deltaMode === 1) {
            var s = c.data(this, "mousewheel-line-height");
            t *= s;
            o *= s;
            p *= s
        } else {
            if (n.deltaMode === 2) {
                var m = c.data(this, "mousewheel-page-height");
                t *= m;
                o *= m;
                p *= m
            }
        }
        q = Math.max(Math.abs(o), Math.abs(p));
        if (!b || q < b) {
            b = q;
            if (a(n, q)) {
                b /= 40
            }
        }
        if (a(n, q)) {
            t /= 40;
            p /= 40;
            o /= 40
        }
        t = Math[t >= 1 ? "floor" : "ceil"](t / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b);
        o = Math[o >= 1 ? "floor" : "ceil"](o / b);
        i.deltaX = p;
        i.deltaY = o;
        i.deltaFactor = b;
        i.deltaMode = 0;
        r.unshift(i, t, p, o);
        if (j) {
            clearTimeout(j)
        }
        j = setTimeout(g, 200);
        return (c.event.dispatch || c.event.handle).apply(this, r)
    }
    function g() {
        b = null
    }
    function a(m, i) {
        return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }
}));
/*scrollbar plugin*/
(function(c) {
        var b = {
            init: function(e) {
                var f = {
                    set_width: false,
                    set_height: false,
                    horizontalScroll: false,
                    scrollInertia: 950,
                    mouseWheel: true,
                    mouseWheelPixels: "auto",
                    autoDraggerLength: true,
                    autoHideScrollbar: false,
                    alwaysShowScrollbar: false,
                    snapAmount: null,
                    snapOffset: 0,
                    scrollButtons: {
                        enable: false,
                        scrollType: "continuous",
                        scrollSpeed: "auto",
                        scrollAmount: 40
                    },
                    advanced: {
                        updateOnBrowserResize: true,
                        updateOnContentResize: false,
                        autoExpandHorizontalScroll: false,
                        autoScrollOnFocus: true,
                        normalizeMouseWheelDelta: false
                    },
                    contentTouchScroll: true,
                    callbacks: {
                        onScrollStart: function() {},
                        onScroll: function() {},
                        onTotalScroll: function() {},
                        onTotalScrollBack: function() {},
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        whileScrolling: function() {}
                    },
                    theme: "light"
                }
                    , e = c.extend(true, f, e);
                return this.each(function() {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width)
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height)
                    }
                    if (!c(document).data("mCustomScrollbar-index")) {
                        c(document).data("mCustomScrollbar-index", "1")
                    } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1)
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                            width: k.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch")
                    }
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools")
                        , h = l.children(".mCSB_draggerContainer")
                        , q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    g.bind("scroll", function() {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0).scrollLeft(0)
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        alwaysShowScrollbar: e.alwaysShowScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false
                                , r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) {
                                s = r,
                                    r = m.parent().height() * s / 100
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r)
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window).width(), u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function() {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width()
                                        , v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) {
                                            g.css("max-height", m.parent().height() * s / 100)
                                        }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v
                                    }
                                }
                            }, 150)
                        })
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth()
                        } else {
                            var n = o.outerHeight()
                        }
                        p = setInterval(function() {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({
                                        position: "absolute",
                                        width: "auto"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: o.outerWidth(),
                                        position: "relative"
                                    }).unwrap()
                                }
                                var v = o.outerWidth()
                            } else {
                                var v = o.outerHeight()
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v
                            }
                        }, 300)
                    }
                })
            },
            update: function() {
                var n = c(this)
                    , k = n.children(".mCustomScrollBox")
                    , q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools")
                    , o = y.children(".mCSB_draggerContainer")
                    , m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft")
                        , t = y.children(".mCSB_buttonRight")
                        , f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: q.outerWidth(),
                            position: "relative"
                        }).unwrap()
                    }
                    var z = q.outerWidth()
                } else {
                    var w = y.children(".mCSB_buttonUp")
                        , g = y.children(".mCSB_buttonDown")
                        , r = k.height()
                        , i = q.outerHeight()
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s)
                            , l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({
                                height: l
                            })
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({
                                    height: p
                                })
                            } else {
                                m.css({
                                    height: u
                                })
                            }
                        }
                        m.children(".mCSB_dragger_bar").css({
                            "line-height": m.height() + "px"
                        })
                    }
                    var B = m.height()
                        , x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h)
                                , C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({
                                    width: C
                                })
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({
                                        width: e
                                    })
                                } else {
                                    m.css({
                                        width: j
                                    })
                                }
                            }
                        }
                        var v = m.width()
                            , x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q).css("left", 0)
                        } else {
                            m.add(q).css("top", 0)
                        }
                        if (n.data("alwaysShowScrollbar")) {
                            if (!n.data("horizontalScroll")) {
                                m.css({
                                    height: o.height()
                                })
                            } else {
                                if (n.data("horizontalScroll")) {
                                    m.css({
                                        width: o.width()
                                    })
                                }
                            }
                        } else {
                            y.css("display", "none");
                            q.addClass("mCS_no_scrollbar")
                        }
                        n.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function(i, q, n, k, A, f, D, w) {
                var l = c(this);
                if (!l.data("bindEvent_scrollbar_drag")) {
                    var o, p, C, z, e;
                    if (c.support.pointer) {
                        C = "pointerdown";
                        z = "pointermove";
                        e = "pointerup"
                    } else {
                        if (c.support.msPointer) {
                            C = "MSPointerDown";
                            z = "MSPointerMove";
                            e = "MSPointerUp"
                        }
                    }
                    if (c.support.pointer || c.support.msPointer) {
                        k.bind(C, function(K) {
                            K.preventDefault();
                            l.data({
                                on_drag: true
                            });
                            k.addClass("mCSB_dragger_onDrag");
                            var J = c(this)
                                , M = J.offset()
                                , I = K.originalEvent.pageX - M.left
                                , L = K.originalEvent.pageY - M.top;
                            if (I < J.width() && I > 0 && L < J.height() && L > 0) {
                                o = L;
                                p = I
                            }
                        });
                        c(document).bind(z + "." + l.data("mCustomScrollbarIndex"), function(K) {
                            K.preventDefault();
                            if (l.data("on_drag")) {
                                var J = k
                                    , M = J.offset()
                                    , I = K.originalEvent.pageX - M.left
                                    , L = K.originalEvent.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind(e + "." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    } else {
                        k.bind("mousedown touchstart", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var J = c(this), N = J.offset(), I, M;
                            if (K.type === "touchstart") {
                                var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
                                I = L.pageX - N.left;
                                M = L.pageY - N.top
                            } else {
                                l.data({
                                    on_drag: true
                                });
                                k.addClass("mCSB_dragger_onDrag");
                                I = K.pageX - N.left;
                                M = K.pageY - N.top
                            }
                            if (I < J.width() && I > 0 && M < J.height() && M > 0) {
                                o = M;
                                p = I
                            }
                        }).bind("touchmove", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0]
                                , J = c(this)
                                , M = J.offset()
                                , I = N.pageX - M.left
                                , L = N.pageY - M.top;
                            G(o, p, L, I)
                        });
                        c(document).bind("mousemove." + l.data("mCustomScrollbarIndex"), function(K) {
                            if (l.data("on_drag")) {
                                var J = k
                                    , M = J.offset()
                                    , I = K.pageX - M.left
                                    , L = K.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind("mouseup." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    }
                    l.data({
                        bindEvent_scrollbar_drag: true
                    })
                }
                function G(J, K, L, I) {
                    if (l.data("horizontalScroll")) {
                        l.mCustomScrollbar("scrollTo", (k.position().left - (K)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        l.mCustomScrollbar("scrollTo", (k.position().top - (J)) + L, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (c.support.touch && l.data("contentTouchScroll")) {
                    if (!l.data("bindEvent_content_touch")) {
                        var m, E, s, t, v, F, H;
                        q.bind("touchstart", function(x) {
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this);
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            F = t;
                            H = v
                        });
                        q.bind("touchmove", function(x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this).parent();
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            if (l.data("horizontalScroll")) {
                                l.mCustomScrollbar("scrollTo", H - v, {
                                    trigger: "internal"
                                })
                            } else {
                                l.mCustomScrollbar("scrollTo", F - t, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!l.data("bindEvent_scrollbar_click")) {
                    n.bind("click", function(I) {
                        var x = (I.pageY - n.offset().top) * l.data("scrollAmount")
                            , y = c(I.target);
                        if (l.data("horizontalScroll")) {
                            x = (I.pageX - n.offset().left) * l.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            l.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    l.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (l.data("mouseWheel")) {
                    if (!l.data("bindEvent_mousewheel")) {
                        i.bind("mousewheel", function(K, M) {
                            var J, I = l.data("mouseWheelPixels"), x = Math.abs(q.position().top), L = k.position().top, y = n.height() - k.height();
                            if (l.data("normalizeMouseWheelDelta")) {
                                if (M < 0) {
                                    M = -1
                                } else {
                                    M = 1
                                }
                            }
                            if (I === "auto") {
                                I = 100 + Math.round(l.data("scrollAmount") / 2)
                            }
                            if (l.data("horizontalScroll")) {
                                L = k.position().left;
                                y = n.width() - k.width();
                                x = Math.abs(q.position().left)
                            }
                            if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
                                K.preventDefault();
                                K.stopImmediatePropagation()
                            }
                            J = x - (M * I);
                            l.mCustomScrollbar("scrollTo", J, {
                                trigger: "internal"
                            })
                        });
                        l.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }
                if (l.data("scrollButtons_enable")) {
                    if (l.data("scrollButtons_scrollType") === "pixels") {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_x")) {
                                w.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) + l.data("scrollButtons_scrollAmount"))
                                });
                                D.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_y")) {
                                f.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) + l.data("scrollButtons_scrollAmount"))
                                });
                                A.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }
                        function r(x) {
                            if (!k.data("preventAction")) {
                                k.data("preventAction", true);
                                l.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_x")) {
                                w.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollRight: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var j = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollRight"))
                                };
                                w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", j);
                                D.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollLeft: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var h = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollLeft"))
                                };
                                D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", h);
                                l.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_y")) {
                                f.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollDown: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var u = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollDown"))
                                };
                                f.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", u);
                                A.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollUp: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollUp"))
                                };
                                A.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", g);
                                l.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }
                        function B() {
                            var x = l.data("scrollButtons_scrollSpeed");
                            if (l.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((l.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (l.data("autoScrollOnFocus")) {
                    if (!l.data("bindEvent_focusin")) {
                        i.bind("focusin", function() {
                            i.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var J = q.position().top
                                    , y = x.position().top
                                    , I = i.height() - x.outerHeight();
                                if (l.data("horizontalScroll")) {
                                    J = q.position().left;
                                    y = x.position().left;
                                    I = i.width() - x.outerWidth()
                                }
                                if (J + y < 0 || J + y > I) {
                                    l.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        l.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (l.data("autoHideScrollbar") && !l.data("alwaysShowScrollbar")) {
                    if (!l.data("bindEvent_autoHideScrollbar")) {
                        i.bind("mouseenter", function(x) {
                            i.addClass("mCS-mouse-over");
                            d.showScrollbar.call(i.children(".mCSB_scrollTools"))
                        }).bind("mouseleave touchend", function(x) {
                            i.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                d.hideScrollbar.call(i.children(".mCSB_scrollTools"))
                            }
                        });
                        l.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function(e, f) {
                var i = c(this), o = {
                    moveDragger: false,
                    trigger: "external",
                    callbacks: true,
                    scrollInertia: i.data("scrollInertia"),
                    scrollEasing: i.data("scrollEasing")
                }, f = c.extend(o, f), p, g = i.children(".mCustomScrollBox"), k = g.children(".mCSB_container"), r = g.children(".mCSB_scrollTools"), j = r.children(".mCSB_draggerContainer"), h = j.children(".mCSB_dragger"), t = draggerSpeed = f.scrollInertia, q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({
                        mCS_trigger: f.trigger
                    });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false
                    }
                    if (e || e === 0) {
                        if (typeof (e) === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position().left * i.data("scrollAmount")
                                } else {
                                    e = h.position().top * i.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                p = e / i.data("scrollAmount")
                            }
                        } else {
                            if (typeof (e) === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height()
                                    } else {
                                        if (e === "left") {
                                            v = 0
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width()
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container").find(":first")
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container").find(":last")
                                                    } else {
                                                        v = i.find(e)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position().left
                                    } else {
                                        e = v.position().top
                                    }
                                    p = e / i.data("scrollAmount")
                                } else {
                                    p = e = v
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().left >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().left <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().top >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().top <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        }
                        if (i.data("mCS_Init")) {
                            i.data({
                                mCS_Init: false
                            })
                        }
                    }
                }
                function u(w) {
                    if (i.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: k.position().top,
                            left: k.position().left,
                            draggerTop: h.position().top,
                            draggerLeft: h.position().left,
                            topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
                            leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
                        };
                        switch (w) {
                            case "onScrollStart":
                                i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                                break;
                            case "whileScrolling":
                                i.data("whileScrolling_Callback").call(i, this.mcs);
                                break;
                            case "onScroll":
                                i.data("onScroll_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScroll":
                                i.data("onTotalScroll_Callback").call(i, this.mcs);
                                break
                        }
                    }
                }
            },
            stop: function() {
                var g = c(this)
                    , e = g.children().children(".mCSB_container")
                    , f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0])
            },
            disable: function(e) {
                var j = c(this)
                    , f = j.children(".mCustomScrollBox")
                    , h = f.children(".mCSB_container")
                    , g = f.children(".mCSB_scrollTools")
                    , i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h).css("left", 0)
                    } else {
                        i.add(h).css("top", 0)
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({
                    bindEvent_mousewheel: false,
                    bindEvent_focusin: false,
                    bindEvent_content_touch: false,
                    bindEvent_autoHideScrollbar: false
                }).addClass("mCS_disabled")
            },
            destroy: function() {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
            }
        }
            , d = {
            showScrollbar: function() {
                this.stop().animate({
                    opacity: 1
                }, "fast")
            },
            hideScrollbar: function() {
                this.stop().animate({
                    opacity: 0
                }, "fast")
            },
            mTweenAxis: function(g, i, h, f, o, y) {
                var y = y || {}
                    , v = y.onStart || function() {}
                    , p = y.onUpdate || function() {}
                    , w = y.onComplete || function() {}
                ;
                var n = t(), l, j = 0, r = g.offsetTop, s = g.style;
                if (i === "left") {
                    r = g.offsetLeft
                }
                var m = h - r;
                q();
                e();
                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                }
                function x() {
                    if (!j) {
                        v.call()
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x)
                    } else {
                        w.call()
                    }
                }
                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px"
                    } else {
                        s[i] = h + "px"
                    }
                    p.call()
                }
                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function(z) {
                            u();
                            return setTimeout(z, 0.01)
                        }
                        : window.requestAnimationFrame;
                    g._id = _request(x)
                }
                function q() {
                    if (g._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id)
                    } else {
                        window.cancelAnimationFrame(g._id)
                    }
                    g._id = null
                }
                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return F * B / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B + A
                            }
                            B--;
                            return -F / 2 * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin(B / E * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B
                                , z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B * B + A
                            }
                            B -= 2;
                            return F / 2 * (B * B * B + 2) + A;
                            break
                    }
                }
            },
            mTweenAxisStop: function(e) {
                if (e._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id)
                } else {
                    window.cancelAnimationFrame(e._id)
                }
                e._id = null
            },
            rafPolyfill: function() {
                var f = ["ms", "moz", "webkit", "o"]
                    , e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
                }
            }
        };
        d.rafPolyfill.call();
        c.support.touch = !!("ontouchstart"in window);
        c.support.pointer = window.navigator.pointerEnabled;
        c.support.msPointer = window.navigator.msPointerEnabled;
        var a = ("https:" == document.location.protocol) ? "https:" : "http:";
        c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
        c.fn.mCustomScrollbar = function(e) {
            if (b[e]) {
                return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                if (typeof e === "object" || !e) {
                    return b.init.apply(this, arguments)
                } else {
                    c.error("Method " + e + " does not exist")
                }
            }
        }
    }
)(jQuery);
(function($) {
        (function($) {
                "use strict";
                var f = function(a, b) {
                    this.options = $.extend({}, $.fn.letterfx.defaults, b);
                    this.num_completed_fx = 0;
                    this.is_done = false;
                    this.monitor_timer = null;
                    this.killswitch = null;
                    this.$element = $(a);
                    if (this.options.restore)
                        this.original_html = this.$element.html();
                    this.init()
                };
                f.prototype.init = function() {
                    this.new_html = this.$element.text().replace(this.options.pattern, this.options.replacement);
                    this.$element.addClass(this.options.css.element.base).addClass(this.options.css.element.before);
                    this.$element.html(this.new_html);
                    this.$letters = this.$element.find(this.options.selector);
                    this.$letters.css("transition-duration", this.options.fx_duration).addClass(this.options.css.letters.base).addClass(this.options.css.letters.before);
                    this.bindLetterFxEnd();
                    this.num_letters = this.$letters.length;
                    this.fx();
                    return this
                }
                ;
                f.prototype.bindLetterFxEnd = function() {
                    var a = this.options;
                    var b = this;
                    this.$letters.bind("transitionend", function() {
                        a.onLetterComplete($(this), b.$element, b);
                        b.notifyFXEnd();
                        switch (a.letter_end) {
                            case "destroy":
                                $(this).remove();
                                break;
                            case "rewind":
                                b.applyLetterFx($(this), a.timing, a.css.letters.after, a.css.letters.before);
                                break;
                            case "stay":
                                break;
                            default:
                                $(this).replaceWith($(this).text())
                        }
                    });
                    return b
                }
                ;
                f.prototype.terminate = function() {
                    this.is_done = true;
                    this.options.onElementComplete(this.$element, this);
                    clearTimeout(this.killswitch);
                    switch (this.options.element_end) {
                        case "destroy":
                            this.$element.remove();
                            break;
                        case "stay":
                            break;
                        default:
                            this.$element.html(this.original_html);
                            this.$element.removeClass(this.options.css.element.base).removeClass(this.options.css.element.after);
                            break
                    }
                }
                ;
                f.prototype.notifyFXEnd = function() {
                    clearTimeout(this.monitor_timer);
                    this.num_completed_fx++;
                    var a = this;
                    this.monitor_timer = setTimeout(function() {
                        if (a.num_completed_fx % a.num_letters === 0) {
                            a.terminate()
                        }
                    }, Math.max(this.options.timing + 10, 50));
                    return this
                }
                ;
                f.prototype.startKillWatch = function() {
                    var a = this.options.fx_duration.match(/\d+s/) ? parseInt(this.options.fx_duration) : 1;
                    var b = Math.ceil(1.5 * this.num_letters * this.options.timing * a);
                    var c = this;
                    this.killswitch = window.setTimeout(function() {
                        if (!c.isDone()) {
                            c.terminate()
                        }
                    }, b)
                }
                ;
                f.prototype.fx = function() {
                    var b = this;
                    this.startKillWatch();
                    this.$element.removeClass(this.options.css.element.before).addClass(this.options.css.element.after);
                    var c = this.options.sort(this.$letters);
                    var d = this.options;
                    c.each(function(i, a) {
                        b.applyLetterFx($(a), (i + 1) * d.timing, d.css.letters.before, d.css.letters.after)
                    });
                    return this
                }
                ;
                f.prototype.applyLetterFx = function(a, b, c, d) {
                    var e = this.options;
                    window.setTimeout(function() {
                        a.removeClass(c).addClass(d)
                    }, b);
                    return this
                }
                ;
                f.prototype.isDone = function() {
                    return this.is_done
                }
                ;
                var g = function(a) {
                    this.config = $.extend({}, $.fn.letterfx.defaults, a);
                    this.buildCss(this.config.backwards);
                    if (this.config.words)
                        this.config.pattern = /(\S+)/g
                };
                g.prototype.buildCss = function(a) {
                    var b = this.config;
                    var c = a ? "after" : "before";
                    var d = a ? "before" : "after";
                    var e = {
                        element: {},
                        letters: {}
                    };
                    e.element.base = b.element_class + "-container " + b.fx.replace(/(\S+)/g, b.element_class + "-$1-container");
                    e.element[c] = b.fx.replace(/(\S+)/g, b.element_class + "-$1-before-container");
                    e.element[d] = b.fx.replace(/(\S+)/g, b.element_class + "-$1-after-container");
                    e.letters.base = b.element_class;
                    e.letters[c] = b.fx.replace(/(\S+)/g, b.element_class + "-$1-before");
                    e.letters[d] = b.fx.replace(/(\S+)/g, b.element_class + "-$1-after");
                    this.config = $.extend(b, {
                        css: e
                    })
                }
                ;
                g.prototype.getConfig = function() {
                    return this.config
                }
                ;
                g.parse = function(a) {
                    return new g(a).getConfig()
                }
                ;
                $.fn.letterfx = function(b) {
                    b = g.parse(b);
                    return $(this).each(function() {
                        var a = $(this);
                        if (!a.data("letterfx-obj") || a.data("letterfx-obj").isDone()) {
                            a.data("letterfx-obj", new f(a,b))
                        }
                    })
                }
                ;
                $.fn.letterfx.sort = {
                    random: function(a) {
                        var b = a.length, temporaryValue, randomIndex;
                        while (0 !== b) {
                            randomIndex = Math.floor(Math.random() * b);
                            b -= 1;
                            temporaryValue = a[b];
                            a[b] = a[randomIndex];
                            a[randomIndex] = temporaryValue
                        }
                        return a
                    },
                    reverse: function(a) {
                        return a.toArray().reverse()
                    }
                };
                $.fn.letterfx.patterns = {
                    letters: /(\S)/gi
                };
                $.fn.letterfx.defaults = {
                    fx: "spin fly-top",
                    pattern: /(\S)/gi,
                    word: false,
                    backwards: false,
                    replacement: "<span>$1</span>",
                    selector: "span",
                    timing: 50,
                    fx_duration: "1s",
                    sort: function(a) {
                        return a
                    },
                    onLetterComplete: function(a, b, c) {},
                    onElementComplete: function(a, b) {},
                    letter_end: "restore",
                    element_end: "restore",
                    restore: true,
                    destroy: false,
                    element_class: "letterfx",
                    css: {
                        element: {
                            base: "",
                            before: "",
                            after: ""
                        },
                        letters: {
                            base: "",
                            before: "",
                            after: ""
                        }
                    }
                }
            }
        )(jQuery);
        !function(t) {
            function e(e, n, i, r) {
                var a = e.text()
                    , c = a.split(n)
                    , s = "";
                c.length && (t(c).each(function(t, e) {
                    s += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + e + "</span>" + r
                }),
                    e.attr("aria-label", a).empty().append(s))
            }
            var n = {
                init: function() {
                    return this.each(function() {
                        e(t(this), "", "char", "")
                    })
                },
                words: function() {
                    return this.each(function() {
                        e(t(this), " ", "word", " ")
                    })
                },
                lines: function() {
                    return this.each(function() {
                        var n = "eefec303079ad17405c889e092e105b0";
                        e(t(this).children("br").replaceWith(n).end(), n, "line", "")
                    })
                }
            };
            t.fn.lettering = function(e) {
                return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"),
                    this) : n.init.apply(this, [].slice.call(arguments, 0))
            }
        }(jQuery);

    }
)(jQuery);
(function($) {
    
        var mobile = $('#myhk')['attr']('m');
        if (typeof mobile === 'undefined') {
            mobiles = 0
        } else {
            mobiles = mobile
        }
        ;var skin = $('#myhk')['attr']('skin');
        if (typeof skin === 'undefined') {
            skins = ''
        } else {
            skins = '&skin=' + skin
        }
        ;var lr = $('#myhk')['attr']('lr');
        if (typeof lr === 'undefined') {
            lr = ''
        } else {
            lr = '&lr=' + lr
        }
        ;var op = $('#myhk')['attr']('op');
        if (typeof op === 'undefined') {
            op = 1
        } else {
            op = op
        }
        ;var au = $('#myhk')['attr']('au');
        if (typeof au === 'undefined') {
            au = 1
        } else {
            au = au
        }
        ;var sg = $('#myhk')['attr']('sg');
        if (typeof sg === 'undefined') {
            sg = 1
        } else {
            sg = sg
        }
        ;var myhkload = localStorage['getItem']('myhk_player_load');
        var myhkfeed = localStorage['getItem']('myhk_player_feed');
        myhkload = typeof myhkload === 'undefined' ? false : myhkload === 'true';
        myhkload = myhkload && typeof myhkfeed !== 'undefined' && new Date()['getTime']() - parseInt(myhkfeed) < 1000;
        // if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i['test'](navigator['userAgent']) && mobiles < 1 && window['location']['href']['indexOf']('//myhkw') < 0) {
        //  //   $('#myhkplayer')['hide']();
        //   //  throw new Error('音乐播放器已禁止在移动端加载！')
        // } else {
            if (myhkload && window['location']['href']['indexOf']('//myhkw') < 0) {
                $('#myhkplayer')['hide']();
                // throw new Error('音乐播放器已在其他页面加载');
            } else {
                var songSheetList;
                var webURL ='https://myhkw.cn/';
                var keyId  ='1667214511113';
                localStorage['setItem']('myhk_player_load', 'true');
                $('body')['append']('<div id="myhkplayer" style="display:none">\x0A' + '    <div class="myhkplayer">\x0A' + '        <div class="myhkblur-img">\x0A' + '            <img src="' + webURL + 'static/images/default.jpg" class="myhkblur" style="top: 0px; display: inline;">\x0A' + '        </div>\x0A' + '        <div class="myhkinfo">\x0A' + '            <div class="songstyle"><i class="myhkfont myhkicon-music"></i> <div class="myhkname"><span class="myhksong"></span></div></div>\x0A' + '            <div class="timestyle"><i class="myhkfont myhkicon-clockCircle"></i> <span class="myhktime">00:00 / 00:00</span></div>\x0A' + '            <div class="artiststyle"><i class="myhkfont myhkicon-user"></i> <span class="myhkartist"></span><span class="myhkmoshi"><i\x0A' + '                    class="myhkfont myhkicon-suijibofang"></i> 随机播放</span></div>\x0A' + '            <div class="artiststyle"><i class="myhkfont myhkicon-musicAlbum"></i>\x0A' + '                <span class="myhkalbum"></span>\x0A' + '                <span class="myhkgeci"><span class="geci"></span></span>\x0A' + '            </div>\x0A' + '        </div>\x0A' + '        <div class="myhkcontrol">\x0A' + '            <i class="myhkaprev myhkfont myhkicon-first"></i>\x0A' + '            <i class="myhkprev myhkfont myhkicon-backward"></i>\x0A' + '            <div class="myhkstatus">\x0A' + '                <b>\x0A' + '                    <i class="myhkplay myhkfont myhkicon-playCircle"></i>\x0A' + '                    <i class="myhkpause myhkfont myhkicon-pauseCircle"></i>\x0A' + '                </b>\x0A' + '                <div id="pdyf1" class="myhknote">\x0A' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\x0A' + '                </div>\x0A' + '                <div id="pdyf2" class="myhknote">\x0A' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\x0A' + '                </div>\x0A' + '                <div id="pdyf3" class="myhknote">\x0A' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\x0A' + '                </div>\x0A' + '            </div>\x0A' + '            <i class="myhknext myhkfont myhkicon-forward"></i>\x0A' + '            <i class="myhkanext myhkfont myhkicon-last"></i>\x0A' + '        </div>\x0A' + '\x09\x09<div class="musicbottom">\x0A' + '\x09\x09\x09<div class="volumecontrol">\x0A' + '\x09\x09        <div class="volume myhkfont myhkicon-volumeMiddle"></div>\x0A' + '\x09\x09        \x09<div class="volumeprogress">\x0A' + '\x09\x09                    <div class="progressbg">\x0A' + '\x09\x09                        <div class="progressbg1" style="height: 19px;"></div>\x0A' + '\x09\x09                        <div class="ts" style="top: 81px;"></div>\x0A' + '\x09\x09                    </div>\x0A' + '\x09\x09                </div>\x0A' + '\x09\x09        </div>\x0A' + '\x09\x09        <div class="playprogress">\x0A' + '\x09\x09            <div class="progressbg">\x0A' + '\x09\x09                <div class="progressbg1"></div>\x0A' + '\x09\x09                <div class="progressbg2"></div>\x0A' + '\x09\x09                <div class="ts"></div>\x0A' + '\x09\x09            </div>\x0A' + '\x09\x09        </div>\x0A' + '            <div class="switch-playlist">\x0A' + '                <i class="myhkfont myhkicon-list"></i>\x0A' + '            </div>\x0A' + '            <div class="qhms">\x0A' + '                <i class="myhkfont myhkicon-suijibofang"></i>\x0A' + '            </div>\x0A' + '            <div class="switch-ksclrc">\x0A' + '                <i class="myhkfont myhkicon-anniu_kaiqi"></i>\x0A' + '            </div>\x0A' + '        </div>\x0A' + '        <div class="myhkcover"></div>\x0A' + '    </div>\x0A' + '    <div class="myhkplaylist">\x0A' + '        <div class="myhkplaylist-bd">\x0A' + '            <div class="album-list">\x0A' + '                <div class="musicheader">请欣赏音乐吧~</div>\x0A' + '                <div class="myhklist"></div>\x0A' + '            </div>\x0A' + '            <div class="song-list">\x0A' + '                <div class="musicheader"><i class="myhkfont myhkicon-arrow-right-bold"></i><span></span></div>\x0A' + '                <div class="myhklist">\x0A' + '                    <ul></ul>\x0A' + '                </div>\x0A' + '            </div>\x0A' + '        </div>\x0A' + '    </div>\x0A' + '    <div class="switch-player">\x0A' + '        <i class="myhkfont myhkicon-arrow-right-bold"></i>\x0A' + '    </div>\x0A' + '</div>\x0A' + '<div id="myhkTips"></div>\x0A' + '<div id="myhkKsc"></div>\x0A' + '<div id="myhkLrc"></div>');
                var audio = new Audio()
                    , $player = $('#myhkplayer')
                    , $tips = $('#myhkTips')
                    , $lk = $('#myhkLrc')
                    , $kk = $('#myhkKsc')
                    , $switchPlayer = $('.switch-player', $player)
                    , $songName = $('.myhksong', $player)
                    , $cover = $('.myhkcover', $player)
                    , $songTime = $('.myhktime', $player)
                    , $songList = $('.song-list .myhklist', $player)
                    , $albumList = $('.album-list', $player)
                    , $songFrom = $('.myhkplayer .myhkartist', $player)
                    , $songFrom1 = $('.myhkplayer .myhkalbum', $player)
                    , $songFrom2 = $('.myhkplayer .myhkmoshi', $player)
                    , $songFrom3 = $('.myhkplayer .myhkgeci .geci', $player)
                    , $songFrom4 = $('.myhkplayer .switch-ksclrc', $player)
                    , myhkqq = '48939749'
                    , songFrom33 = '开启'
                    , songFrom55 = ''
                    , myhknow = 'myhknow'
                    , ycgeci = true
                    , myhkfirst = 1;
                errCount = 0;
                randcolor = 0;
                letterfx = 0;
                myhkcolor = '0,0,0';
                myhkfcolor = '255,255,255';
                localStorage['setItem']('myhk_player_lrc', 'null');
                localStorage['setItem']('myhk_player_ksc', 'null');
                songTotal = 0,
                    visTsMoving = !1,
                    myhkrandom = true,
                    myhkloop = false,
                    myhkpass = true,
                    errjc = true,
                    hasLrc = false,
                    hasKsc = false,
                    currentFrameId = 0,
                    playisTsMoving = !1,
                    autoswitch = false,
                    zdyc = true,
                    gcdw = false,
                    hasgeci = false;
                playing = true;
                myhkplaytime = localStorage['getItem']('myhk_player_time') ? localStorage['getItem']('myhk_player_time') : false;
                myhkplaying = localStorage['getItem']('myhk_player_times') ? localStorage['getItem']('myhk_player_times') : false;
                playingalbumId = localStorage['getItem']('myhk_player_album') ? localStorage['getItem']('myhk_player_album') : false;
                playingsongId = localStorage['getItem']('myhk_player_song') ? localStorage['getItem']('myhk_player_song') : false;
                myhk_player_songid = localStorage['getItem']('myhk_player_songid') ? localStorage['getItem']('myhk_player_songid') : false;
                function myhkCicle() {
                    $songTime['text'](formatSecond(audio['currentTime']) + ' / ' + formatSecond(audio['duration']))
                }
                var cicleTime = null;
                var myhkadTime = null;
                $songName['html']('<a style="color:#f00">初始化歌单</a>');
                $songFrom['html']('<a style="color:#f00"></a>');
                $songFrom1['html']('<a style="color:#f00">音乐播放器</a>');
                $songFrom3['html']('<i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临');
                var myhkMedia = {
                    play: function() {
                        hasgeci = true;
                        $player['addClass']('playing');
                        currentFrameId = GetCurrentFrame();
                        cicleTime = setInterval(myhkCicle, 800);
                        if (hasLrc) {
                            lrcTime = setInterval(myhkLrc['lrc']['play'], 500);
                            if (!gcdw) {
                                $('#myhkLrc')['addClass']('myhkshow')
                            }
                            ;if (zdyc) {
                                $songFrom4['show']()
                            }
                        }
                        ;if (hasKsc) {
                            kscTime = setInterval(myhkLrc['ksc']['play'], 80);
                            if (!gcdw) {
                                $('#myhkKsc')['addClass']('showPlayer')
                            }
                            ;if (zdyc) {
                                $songFrom4['show']()
                            }
                        }
                    },
                    pause: function() {
                        clearInterval(cicleTime);
                        $player['removeClass']('playing');
                        $songFrom4['hide']();
                        if (hasLrc) {
                            myhkLrc['lrc']['hide']()
                        }
                        ;if (hasKsc) {
                            myhkLrc['ksc']['hide']()
                        }
                    },
                    error: function() {
                        clearInterval(cicleTime);
                        $player['removeClass']('playing');
                        if (errCount > 2) {
                            myhkTips['show']('连续播放失败超过3次！已停止播放！');
                            errCount = 0;
                            errjc = true
                        } else {
                            errCount++;
                            errjc = false;
                            myhkTips['show'](songSheetList[albumId]['songNames'][songId] + ' - 资源获取失败！尝试获取下一首...');

                            setTimeout(function() {
                                $cover['removeClass']('coverplay');
                                localStorage['setItem']('myhk_player', 'no');
                                hasgeci = true;
                                auto = '';
                                myhkMedia['next']()
                            }, 1500)
                        }
                    },
                    seeking: function() {
                        if (audio['paused'] === true) {
                            audio['play']()
                        }
                        $player['addClass']('playing');
                        $cover['addClass']('coverplay');
                        myhkLrc['load']();
                        myhkTips['show']('缓冲中...')
                    },
                    seeked: function() {
                        currentFrameId = GetCurrentFrame()
                    },
                    volumechange: function() {
                        var a = audio['volume'];
                        0 == a ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeCross')['removeClass']('myhkicon-volumeLow myhkicon-volumeMiddle myhkicon-volumeHigh') : a >= 0.4 && a <= 0.7 ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeMiddle')['removeClass']('myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeHigh') : a >= 0.7 && a <= 1 ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeHigh')['removeClass']('myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeMiddle') : $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeLow')['removeClass']('myhkicon-volumeHigh myhkicon-volumeCross myhkicon-volumeMiddle')
                    },
                    getInfos: function(a, b) {
                        currentFrameId = 0;
                        $cover['removeClass']('coverplay');
                        songId = a;
                        albumId = b;
                        allmusic();
                        localStorage['setItem']('myhk_player_qq', myhkqq);
                        localStorage['setItem']('myhk_player_version', myhkversion);
                        localStorage['setItem']('myhk_player_album', albumId + 1);
                        localStorage['setItem']('myhk_player_song', songId + 1);
                        localStorage['setItem']('myhk_player_songid', songSheetList[albumId]['songTypes'][songId] + songSheetList[albumId]['songIds'][songId]);
                        if (songSheetList[albumId]['songTypes'][songId] == 'wy') {
                            songFrom55 = '网易音乐';
                            musictype = 'wy';
                            netmusic()
                        } else {
                            if (songSheetList[albumId]['songTypes'][songId] == 'kg') {
                                songFrom55 = '酷狗音乐';
                                musictype = 'kg';
                                netmusic()
                            } else {
                                if (songSheetList[albumId]['songTypes'][songId] == 'qq') {
                                    songFrom55 = 'QQ音乐';
                                    musictype = 'qq';
                                    netmusic()
                                } else {
                                    if (songSheetList[albumId]['songTypes'][songId] == 'mg') {
                                        songFrom55 = '咪咕音乐';
                                        musictype = 'mg';
                                        netmusic()
                                    } else {
                                        if (songSheetList[albumId]['songTypes'][songId] == 'kw') {
                                            songFrom55 = '酷我音乐';
                                            musictype = 'kw';
                                            netmusic()
                                        } else {
                                            if (songSheetList[albumId]['songTypes'][songId] == 'qi') {
                                                songFrom55 = '千千音乐';
                                                musictype = 'qi';
                                                netmusic()
                                            } else {
                                                if (songSheetList[albumId]['songTypes'][songId] == 'local') {
                                                    songFrom55 = '自定义音乐';
                                                    musictype = 'local';
                                                    netmusic()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    nexts: function() {
                        if (myhkloop) {
                            myhkMedia['getInfos'](songId, albumId)
                        } else {
                            myhkMedia['next']()
                        }
                    },
                    next: function() {
                        myhkpass = false;
                        songTotal = songSheetList[albumId]['songIds']['length'];
                        if (myhkrandom) {
                            rid = parseInt(Math['random']() * songTotal);
                            if (songTotal > 1) {
                                if (rid != songId) {
                                    myhkMedia['getInfos'](rid, albumId)
                                } else {
                                    if (rid + 1 >= songTotal) {
                                        myhkMedia['getInfos'](0, albumId)
                                    } else {
                                        myhkMedia['getInfos'](rid + 1, albumId)
                                    }
                                }
                            } else {
                                myhkMedia['getInfos'](0, albumId)
                            }
                        } else {
                            if (parseInt(songId) + 1 >= songTotal) {
                                myhkMedia['getInfos'](0, albumId)
                            } else {
                                myhkMedia['getInfos'](parseInt(songId) + 1, albumId)
                            }
                        }
                        ;setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    prev: function() {
                        myhkpass = false;
                        songTotal = songSheetList[albumId]['songIds']['length'];
                        if (myhkrandom) {
                            rid = parseInt(Math['random']() * songTotal);
                            if (songTotal > 1) {
                                if (rid != songId) {
                                    myhkMedia['getInfos'](rid, albumId)
                                } else {
                                    if (rid + 1 >= songTotal) {
                                        myhkMedia['getInfos'](0, albumId)
                                    } else {
                                        myhkMedia['getInfos'](rid + 1, albumId)
                                    }
                                }
                            } else {
                                myhkMedia['getInfos'](0, albumId)
                            }
                        } else {
                            if (parseInt(songId) - 1 < 0) {
                                myhkMedia['getInfos'](songTotal - 1, albumId)
                            } else {
                                myhkMedia['getInfos'](parseInt(songId) - 1, albumId)
                            }
                        }
                        ;setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    anext: function() {
                        myhkpass = false;
                        albumTotal = songSheetList['length'];
                        if (myhkrandom) {
                            rid = parseInt(Math['random']() * albumTotal);
                            if (albumTotal > 1) {
                                if (rid != albumId) {
                                    songTotals = songSheetList[rid]['songIds']['length'];
                                    rids = parseInt(Math['random']() * songTotals);
                                    myhkMedia['getInfos'](rids - 1, rid)
                                } else {
                                    if (rid + 1 >= albumTotal) {
                                        songTotals = songSheetList[0]['songIds']['length'];
                                        rids = parseInt(Math['random']() * songTotals);
                                        myhkMedia['getInfos'](rids - 1, 0)
                                    } else {
                                        songTotals = songSheetList[rid + 1]['songIds']['length'];
                                        rids = parseInt(Math['random']() * songTotals);
                                        myhkMedia['getInfos'](rids - 1, rid + 1)
                                    }
                                }
                            } else {
                                songTotals = songSheetList[0]['songIds']['length'];
                                rids = parseInt(Math['random']() * songTotals);
                                myhkMedia['getInfos'](rids, 0)
                            }
                        } else {
                            if (albumTotal > 1) {
                                if (parseInt(albumId) + 1 >= albumTotal) {
                                    myhkMedia['getInfos'](0, 0)
                                } else {
                                    myhkMedia['getInfos'](0, parseInt(albumId) + 1)
                                }
                            } else {
                                songTotals = songSheetList[0]['songIds']['length'];
                                rids = parseInt(Math['random']() * songTotals);
                                myhkMedia['getInfos'](rids, 0)
                            }
                        }
                        ;$player['removeClass']('showSongList');
                        setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    aprev: function() {
                        myhkpass = false;
                        albumTotal = songSheetList['length'];
                        if (myhkrandom) {
                            rid = parseInt(Math['random']() * albumTotal);
                            if (albumTotal > 1) {
                                if (rid != albumId) {
                                    songTotals = songSheetList[rid]['songIds']['length'];
                                    rids = parseInt(Math['random']() * songTotals);
                                    myhkMedia['getInfos'](rids - 1, rid)
                                } else {
                                    if (rid + 1 >= albumTotal) {
                                        songTotals = songSheetList[0]['songIds']['length'];
                                        rids = parseInt(Math['random']() * songTotals);
                                        myhkMedia['getInfos'](rids - 1, 0)
                                    } else {
                                        songTotals = songSheetList[rid + 1]['songIds']['length'];
                                        rids = parseInt(Math['random']() * songTotals);
                                        myhkMedia['getInfos'](rids - 1, rid + 1)
                                    }
                                }
                            } else {
                                songTotals = songSheetList[0]['songIds']['length'];
                                rids = parseInt(Math['random']() * songTotals);
                                myhkMedia['getInfos'](rids, 0)
                            }
                        } else {
                            if (albumTotal > 1) {
                                if (parseInt(albumId) - 1 < 0) {
                                    myhkMedia['getInfos'](0, albumTotal - 1)
                                } else {
                                    myhkMedia['getInfos'](0, parseInt(albumId) - 1)
                                }
                            } else {
                                songTotals = songSheetList[0]['songIds']['length'];
                                rids = parseInt(Math['random']() * songTotals);
                                myhkMedia['getInfos'](rids, 0)
                            }
                        }
                        ;$player['removeClass']('showSongList');
                        setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    timeupdate: function() {
                        if (audio['buffered']['length']) {
                            if (!errjc) {
                                errCount = 0;
                                errjc = true
                            }
                            ;var a = 100 * audio['buffered']['start'](currentFrameId) / audio['duration']
                                , b = 100 * audio['buffered']['end'](currentFrameId) / audio['duration'];
                            $('.playprogress .progressbg .progressbg2', $player)['css']({
                                left: a + '%',
                                width: b - a + '%'
                            })
                        }
                        ;if (audio['currentTime'] > 0 && audio['duration'] > 0) {
                            localStorage['setItem']('myhk_player_time', audio['currentTime']);
                            playisTsMoving || ($('.playprogress .progressbg .ts', $player)['css']('left', 100 * (audio['currentTime'] / audio['duration'])['toFixed'](2) + '%'),
                                $('.playprogress .progressbg .progressbg1', $player)['css']('width', 100 * (audio['currentTime'] / audio['duration'])['toFixed'](2) + '%'),
                                $('.myhktime', $player)['text'](formatSecond(audio['currentTime']) + ' / ' + formatSecond(audio['duration'])))
                        } else {
                            $('.playprogress .progressbg .ts', $player)['css']('left', '0');
                            $('.playprogress .progressbg .progressbg1', $player)['css']('width', '0');
                            $('.playprogress .progressbg .progressbg2', $player)['css']({
                                left: '0',
                                width: '0'
                            });
                            $('.myhktime', $player)['text']('00:00 / 00:00')
                        }
                    }
                };
                var myhkTipsTime = null;
                var myhkTips = {
                    show: function(a) {
                        clearTimeout(myhkTipsTime);
                        $('#myhkTips')['text'](a)['addClass']('myhkshow');
                        this['hide']()
                    },
                    hide: function() {
                        myhkTipsTime = setTimeout(function() {
                            $('#myhkTips')['removeClass']('myhkshow')
                        }, 3000)
                    }
                };
                audio['addEventListener']('play', myhkMedia['play'], false);
                audio['addEventListener']('pause', myhkMedia['pause'], false);
                audio['addEventListener']('ended', myhkMedia['nexts'], false);
                audio['addEventListener']('playing', myhkMedia['playing'], false);
                audio['addEventListener']('volumechange', myhkMedia['volumechange'], false);
                audio['addEventListener']('error', myhkMedia['error'], false);
                audio['addEventListener']('seeking', myhkMedia['seeking'], false);
                audio['addEventListener']('timeupdate', myhkMedia['timeupdate'], !1);
                $switchPlayer['click'](function() {
                    $player['toggleClass']('myhkshow');
                    autoswitch = true
                });
                $('.myhkpause', $player)['click'](function() {
                    hasgeci = false;
                    var a = songSheetList['length'];
                    if (a == 1) {
                        $('li', $albumList)['eq'](songId)['addClass'](myhknow)['find']('.artist')['html']('暂停播放 > ')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']()
                    } else {
                        $('li', $albumList)['eq'](albumId)['addClass'](myhknow)['find']('.artist')['html']('暂停播放 > ')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']()
                    }
                    ;myhkTips['show']('暂停播放 - ' + songSheetList[albumId]['songNames'][songId]);
                    $cover['removeClass']('coverplay');
                    audio['pause']();
                    localStorage['setItem']('myhk_player_auto', 'no')
                });
                $('.myhkplay', $player)['click'](function() {
                    hasgeci = true;
                    var a = songSheetList['length'];
                    if (a == 1) {
                        $('li', $albumList)['eq'](songId)['addClass'](myhknow)['find']('.artist')['html']('当前播放 > ')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']()
                    } else {
                        $('li', $albumList)['eq'](albumId)['addClass'](myhknow)['find']('.artist')['html']('当前播放 > ')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']()
                    }
                    ;startPlay();
                    localStorage['setItem']('myhk_player_auto', 'yes')
                });
                $('.myhkprev', $player)['click'](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia['prev']();
                        localStorage['setItem']('myhk_player_auto', 'yes')
                    }
                });
                $('.myhknext', $player)['click'](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia['next']();
                        localStorage['setItem']('myhk_player_auto', 'yes')
                    }
                });
                $('.myhkaprev', $player)['click'](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia['aprev']();
                        localStorage['setItem']('myhk_player_auto', 'yes')
                    }
                });
                $('.myhkanext', $player)['click'](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia['anext']();
                        localStorage['setItem']('myhk_player_auto', 'yes')
                    }
                });
                $('.qhms', $player)['click'](function() {
                    myhkrandom ? (myhkrandom = false,
                        myhkTips['show']('专辑循环'),
                        $(this)['html']('<i class = "random myhkfont myhkicon-shunxubofang"></i>'),
                        $songFrom2['html']('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环')) : (myhkloop ? (myhkrandom = true,
                        myhkloop = false,
                        myhkTips['show']('随机播放'),
                        $(this)['html']('<i class = "random myhkfont myhkicon-suijibofang"></i>'),
                        $songFrom2['html']('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放')) : (myhkrandom = false,
                        myhkloop = true,
                        myhkTips['show']('单曲循环'),
                        $(this)['html']('<i class = "random myhkfont myhkicon-danquxunhuan"></i>'),
                        $songFrom2['html']('<i class="myhkfont myhkicon-danquxunhuan"></i> 单曲循环')));
                    if (autoswitch) {
                        autoswitch = false;
                        setTimeout(function() {
                            autoswitch = true
                        }, 500)
                    }
                });
                $('.myhkrandom', $player)['click'](function() {
                    $(this)['addClass'](myhknow);
                    $('.myhkloop', $player)['removeClass'](myhknow);
                    myhkrandom = true;
                    myhkTips['show']('随机播放');
                    $songFrom2['html']('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
                    localStorage['setItem']('random_play', 'true')
                });
                $('.myhkloop', $player)['click'](function() {
                    $(this)['addClass'](myhknow);
                    $('.myhkrandom', $player)['removeClass'](myhknow);
                    myhkrandom = false;
                    myhkTips['show']('顺序播放');
                    $songFrom2['html']('<i class="myhkfont myhkicon-shunxubofang"></i> 顺序播放');
                    localStorage['setItem']('random_play', 'false')
                });
                var $Volumeprogress = $('.volumeprogress .progressbg .ts', $player);
                $Volumeprogress.Drag({
                    parentObj: $('.volumeprogress .progressbg', $player),
                    lockY: !0,
                    callback: function(a, b, c, e, g) {
                        if (5 == arguments['length']) {
                            visTsMoving = !0;
                            var d;
                            d = ((84 - c) / 84)['toFixed'](2);
                            1 < Number(d) ? d = 1 : 0 > Number(d) && (d = 0,
                                $(a)['css']('top', '84px'));
                            $('.volumeprogress .progressbg .progressbg1', $player)['height'](100 * d);
                            audio['volume'] = d,
                                volume = d,
                                localStorage['setItem']('myhk_player_volume', d);
                            setTimeout(function() {
                                myhkTips['show']('音量：' + parseInt(d * 100) + '%')
                            }, 500)
                        } else {
                            visTsMoving = !1
                        }
                    }
                });
                var $playprogress = $('.playprogress .progressbg .ts', $player);
                $playprogress.Drag({
                    parentObj: $('.playprogress .progressbg', $player),
                    lockX: !0,
                    callback: function(a, b, c, e, g) {
                        if (5 == arguments['length']) {
                            playisTsMoving = !0;
                            var d = $('.playprogress .progressbg', $player)['width']()
                                , d = b / (d - $(a)['width']())
                                , d = d['toFixed'](2);
                            $('.playprogress .progressbg .progressbg1', $player)['width'](b);
                            audio['currentTime'] = audio['duration'] * d
                        } else {
                            playisTsMoving = !1
                        }
                    }
                });
                $('.playprogress .progressbg', $player)['click'](function(a) {
                    $('#myhkLrc')['removeClass']('myhkshow');
                    $('#myhkKsc')['removeClass']('showPlayer');
                    hasgeci = true;
                    playisTsMoving = !1;
                    a = a['pageX'] - $(this)['offset']()['left'];
                    var b = $(this)['width']();
                    a = (a / b)['toFixed'](2);
                    audio['currentTime'] = audio['duration'] * a
                });
                $('.switch-playlist')['click'](function() {
                    $player['toggleClass']('showAlbumList');
                    playerHeight = $('#myhkplayer .myhkplayer')['height']();
                    playlistHeight = $('#myhkplayer .myhkplaylist')['height']();
                    if (playerHeight >= 300 && playlistHeight <= 200) {
                        $('.myhkplayer .musicbottom .playprogress', $player)['hide']();
                        $('.myhkplayer .musicbottom .volumecontrol', $player)['hide']();
                        $('.myhkplayer', $player)['height'](90);
                        $('.myhkplayer .myhkblur', $player)['height'](90);
                        $('.myhkplayer .myhkcover img', $player)['height'](90);
                        $('.myhkplayer .musicbottom', $player)['css']({
                            background: 'rgba(255,255,255,.7)'
                        });
                        $songFrom4['hide']()
                    } else {
                        if (playerHeight == 90 && playlistHeight >= 200) {
                            $('.myhkplayer .musicbottom .playprogress', $player)['show']();
                            $('.myhkplayer .musicbottom .volumecontrol', $player)['show']();
                            $('.myhkplayer', $player)['height'](300);
                            $('.myhkplayer .myhkblur', $player)['height'](300);
                            $('.myhkplayer .myhkcover img', $player)['height'](300);
                            $('.myhkplayer .musicbottom', $player)['css']({
                                background: 'rgba(255,255,255,.8)'
                            });
                            if (zdyc && (hasLrc || hasKsc)) {
                                $songFrom4['show']()
                            }
                        }
                    }
                });
                $songList['mCustomScrollbar']();
                $('.song-list .musicheader,.song-list .myhkicon-arrow-right-bold', $player)['click'](function() {
                    $player['removeClass']('showSongList')
                });
                $('.switch-ksclrc')['click'](function() {
                    $('#myhkLrc')['toggleClass']('hide');
                    $('#myhkKsc')['toggleClass']('hidePlayer');
                    if (!$('#myhkLrc')['hasClass']('hide') || !$('#myhkKsc')['hasClass']('hidePlayer')) {
                        ycgeci = true;
                        if (hasLrc || hasKsc) {
                            if (gcdw) {
                                $songFrom3['html']('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位')
                            } else {
                                $songFrom3['html']('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启')
                            }
                        }
                        ;myhkTips['show']('开启歌词显示');
                        songFrom33 = '开启';
                        $songFrom4['html']('<i class="myhkfont myhkicon-anniu_kaiqi"></i>')
                    } else {
                        ycgeci = false;
                        if (hasLrc || hasKsc) {
                            $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 歌词关闭')
                        }
                        ;myhkTips['show']('歌词显示已关闭');
                        songFrom33 = '关闭';
                        $songFrom4['html']('<i class="myhkfont myhkicon-anniu_guanbi"></i>')
                    }
                    ;if (autoswitch) {
                        autoswitch = false;
                        setTimeout(function() {
                            autoswitch = true
                        }, 500)
                    }
                });
                myhkplayer['playList'] = {
                    creat: {
                        album: function() {
                            var b = songSheetList['length']
                                , albumList = '';
                            if (typeof myhkid === 'undefined') {
                                $('.musicheader', $albumList)['html'](siteName)
                            } else {
                                $('.musicheader', $player)['css']('cssText', 'display:block !important;');
                                $('.musicheader', $albumList)['html']('<a style="display: unset!important" href="https://myhkw.cn" title="点击免费申请音乐播放器" target="_blank" style="color:#FFF">本站音乐播放器由 MYHKW.CN 免费提供</a>')
                            }
                            ;if (b == 1) {
                                for (var i = 0; i < songSheetList[0]['songIds']['length']; i++) {
                                    albumList += '<li><span class="index">' + (i + 1) + '</span><span class="artist"></span>' + songSheetList[0]['songNames'][i] + ' - ' + songSheetList[0]['artistNames'][i] + '</li>'
                                }
                            } else {
                                for (var c = 0; c < b; c++) {
                                    albumList += '<li><i class="myhkfont myhkicon-arrow-right-bold"></i><span class="index">' + (c + 1) + '</span><span class="artist"></span>《' + songSheetList[c]['songSheetName'] + '》 - ' + songSheetList[c]['author'] + '</li>'
                                }
                            }
                            ;$('.myhklist', $albumList)['html']('<ul>' + albumList + '</ul>')['mCustomScrollbar']();
                            $('li', $albumList)['click'](function() {
                                if (b == 1) {
                                    hasgeci = true;
                                    albumId = 0;
                                    if ($(this)['hasClass'](myhknow)) {
                                        myhkTips['show']('正在播放 - ' + songSheetList[albumId]['songNames'][songId]['replace'](songId + 1 + '#', ''))
                                    } else {
                                        localStorage['setItem']('myhk_player_auto', 'yes');
                                        songId = $(this)['index']();
                                        myhkMedia['getInfos'](songId, albumId)
                                    }
                                } else {
                                    var a = $(this)['index']();
                                    $(this)['hasClass'](myhknow) ? myhkplayer['playList']['creat']['song'](a, true) : myhkplayer['playList']['creat']['song'](a, false);
                                    $player['addClass']('showSongList');
                                    $('.myhkplaylist .myhklist li', $player)['css']({
                                        color: 'rgb(' + myhkfcolor + ')'
                                    })
                                }
                            });
                            songTotal = songSheetList[albumId]['songIds']['length'];
                            playingalbumId && playingsongId ? myhkMedia['getInfos'](myhkplayer['playList']['creat']['getSongId'](playingsongId - 1), myhkplayer['playList']['creat']['getalbumId'](playingalbumId - 1)) : myhkrandom ? myhkMedia['getInfos'](window['parseInt'](Math['random']() * songTotal), albumId) : myhkMedia['getInfos'](0, albumId)
                        },
                        getSongId: function(n) {
                            return n >= songTotal ? 0 : n < 0 ? songTotal - 1 : n
                        },
                        getalbumId: function(n) {
                            return n >= songSheetList['length'] ? 0 : n < 0 ? songSheetList['length'] - 1 : n
                        },
                        song: function(a, b) {
                            songTotal = songSheetList[a]['songIds']['length'];
                            $('.song-list .musicheader span', $player)['text'](songSheetList[a]['songSheetName'] + '(' + songTotal + ')');
                            var c = '';
                            for (var i = 0; i < songTotal; i++) {
                                c += '<li><span class="index">' + (i + 1) + '</span><span class="artist"></span>' + songSheetList[a]['songNames'][i] + ' - ' + songSheetList[a]['artistNames'][i] + '</li>'
                            }
                            ;$('ul', $songList)['html'](c);
                            $songList['attr']('data-album', a);
                            $songList['mCustomScrollbar']('update');
                            if (b) {
                                $('li', $songList)['eq'](songId)['addClass'](myhknow)['siblings']()['removeClass'](myhknow);
                                $songList['mCustomScrollbar']('scrollTo', $('li.myhknow', $songList)['position']()['top'] - 90)
                            } else {
                                $songList['mCustomScrollbar']('scrollTo', 'top')
                            }
                            ;$('li', $songList)['click'](function() {
                                hasgeci = true;
                                albumId = a;
                                if ($(this)['hasClass'](myhknow)) {
                                    myhkTips['show']('正在播放 - ' + songSheetList[albumId]['songNames'][songId]['replace'](songId + 1 + '#', ''))
                                } else {
                                    localStorage['setItem']('myhk_player_auto', 'yes');
                                    songId = $(this)['index']();
                                    myhkMedia['getInfos'](songId, albumId)
                                }
                            })
                        }
                    }
                };
                var lrcTimeLine = []
                    , tempNum1 = 0
                    , tempNum2 = 0
                    , kscLineNow1 = false
                    , kscLineNow2 = false
                    , lrcTimeEnable = !1
                    , lrcOutTime = 0
                    , kscTime = null
                    , lrcTime = null;
                var myhkLrc = {
                    load: function() {
                        myhkLrc['lrc']['hide']();
                        myhkLrc['ksc']['hide']();
                        hasLrc = false;
                        hasKsc = false;
                        $('#myhkLrc')['html']('');
                        $('#myhkKsc')['html']('');
                        setTimeout(function() {
                            if (ycgeci) {
                                $songFrom3['html']('<i class="myhkfont myhkicon-successCircle"></i> 歌词' + songFrom33)
                            } else {
                                $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 歌词' + songFrom33)
                            }
                            ;var b = localStorage['getItem']('myhk_player_lrc');
                            var c = localStorage['getItem']('myhk_player_ksc');
                            if (c['indexOf'](songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId]) >= 0) {
                                if (c['indexOf']('karaoke') >= 0) {
                                    if (zdyc) {
                                        $songFrom4['show']()
                                    }
                                    ;myhkLrc['ksc']['format'](c['replace'](songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId], ''))
                                } else {
                                    $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                    $songFrom4['hide']()
                                }
                            } else {
                                if (b['indexOf'](songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId]) >= 0) {
                                    if (b['indexOf']('[00') >= 0) {
                                        if (zdyc) {
                                            $songFrom4['show']()
                                        }
                                        ;myhkLrc['lrc']['format'](b['replace'](songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId], ''))
                                    } else {
                                        $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                        $songFrom4['hide']()
                                    }
                                } else {
                                    if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i['test'](navigator['userAgent'])) {
                                        var d = ''
                                    } else {
                                        var d = '&ksc=' + songSheetList[albumId]['songId'][songId]
                                    }
                                    ;if (songSheetList[albumId]['songTypes'][songId] == 'local') {
                                        lrcurl = webURL + 'api/lyric?song=' + songSheetList[albumId]['songIds'][songId] + '&type=' + songSheetList[albumId]['songTypes'][songId] + '&id=' + keyId + d + '&sign=' + songSheetList[albumId]['sign'][songId] + '&play=' + albumId + '.' + songId
                                    } else {
                                        lrcurl = webURL + 'api/lyric?song=' + songSheetList[albumId]['songIds'][songId] + '&type=' + songSheetList[albumId]['songTypes'][songId] + '&id=' + keyId + '&sign=' + songSheetList[albumId]['sign'][songId] + d
                                    }
                                    ;$['ajax']({
                                        url: lrcurl,
                                        type: 'GET',
                                        cache: false,
                                        dataType: 'jsonp',
                                        jsonp: 'jsoncallback',
                                        success: function(a) {
                                            if (a['type'] == 'ksc') {
                                                localStorage['setItem']('myhk_player_ksc', songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId] + a['txt']);
                                                if (zdyc) {
                                                    $songFrom4['show']()
                                                }
                                                ;myhkLrc['ksc']['format'](a['txt'])
                                            } else {
                                                if (a['type'] == 'lrc') {
                                                    if (a['txt'] == 'null' || a['txt'] == '') {
                                                        $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                                        $songFrom4['hide']()
                                                    } else {
                                                        localStorage['setItem']('myhk_player_lrc', songSheetList[albumId]['songIds'][songId] + songSheetList[albumId]['songNames'][songId] + a['txt']);
                                                        if (zdyc) {
                                                            $songFrom4['show']()
                                                        }
                                                        ;myhkLrc['lrc']['format'](a['txt'])
                                                    }
                                                } else {
                                                    $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                                    $songFrom4['hide']()
                                                }
                                            }
                                        },
                                        error: function() {
                                            $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                            $songFrom4['hide']()
                                        }
                                    })
                                }
                            }
                        }, 50)
                    },
                    lrc: {
                        format: function(i) {
                            gcdw = true;
                            if (ycgeci == true) {
                                $songFrom3['html']('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位')
                            }
                            ;offsetcont = i['match'](/\[offset:(\w+)\]/i);
                            offsetcont = null != offsetcont && 0 == isNaN(offsetcont[1]) ? Number(offsetcont[1]) : 0;
                            lrcArray = decodeURIComponent(i)['split']('\x0A');
                            hasLrc = !0;
                            a = 0;
                            var c = '<li class="myhkLrc0"></li>';
                            lrcTimeLine = [];
                            lrcStr = [];
                            1 > lrcArray['length'] && (lrcArray = i['split'](/\s+/));
                            for (var b = lrcArray['length']; a < b; a++) {
                                var d = lrcArray[a]['replace'](/\[\d*:\d*((\.|\:)\d*)*\]/g, '')
                                    , e = lrcArray[a]['match'](/\[\d*:\d*((\.|\:)\d*)*\]/g);
                                if (void (0) != d && ('undefined' == d && (d = ''),
                                    e)) {
                                    for (var h = 0, f = e['length']; h < f; h++) {
                                        var g = Number(String(e[h]['match'](/\[(\d*)/i)[1]))
                                            , m = Number(String(e[h]['match'](/\:(\d+(\.\d*)*)/i)[1]));
                                        try {
                                            k = Number(String(e[h]['match'](/\:.*\:(\d*)/i)[1]))
                                        } catch (l) {
                                            k = 0
                                        }
                                        ;for (g = Math['round'](1E3 * (60 * g + m) + k - offsetcont); 0 == g || -1 != lrcTimeLine['indexOf'](g); ) {
                                            g++
                                        }
                                        ;'string' == typeof d && lrcTimeLine['push'](Number(g));
                                        lrcStr[String(g)] = String(d['replace'](/[-]/g, ''))
                                    }
                                }
                            }
                            ;lrcTimeLine = lrcTimeLine['sort'](function(a, b) {
                                return a - b
                            });
                            a = 0;
                            for (b = lrcTimeLine['length']; a < b; a++) {
                                if (d = lrcTimeLine[a],
                                    e = lrcStr[d],
                                    g = lrcTimeLine[a + 1],
                                    f = Math['round'](Number(g) - Number(d)),
                                void (0) !== e) {
                                    c = '<li class="myhkLrc0"></li>' == c && 0 == d ? '<li class="myhkLrc' + d + ' ' + f + ' ' + h + ' myhknow">' + e + '</li>' : c + '<li class="myhkLrc' + d + ' ' + f + ' ">' + e + '</li>'
                                }
                            }
                            ;$('#myhkLrc')['html']('<ul>' + c + '</ul>');
                            lrcTime = setInterval(myhkLrc['lrc']['play'], 100)
                        },
                        play: function() {
                            var d = Math['round'](1E3 * audio['currentTime']);
                            if ($('#myhkLrc')['height']() >= 40) {
                                lrcHeight = 40
                            } else {
                                lrcHeight = 20
                            }
                            ;d >= lrcTimeLine[0] && (lrcOutTime = lrcTimeLine['shift']());
                            if (((lrcOutTime + 1000) - d) > 0 && ((d + 1000) - lrcOutTime) > 0) {
                                var a = $('.myhkLrc' + lrcOutTime)
                                    , b = Number(String(a['attr']('class'))['split'](' ')[1]) / (a['text']()['length'] + 1);
                                !a['hasClass'](myhknow) && $('li')['hasClass']('myhkLrc' + lrcOutTime) && (a['html'] = '<span>' + a['html']() + '</span>',
                                    a['addClass'](myhknow)['siblings']()['removeClass'](myhknow),
                                    $words = a,
                                    $words['each'](function() {
                                        if (randcolor == 1) {
                                            lrccolor = myhkrandColor()
                                        } else {
                                            lrccolor = myhkcolor
                                        }
                                        ;$(this)['attr']('style', 'color:rgba(' + lrccolor + ')!important')['siblings']()['removeAttr']('style');
                                        if (letterfx == 1) {
                                            if (a['text']()['length'] > 6) {
                                                if (b > 500) {
                                                    $(this)['letterfx']({
                                                        "fx": 'smear',
                                                        "letter_end": 'rewind'
                                                    })
                                                } else {
                                                    var c = $(this)
                                                        , ticker = new Ticker(c)['reset']();
                                                    c['data']('ticker', ticker)
                                                }
                                            } else {
                                                $(this)['letterfx']({
                                                    'fx': 'wave',
                                                    fx_duration: '150ms'
                                                })
                                            }
                                        }
                                    }));
                                $('#myhkLrc')['scrollTop'](lrcHeight * a['index']());
                                if (ycgeci) {
                                    $songFrom3['html']('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启');
                                    gcdw = false
                                }
                                ;if (hasgeci && hasLrc) {
                                    $('#myhkLrc')['addClass']('myhkshow')
                                }
                            }
                        },
                        hide: function() {
                            clearInterval(lrcTime);
                            $('#myhkLrc')['removeClass']('myhkshow')
                        }
                    },
                    ksc: {
                        format: function(b) {
                            gcdw = true;
                            if (ycgeci == true) {
                                $songFrom3['html']('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位')
                            }
                            ;hasKsc = true;
                            var c = []
                                , kscEndTimeLine = []
                                , kscCont = []
                                , kscTimePer = []
                                , kscMain = ''
                                , lineNow = 0
                                , sex = 'b';
                            b['replace'](/\'(\d*):(\d*).(\d*)\','(\d*):(\d*).(\d*)\','(.*)\',\s\'(.*)\'/g, function() {
                                var a = arguments[1] | 0
                                    , startSec = arguments[2] | 0
                                    , startKsec = arguments[3] | 0
                                    , endMin = arguments[4] | 0
                                    , endSec = arguments[5] | 0
                                    , endKsec = arguments[6] | 0;
                                c['push'](a * 600 + startSec * 10 + Math['round'](startKsec / 100));
                                kscEndTimeLine['push'](endMin * 600 + endSec * 10 + Math['round'](endKsec / 100));
                                kscCont['push'](arguments[7]);
                                kscTimePer['push'](arguments[8])
                            });
                            for (var i = 0; i < c['length']; i++) {
                                var d = false;
                                var e = new Array();
                                var f = 0;
                                var g = ''
                                    , kscTextPerTime = kscTimePer[i]['split'](',');
                                if (kscCont[i]['indexOf']('男：') >= 0) {
                                    sex = 'm';
                                    kscCont[i] = kscCont[i]['replace']('男：', ' ')
                                }
                                ;if (kscCont[i]['indexOf']('女：') >= 0) {
                                    sex = 'g';
                                    kscCont[i] = kscCont[i]['replace']('女：', ' ')
                                }
                                ;if (kscCont[i]['indexOf']('合：') >= 0) {
                                    sex = 't';
                                    kscCont[i] = kscCont[i]['replace']('合：', ' ')
                                }
                                ;var h = kscCont[i]['match'](/(\w+)'+(\w+)|(\w+)|([^\w\s])|(^\s+)|(\s+$)|\s+/g);
                                for (var j = 0; j < h['length']; j++) {
                                    if (h[j] == ' ') {
                                        var d = true;
                                        e[j] = '0';
                                        f++
                                    } else {
                                        if (d) {
                                            e[j] = kscTextPerTime[j - f]
                                        } else {
                                            e[j] = kscTextPerTime[j]
                                        }
                                    }
                                    ;if (kscCont[i][j] == '，') {
                                        g += '<span class="blank"><em dir="' + e[j] + '"></em></span>'
                                    } else {
                                        g += '<span><em dir="' + e[j] + '">' + h[j] + '</em></span>'
                                    }
                                }
                                ;kscMain += '<div id="myhkKsc' + kscEndTimeLine[i] + '" class="myhkKsc' + c[i] + ' line line' + (i % 2 == 0 ? 1 : 2) + ' ' + sex + '"><div class="bg">' + g + '</div><div class="lighter">' + g + '</div></div>'
                            }
                            ;$('#myhkKsc')['html'](kscMain);
                            kscTime = setInterval(myhkLrc['ksc']['play'], 100)
                        },
                        play: function() {
                            var a = Math['round'](audio['currentTime'] * 10);
                            if ($('.myhkKsc' + (a + 10))['length'] && !$('.myhkKsc' + (a + 10))['hasClass'](myhknow)) {
                                if (ycgeci == true) {
                                    $songFrom3['html']('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启');
                                    gcdw = false
                                }
                                ;if (hasgeci && hasKsc) {
                                    $('#myhkKsc')['addClass']('showPlayer')
                                }
                                ;var b = $('.myhkKsc' + (a + 10));
                                if (randcolor == 1) {
                                    lrccolor = myhkrandColor()
                                } else {
                                    lrccolor = myhkcolor
                                }
                                ;b['addClass'](myhknow)['css']('color', 'rgba(' + lrccolor + ')');
                                b['hasClass']('line1') ? b['siblings']('.line1')['removeClass'](myhknow)['removeAttr']('style') : b['siblings']('.line2')['removeClass'](myhknow)['removeAttr']('style');
                                setTimeout(function() {
                                    if (b['hasClass']('line1')) {
                                        myhkLrc['ksc']['showLetters']['line1'](b);
                                        kscLineNow1 = true
                                    } else {
                                        myhkLrc['ksc']['showLetters']['line2'](b);
                                        kscLineNow2 = true
                                    }
                                }, 1000)
                            } else {
                                kscCont = ''
                            }
                            ;if ($('#myhkKsc' + (a - 30))['length']) {
                                $('#myhkKsc' + (a - 30))['removeClass'](myhknow)
                            }
                        },
                        showLetters: {
                            line1: function(a) {
                                var b = $('.lighter span', a)
                                    , $spanNow = b['eq'](tempNum1++)
                                    , $em = $('em', $spanNow)
                                    , spanT = +$em['attr']('dir');
                                $em['animate']({
                                    width: '100%'
                                }, spanT);
                                if (tempNum1 < b['length']) {
                                    letterTime1 = setTimeout(function() {
                                        myhkLrc['ksc']['showLetters']['line1'](a)
                                    }, spanT)
                                } else {
                                    tempNum1 = 0;
                                    kscLineNow1 = false
                                }
                            },
                            line2: function(a) {
                                var b = $('.lighter span', a)
                                    , $spanNow = b['eq'](tempNum2++)
                                    , $em = $('em', $spanNow)
                                    , spanT = +$em['attr']('dir');
                                $em['animate']({
                                    width: '100%'
                                }, spanT);
                                if (tempNum2 < b['length']) {
                                    letterTime2 = setTimeout(function() {
                                        myhkLrc['ksc']['showLetters']['line2'](a)
                                    }, spanT)
                                } else {
                                    tempNum2 = 0;
                                    kscLineNow2 = false
                                }
                            }
                        },
                        hide: function() {
                            clearInterval(kscTime);
                            $('#myhkKsc')['removeClass']('showPlayer')
                        }
                    }
                };
                myhkplayerlist = localStorage['getItem']('myhk_player_list') ? localStorage['getItem']('myhk_player_list') : false;
                myhkplayerversion = localStorage['getItem']('myhk_player_version') ? localStorage['getItem']('myhk_player_version') : 1;
                let s= '音乐播放器';
                if (myhkplayerlist && window['location']['href']['indexOf']('myhkw.cn/admin/#/') < 0) {
                    $['ajax']({
                        url: webURL + 'api/playlist?id=' + keyId + '&version=' + keyId,
                        type: 'GET',
                        dataType: 'text',
                        success: function(d) {
                            if (d != myhkplayerversion) {
                                $['ajax']({
                                    url: webURL + 'api/playlist?id=' + keyId,
                                    type: 'GET',
                                    dataType: 'text',
                                    success: function(a) {
                                        try {
                                            a+=",playerName='"+s+"',siteName="+"'"+s+"'";
                                            localStorage['removeItem']('myhk_player_list');
                                            localStorage['setItem']('myhk_player_list', a);
                                            localStorage['removeItem']('myhk_player_version');
                                            localStorage['setItem']('myhk_player_version', d);

                                        } catch (e) {
                                            console['log']('新歌单：' + parseInt(a['length'] / 1024) + 'KB 已超出浏览器最大限制！')
                                        }
                                        ;if (typeof songSheetList === 'undefined') {
                                            eval(a);
                                        }
                                        ;playercss = setInterval(myhkcss, 100)
                                    },
                                    error: function(a, b, c) {
                                        eval(myhkplayerlist);
                                        playercss = setInterval(myhkcss, 100)
                                    }
                                })
                            } else {
                                eval(myhkplayerlist);
                                greeting=null;
                                playercss = setInterval(myhkcss, 100)
                            }
                        },
                        error: function(a, b, c) {
                            eval(myhkplayerlist);
                            playercss = setInterval(myhkcss, 100)
                        }
                    })
                } else {
                    $['ajax']({
                        url: webURL + 'api/playlist?id=' + keyId,
                        type: 'GET',
                        dataType: 'text',
                        success: function(a) {
                            try {
                                a+=",playerName='"+s+"',siteName="+"'"+s+"'";
                                localStorage['removeItem']('myhk_player_list');
                                localStorage['setItem']('myhk_player_list', a);
                            } catch (e) {
                                console['log']('歌单：' + parseInt(a['length'] / 1024) + 'KB 已超出浏览器最大限制！')
                            }
                            ;if (typeof songSheetList === 'undefined') {
                                eval(a);
                            }
                            ;playercss = setInterval(myhkcss, 100)
                        },
                        error: function(a, b, c) {
                            $('#myhkplayer')['hide']();
                            myhkTips['show']('原歌单数据获取失败!')
                        }
                    })
                }
                setInterval(function() {
                    localStorage['setItem']('myhk_player_feed', new Date()['getTime']().toString())
                }, 500);
                window['addEventListener']('beforeunload', beforeUnloadHandler, true);
                function beforeUnloadHandler(a) {
                    localStorage['setItem']('myhk_player_load', 'false')
                }

            }

        ;function myhkcss() {
            if ($player['css']('display') == 'contents') {
                clearInterval(playercss);
            } else {
                if ($player['css']('display') != 'none') {
                    clearInterval(playercss);
                    getlist()
                }
            }
        }
        function getlist() {
            if (typeof myhkid !== 'undefined') {
                $('.myhkgeci', $player)['html']('<a style="display: unset!important;float: right" href="https://myhkw.cn" title="点击免费申请音乐播放器" target="_blank"><i class="myhkfont myhkicon-share"></i> 免费申请</a>');
                if ($('.myhkgeci', $player)['css']('display') == 'none' || $('.musicheader', $player)['css']('display') == 'none' || $('.artiststyle', $player)['css']('display') == 'none') {
                    $('.myhkgeci', $player)['css']('cssText', 'display:unset !important;');
                    $('.musicheader', $player)['css']('cssText', 'display:block !important;');
                    $('.artiststyle', $player)['css']('cssText', 'display:block !important;');
                }
                ;clearInterval(myhkadTime);
                function myhkad() {
                    var a = adList['length'];
                    adid = parseInt(Math['random']() * a);
                    $('a', $player)['css']('cssText', 'display:unset !important;');
                    $('.musicheader', $albumList)['html']('<a style="display: unset!important" href="' + webURL + 'ad/' + keyId + '.' + adList[adid]['adurl'] + '" title="' + adList[adid]['adtitle'] + '" style="color:rgb(' + myhkfcolor + ')" target="_blank"><i class="myhkfont myhkicon-megaphone"></i> ' + adList[adid]['adtitle'] + '</a>');
                    $('.myhkgeci', $player)['html']('<a style="display: unset!important;float: right;color:rgb(' + myhkfcolor + ')" href="' + webURL + 'ad/' + keyId + '.' + adList[adid]['adurl'] + '" title="' + adList[adid]['adtitle'] + '" target="_blank"><i class="myhkfont myhkicon-share"></i> ' + adList[adid]['adname'] + '</a>');
                    if ($('.myhkgeci', $player)['css']('display') == 'none' || $('.musicheader', $player)['css']('display') == 'none' || $('.artiststyle', $player)['css']('display') == 'none') {
                        $('.myhkgeci', $player)['css']('cssText', 'display:unset !important;');
                        $('.musicheader', $player)['css']('cssText', 'display:block !important;');
                        $('.artiststyle', $player)['css']('cssText', 'display:block !important;');
                    }
                }
                myhkadTime = setInterval(myhkad, 10000)
            }
            ;if (!isNaN(defaultVolume)) {
                if (defaultVolume >= '100') {
                    vol = '1'
                } else {
                    vol = '0.' + defaultVolume
                }
            } else {
                vol = '0.5'
            }
            // ;if (showNotes !== 1) {
            //     $('.myhkstatus .myhknote', $player)['hide']()
            // }
            ;volume = localStorage['getItem']('myhk_player_volume') ? localStorage['getItem']('myhk_player_volume') : vol;
            if (100 * volume != '0') {
                $('.volumeprogress .progressbg .ts', $player)['css']('top', 100 * (1 - volume) + 'px')
            } else {
                $('.volumeprogress .progressbg .ts', $player)['css']('top', '84px')
            }
            ;$('.volumeprogress .progressbg .progressbg1', $player)['height'](100 * volume);
            0 == volume ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeCross')['removeClass']('myhkicon-volumeLow myhkicon-volumeMiddle myhkicon-volumeHigh') : volume >= 0.4 && volume <= 0.7 ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeMiddle')['removeClass']('myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeHigh') : volume >= 0.7 && volume <= 1 ? $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeHigh')['removeClass']('myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeMiddle') : $('.myhkplayer .musicbottom .volume', $player)['addClass']('myhkicon-volumeLow')['removeClass']('myhkicon-volumeHigh myhkicon-volumeCross myhkicon-volumeMiddle');
            audio['volume'] = volume;
            // if (switchopen == 1 && op == 1) {
            //     if (!isNaN(time)) {
            //         setTimeout(function() {
            //             if (!$player['hasClass']('myhkshow') && !autoswitch) {
            //                 $player['toggleClass']('myhkshow')
            //             }
            //         }, time * 1000)
            //     }
            // }
            ;if (localStorage['getItem']('random_play') != null) {
                if (localStorage['getItem']('random_play') == 'true') {
                    $('.qhms', $player)['html']('<i class = "random myhkfont myhkicon-suijibofang"></i>');
                    $songFrom2['html']('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
                    myhkrandom = true
                } else {
                    $('.qhms', $player)['html']('<i class = "random myhkfont myhkicon-shunxubofang"></i>');
                    $songFrom2['html']('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环');
                    myhkrandom = false
                }
            } else {
                if (randomPlayer != 1) {
                    myhkrandom = false;
                    $('.qhms', $player)['html']('<i class = "random myhkfont myhkicon-shunxubofang"></i>');
                    $songFrom2['html']('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环')
                } else {
                    $('.qhms', $player)['html']('<i class = "random myhkfont myhkicon-suijibofang"></i>');
                    $songFrom2['html']('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
                    myhkrandom = true
                }
            }
            ;albumTotals = songSheetList['length'];
            if (typeof myhkalbum === 'undefined') {
                albumIds = playingalbumId ? playingalbumId : defaultAlbum - 1;
                if (albumIds > albumTotals) {
                    albumId = 0;
                } else {
                    albumId = playingalbumId ? playingalbumId - 1 : defaultAlbum - 1;
                    if (albumId < 0) {
                        albumId = 0;
                        playingalbumId = 0
                    }

                }
            } else {
                if (typeof myhksong === 'undefined') {
                    if (myhkalbum > albumTotals) {
                        albumId = 0;
                        myhkMedia['getInfos'](0, 0);
                    } else {
                        playingalbumId = myhkalbum;
                        albumId = myhkalbum;
                        myhkMedia['getInfos'](0, myhkalbum - 1);
                    }
                } else {
                    if (myhkalbum > albumTotals) {
                        albumId = 0;
                        myhkMedia['getInfos'](myhksong - 1, 0)
                    } else {
                        playingalbumId = myhkalbum;
                        playingsongId = myhksong;
                        albumId = myhkalbum;
                        myhkMedia['getInfos'](myhksong - 1, myhkalbum - 1)
                    }
                }
            }
            ;if (showLrc == 0) {
                $('#myhkLrc')['addClass']('hide');
                $('#myhkKsc')['addClass']('hidePlayer');
                ycgeci = false;
                if (hasLrc) {
                    $songFrom3['html']('<i class="myhkfont myhkicon-errorCircle"></i> 歌词关闭')
                }
                ;songFrom33 = '关闭';
                $songFrom4['html']('<i class="myhkfont myhkicon-anniu_guanbi"></i>')
            }
            ;
            // if (showGreeting == 1 && sg == 1) {
            //     setTimeout(function() {
            //         myhkTips['show'](greeting)
            //     }, 5000)
            // }
            myhkplayer['playList']['creat']['album']()
        }
        function LimitStr(a, b, t) {
            LimitHeight = $('#myhkplayer .myhkplayer')['height']();
            if (LimitHeight == 300) {
                b = b || 14
            } else {
                if (LimitHeight == 90) {
                    b = b || 14
                } else {
                    b = b || 6
                }
            }
            ;t = t || '...';
            var c = '';
            var d = a['length'];
            var h = 0;
            for (var i = 0; h < b * 2 && i < d; i++) {
                h += a['charCodeAt'](i) > 128 ? 2 : 1;
                c += a['charAt'](i)
            }
            ;if (i < d) {
                c += t
            }
            ;return c
        }
        function netmusic() {
            myhkLrc['load']();
            songlocations = songSheetList[albumId]['locations'][songId] ? songSheetList[albumId]['locations'][songId] : false;
            if (songlocations) {
                audio['src'] = songSheetList[albumId]['locations'][songId]
            } else {
                audio['src'] = webURL + 'api/url?song=' + songSheetList[albumId]['songIds'][songId] + '&type=' + songSheetList[albumId]['songTypes'][songId] + '&id=' + keyId + '&sign=' + songSheetList[albumId]['sign'][songId]
            }
            ;$songName['html']('<span>' + LimitStr(songSheetList[albumId]['songNames'][songId]) + '</span>');
            $songFrom['html']('<span>' + LimitStr(songSheetList[albumId]['artistNames'][songId], 6) + '</span>');
            $songFrom1['html']('<span>' + LimitStr(songSheetList[albumId]['albumNames'][songId], 6) + '</span>');
            var d = new Image();
            newimg = webURL + 'api/pic?song=' + songSheetList[albumId]['songIds'][songId] + '&pic=' + encodeURIComponent(songSheetList[albumId]['albumCovers'][songId]) + '&type=' + songSheetList[albumId]['songTypes'][songId] + '&id=' + keyId + '&sign=' + songSheetList[albumId]['sign'][songId];
            d['src'] = newimg;
            $cover['addClass']('changing');
            d['onload'] = function() {
                $cover['removeClass']('changing');
                $['ajax']({
                    url: webURL + 'api/color',
                    type: 'GET',
                    dataType: 'script',
                    data: {
                        song: songSheetList[albumId]['songIds'][songId],
                        type: songSheetList[albumId]['songTypes'][songId],
                        pic: encodeURIComponent(songSheetList[albumId]['albumCovers'][songId]),
                        id: keyId,
                        sign: songSheetList[albumId]['sign'][songId]
                    },
                    success: function() {
                        playerColor()
                    },
                    error: function() {
                        var a = '0,0,0';
                        playerColor()
                    }
                })
            }
            ;
            d['onerror'] = function() {
                newimg = 'https://q1.qlogo.cn/g?b=qq&nk=' + myhkqq + '&s=140';
                d['src'] = newimg;
                setTimeout(function() {
                    myhkTips['show'](songSheetList[albumId]['songNames'][songId] + ' - 专辑图片获取失败！')
                }, 4000)
            }
            ;
            $cover['html'](d);
            if (background == 1) {
                $('.myhkblur', $player)['show']();
                $('.myhkblur', $player)['attr']('src', d['src'])
            } else {
                $('.myhkblur', $player)['hide']()
            }
            ;coverHeight = $('#myhkplayer .myhkplayer')['height']();
            if (coverHeight == 300) {
                $('.myhkblur', $player)['height'](300);
                $('.myhkplayer .myhkcover img', $player)['height'](300)
            } else {
                if (coverHeight == 90) {
                    $('.myhkblur', $player)['height'](90);
                    $('.myhkplayer .myhkcover img', $player)['height'](90)
                }
            }
            ;if (myhkfirst == 1) {
                myhkfirst = 2;
                if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i['test'](navigator['userAgent'])) {
                    if (mautoPlayer == 1 && au == 1) {
                        if (localStorage['getItem']('myhk_player_auto') !== 'no') {
                            startPlay()
                        } else {
                            $cover['removeClass']('coverplay');
                            audio['pause']()
                        }
                    } else {
                        if (localStorage['getItem']('myhk_player_auto') === 'yes') {
                            startPlay()
                        } else {
                            $cover['removeClass']('coverplay');
                            audio['pause']()
                        }
                    }
                } else {
                    if (autoPlayer == 1 && au == 1) {
                        if (localStorage['getItem']('myhk_player_auto') !== 'no') {
                            startPlay()
                        } else {
                            $cover['removeClass']('coverplay');
                            audio['pause']()
                        }
                    } else {
                        if (localStorage['getItem']('myhk_player_auto') === 'yes') {
                            startPlay()
                        } else {
                            $cover['removeClass']('coverplay');
                            audio['pause']()
                        }
                    }
                }
            } else {
                startPlay()
            }
            ;if (myhkplaytime && myhkplaying && playing && songSheetList[albumId]['songTypes'][songId] + songSheetList[albumId]['songIds'][songId] == myhk_player_songid) {
                $('.playprogress .progressbg .ts', $player)['css']('left', 100 * (myhkplaytime / myhkplaying)['toFixed'](2) + '%');
                $('.playprogress .progressbg .progressbg1', $player)['css']('width', 100 * (myhkplaytime / myhkplaying)['toFixed'](2) + '%');
                $('.myhktime', $player)['text'](formatSecond(myhkplaytime) + ' / ' + formatSecond(myhkplaying))
            }
            /*    $(window)['scroll'](function() {
                    var a = $(this)['scrollTop']();
                    var b = $(window['document'])['height']();
                    var c = $(this)['height']();
                    if (a + c == b) {
                        zdyc = false;
                        if (hasgeci && ycgeci) {
                            $songFrom4['hide']();
                            $('#myhkLrc')['addClass']('hide');
                            $('#myhkKsc')['addClass']('hidePlayer');
                            if (hasLrc || hasKsc) {
                                myhkTips['show']('歌词自动隐藏')
                            }
                        }
                    } else {
                        zdyc = true;
                        if (hasgeci && ycgeci) {
                            if (hasLrc || hasKsc) {
                                $songFrom4['show']()
                            }
                            ;$('#myhkLrc')['removeClass']('hide');
                            $('#myhkKsc')['removeClass']('hidePlayer')
                        }
                    }
                })
                */
        }
        function startPlay() {
            document['addEventListener']('WeixinJSBridgeReady', function() {
                var a = function() {
                    audio['play']();
                    document['removeEventListener']('touchstart', a, false)
                };
                audio['play']();
                document['addEventListener']('touchstart', a, false)
            }, false);
            var b = audio['play']();
            if (b) {
                b['then'](()=>{
                        if (playingalbumId == albumId + 1 && playingsongId == songId + 1 && myhkplaytime && playing && songSheetList[albumId]['songTypes'][songId] + songSheetList[albumId]['songIds'][songId] == myhk_player_songid) {
                            audio['currentTime'] = myhkplaytime;
                            playing = false
                        };var t = audio['duration'];
                        localStorage['setItem']('myhk_player_times', t);
                        $cover['addClass']('coverplay');
                        myhkTips['show']('开始从' + songFrom55 + '播放：' + songSheetList[albumId]['songNames'][songId]);
                        if (showMsg === 1) {
                            showMsgNotification(songSheetList[albumId]['songNames'][songId], songSheetList[albumId]['artistNames'][songId] + ' - ' + songSheetList[albumId]['albumNames'][songId], newimg)
                        };
                    }
                )['catch']((e)=>{

                    }
                )
            }
        }
        function allmusic() {
            var a = songSheetList['length'];
            if (a == 1) {
                $('li', $albumList)['eq'](songId)['addClass'](myhknow)['find']('.artist')['html']('当前播放&nbsp;>&nbsp;')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']();
                if (!$('.myhklist ul', $albumList)['html']() == '') {
                    $('.myhklist', $albumList)['mCustomScrollbar']('scrollTo', ($('li.myhknow', $albumList)['position']()['top']) - 90)
                }
            } else {
                $('li', $albumList)['eq'](albumId)['addClass'](myhknow)['find']('.artist')['html']('当前播放&nbsp;>&nbsp;')['parent']()['siblings']()['removeClass'](myhknow)['find']('.artist')['html']('')['parent']();
                $('.myhklist', $albumList)['mCustomScrollbar']('scrollTo', ($('li.myhknow', $albumList)['position']()['top']) - 90);
                if (!$('ul', $songList)['html']() == '' && $('[data-album=' + albumId + ']')['length']) {
                    $('[data-album=' + albumId + ']')['find']('li')['eq'](songId)['addClass'](myhknow)['siblings']()['removeClass'](myhknow);
                    $songList['mCustomScrollbar']('scrollTo', ($('li.myhknow', $songList)['position']()['top']) - 90)
                }
            }
            ;if (Number(playingalbumId) !== Number(parseInt(albumId) + 1) || Number(playingsongId) !== Number(parseInt(songId) + 1)) {
                playing = false
            }
        }
        function playerColor() {
            $player['css']({
                background: 'rgba(' + myhkcolor + ',.8)'
            });
            $switchPlayer['css']({
                background: 'rgba(' + myhkcolor + ',.3)'
            });
            $tips['css']({
                background: 'rgba(' + myhkcolor + ',.6)'
            });
            $lk['css']({
                background: 'rgba(' + myhkcolor + ',.3)'
            });
            $kk['css']({
                background: 'rgba(' + myhkcolor + ',.3)'
            });
            $('.myhkinfo,.myhkcontrol,.myhkstatus .myhknote,.myhkgeci a,.myhkplaylist .myhklist li,.musicheader a,.myhkplaylist,.musicheader', $player)['css']({
                color: 'rgb(' + myhkfcolor + ')'
            });
            $('.myhkplayer .myhkcover', $player)['css']('border', '4px rgb(' + myhkfcolor + ') solid');
            $('.myhkplayer .myhkcontrol .myhkstatus', $player)['css']('background-image', 'linear-gradient(90deg, rgb(' + myhkfcolor + ') 50%, transparent 50%, transparent), linear-gradient(90deg, rgb(' + myhkfcolor + ') 50%, rgb(' + myhkfcolor + ') 50%, rgb(' + myhkfcolor + ')');
            $('.myhkplayer .myhkcontrol .myhkstatus b', $player)['css']({
                background: 'rgba(' + myhkcolor + ',.5)'
            })
        }
        function GetCurrentFrame() {
            var a = audio['buffered']['length'];
            if (1 == a) {
                return 0
            }
            ;for (var b = $('.playprogress .progressbg', $player)['width'](), b = parseInt($('.playprogress .progressbg .ts', $player)['css']('left')) / b * audio['duration'], c = 0; c < a; c++) {
                if (b >= audio['buffered']['start'](c) && b <= audio['buffered']['end'](c)) {
                    return c
                }
            }
            ;return 0
        }
        function myhkrandColor() {
            this['r'] = Math['floor'](Math['random']() * 255);
            this['g'] = Math['floor'](Math['random']() * 255);
            this['b'] = Math['floor'](Math['random']() * 255);
            this['color'] = this['r'] + ',' + this['g'] + ',' + this['b'];
            return this['color']
        }
        function showMsgNotification(c, d, e) {
            var f = window['Notification'] || window['mozNotification'] || window['webkitNotification'];
            if (f) {
                if (f['permission'] == 'granted') {
                    var g = new f(c,{
                        body: d,
                        icon: e
                    });
                    setTimeout(function() {
                        g['close']()
                    }, 3000);
                    g['onclick'] = function() {
                        g['close']()
                    }
                    ;
                    g['onerror'] = function() {
                    }
                    ;
                    return false
                } else {
                    f['requestPermission'](function(a) {
                        if (a === 'granted') {
                            var b = new f(c,{
                                body: d,
                                icon: e
                            });
                            b['onclick'] = function() {}
                            ;
                            b['onerror'] = function() {}
                            ;
                            b['onshow'] = function() {}
                            ;
                            b['onclose'] = function() {}
                        } else {
                            return false
                        }
                    })
                }
            }
        }
        function MillisecondToDate(a) {
            a = parseFloat(a) / 1E3;
            return a = null != a && '' != a ? 60 < a && 3600 > a ? foo(parseInt(a / 60)) + ':' + foo(parseInt(60 * (parseFloat(a / 60) - parseInt(a / 60)))) : 3600 <= a && 86400 > a ? parseInt(a / 3600) + ':' + foo(parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))) + ':' + foo(parseInt(60 * (parseFloat(60 * (parseFloat(a / 3600) - parseInt(a / 3600))) - parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))))) : '00:' + foo(parseInt(a)) : '00:00'
        }
        function foo(a) {
            a = '00' + a;
            return a['substring'](a['length'] - 2, a['length'])
        }
        function Ticker(a, c) {
            a['lettering']();
            this['done'] = !1;
            this['cycleCount'] = Number(String(a['attr']('class'))['split'](' ')[1]) / 1E3;
            this['cycleCurrent'] = 0;
            this['original'] = a['html']();
            this['letters'] = a['find']('span');
            this['letterCount'] = this['letters']['length'];
            this['letterCurrent'] = 0;
            this['chars'] = String(a['attr']('aria-label'));
            this['charsCount'] = this['chars']['length'];
            this['letters']['each'](function() {
                var a = $(this);
                a['attr']('data-orig', a['text']());
                a['text']('-')
            })
        }
        function formatSecond(t) {
            if (t > 0) {
                return ('00' + Math['floor'](t / 60))['substr'](-2) + ':' + ('00' + Math['floor'](t % 60))['substr'](-2)
            } else {
                return ('00:00')
            }
        }
        Ticker['prototype']['getChar'] = function() {
            return this['chars'][Math['floor'](Math['random']() * this['charsCount'])]
        }
        ;
        Ticker['prototype']['reset'] = function() {
            this['done'] = !1;
            this['letterCurrent'] = this['cycleCurrent'] = 0;
            this['letters']['each'](function() {
                var a = $(this);
                a['text'](a['attr']('data-orig'));
                a['removeClass']('done')
            });
            this['loop']()
        }
        ;
        Ticker['prototype']['loop'] = function() {
            if (randcolor == 1) {
                lrccolor = myhkrandColor()
            } else {
                lrccolor = myhkcolor
            }
            ;self = this;
            this['letters']['each'](function(a, b) {
                b = $(b);
                a >= self['letterCurrent'] && (b['css']('color', '#000'),
                    b['css']('opacity', '0.4'))
            });
            if (this['cycleCurrent'] < this['cycleCount']) {
                this['cycleCurrent']++
            } else {
                if (this['letterCurrent'] < this['letterCount']) {
                    var a = this['letters']['eq'](this['letterCurrent']);
                    this['cycleCurrent'] = 0;
                    a['attr']('style', 'color:rgb(' + lrccolor + ')');
                    a['text'](a['attr']('data-orig'))['css']('opacity', 1)['addClass']('done');
                    this['letterCurrent']++
                } else {
                    this['done'] = !0
                }
            }
            ;this['done'] || requestAnimationFrame(function() {
                self['loop']()
            })
        }
        ;
        $(document)['ready'](function() {
            $(window)['keydown'](function(a) {
                var b = a['keyCode'];
                if (b == 192) {
                    auto = '';
                    if (audio['paused']) {
                        $('.myhkplay', $player)['click']()
                    } else {
                        $('.myhkpause', $player)['click']()
                    }
                }
            })
        });
        document['onclick'] = function(e) {
            var e = e || window['event'];
            var a = e['target'] || e['srcElement'];
            var b = document['getElementById']('myhkplayer');
            if (!(a == b) && !b['contains'](a) && $player['hasClass']('myhkshow') && autoswitch) {
                $player['toggleClass']('myhkshow');
                autoswitch = false
            }
        }

        function myhkloadlist(d, e, f) {
            $['ajax']({
                url: webURL + 'api/playlist?id=' + d,
                type: 'GET',
                dataType: 'text',
                success: function(a) {
                    if (a['includes']('songSheetList') && a['includes']('defaultAlbum')) {
                        localStorage['setItem']('myhk_player_lrc', 'null');
                        localStorage['setItem']('myhk_player_ksc', 'null');
                        $('#myhkplayer .myhkgeci')['html']('<span class="geci"><i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临</span>');
                        $songFrom3 = $('#myhkplayer .myhkplayer .myhkgeci .geci');
                        if (typeof (myhkadTime) != 'undefined') {
                            clearInterval(myhkadTime)
                        }
                        ;cssReset = document['getElementById']('myhkcss');
                        cssReset['href'] = webURL + 'api/playercss?id=' + d;
                        eval(a);
                        if (e) {
                            eval(myhkalbum = e)
                        } else {
                            eval(myhkalbum = defaultAlbum)
                        }
                        ;if (f) {
                            eval(myhksong = f)
                        } else {
                            eval(myhksong = false)
                        }
                        getlist();
                        $player['removeClass']('showSongList');
                        $player['removeClass']('showAlbumList');
                        $('.myhkplayer .musicbottom .playprogress', $player)['show']();
                        $('.myhkplayer .musicbottom .volumecontrol', $player)['show']();
                        $('.myhkplayer .musicbottom .switch-ksclrc', $player)['show']();
                        $('.myhkplayer', $player)['height'](300);
                        $('.myhkplayer .myhkblur', $player)['height'](300);
                        $('.myhkplayer .myhkcover img', $player)['height'](300);
                        $('.myhkplayer .musicbottom', $player)['css']({
                            background: 'rgba(255,255,255,.8)'
                        });
                        $player['addClass']('myhkshow')
                    } else {
                        myhkTips['show']('播放器：歌单数据异常!')
                    }
                },
                error: function(a, b, c) {
                    myhkTips['show']('播放器：歌单数据获取失败!')
                }
            })
        }
        function myhklist(a, b, c) {
            if (a['includes']('songSheetList') && a['includes']('defaultAlbum')) {
                localStorage['setItem']('myhk_player_lrc', 'null');
                localStorage['setItem']('myhk_player_ksc', 'null');
                $('#myhkplayer .myhkgeci')['html']('<span class="geci"><i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临</span>');
                $songFrom3 = $('#myhkplayer .myhkplayer .myhkgeci .geci');
                if (typeof (myhkadTime) != 'undefined') {
                    clearInterval(myhkadTime)
                }
                ;eval(a);
                if (b) {
                    eval(myhkalbum = b)
                } else {
                    eval(myhkalbum = defaultAlbum)
                }
                ;if (c) {
                    eval(myhksong = c)
                } else {
                    eval(myhksong = false)
                }
                getlist();
                $player['removeClass']('showSongList');
                $player['removeClass']('showAlbumList');
                $('.myhkplayer .musicbottom .playprogress', $player)['show']();
                $('.myhkplayer .musicbottom .volumecontrol', $player)['show']();
                $('.myhkplayer .musicbottom .switch-ksclrc', $player)['show']();
                $('.myhkplayer', $player)['height'](300);
                $('.myhkplayer .myhkblur', $player)['height'](300);
                $('.myhkplayer .myhkcover img', $player)['height'](300);
                $('.myhkplayer .musicbottom', $player)['css']({
                    background: 'rgba(255,255,255,.8)'
                });
                $player['addClass']('myhkshow')
            } else {
                myhkTips['show']('播放器：歌单数据异常!')
            }
        }
    }
)(jQuery);
