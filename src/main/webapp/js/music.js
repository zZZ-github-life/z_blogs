if ("undefined" !== typeof myhkplayer )
    throw Error("\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u52a0\u8f7d\uff0c\u7981\u6b62\u91cd\u590d\u6dfb\u52a0\uff01");
if ("undefined" === typeof jQuery)
    throw console.log("\n %c \u97f3\u4e50\u64ad\u653e\u5668\u63d0\u793a\uff1a %c \u7f51\u7ad9\u6ca1\u6709\u52a0\u8f7djQuery\uff01\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"),
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
        var _0xef73 = ["m", "attr", "#myhk", "undefined", "skin", "", "&skin=", "lr", "&lr=", "op", "au", "sg",
            "myhk_player_load", "getItem", "myhk_player_feed", "true", "getTime", "userAgent", "test", "//myhkw", "indexOf",
            "href", "location", "hide", "#myhkplayer", "\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u7981\u6b62\u5728\u79fb\u52a8\u7aef\u52a0\u8f7d\uff01",
            "\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u5728\u5176\u4ed6\u9875\u9762\u52a0\u8f7d\uff01", "myhkw.cn", "player/js/player.js",
            "replace", "src", "https://myhkw.cn/", "key",
            "\x0A %c \u672c\u7ad9\u81ea\u8c6a\u7684\u91c7\u7528\u97f3\u4e50\u64ad\u653e\u5668V.20221020 - ",
            "\uff0c\u63a7\u5236\u9762\u677f\uff1a %c https://myhkw.cn\x0A", "color: #fadfa3; background: #030307; padding:5px 0;",
            "background: #fadfa3; padding:5px 0;", "log", "myhkw.com", "pirated-website",
            "\x0A %c \u672c\u7ad9\u5351\u9119\u7684\u76d7\u7248\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u6b63\u7248\u5730\u5740\uff1ahttps://myhkw.cn\x0A",
            "color: #ffff00; background: #030307; padding:5px 0;", "setItem", "<link id=\"myhkcss\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"", "api/playercss?id=", "\">", "append", "head", "<div id=\"myhkplayer\" style=\"display:none\">\x0A", "    <div class=\"myhkplayer\">\x0A", "        <div class=\"myhkblur-img\">\x0A", "            <img src=\"", "static/images/default.jpg\" class=\"myhkblur\" style=\"top: 0px; display: inline;\">\x0A", "        </div>\x0A", "        <div class=\"myhkinfo\">\x0A", "            <div class=\"songstyle\"><i class=\"myhkfont myhkicon-music\"></i> <div class=\"myhkname\"><span class=\"myhksong\"></span></div></div>\x0A", "            <div class=\"timestyle\"><i class=\"myhkfont myhkicon-clockCircle\"></i> <span class=\"myhktime\">00:00 / 00:00</span></div>\x0A", "            <div class=\"artiststyle\"><i class=\"myhkfont myhkicon-user\"></i> <span class=\"myhkartist\"></span><span class=\"myhkmoshi\"><i\x0A", "                    class=\"myhkfont myhkicon-suijibofang\"></i> \u968f\u673a\u64ad\u653e</span></div>\x0A", "            <div class=\"artiststyle\"><i class=\"myhkfont myhkicon-musicAlbum\"></i>\x0A", "                <span class=\"myhkalbum\"></span>\x0A", "                <span class=\"myhkgeci\"><span class=\"geci\"></span></span>\x0A", "            </div>\x0A", "        <div class=\"myhkcontrol\">\x0A", "            <i class=\"myhkaprev myhkfont myhkicon-first\"></i>\x0A", "            <i class=\"myhkprev myhkfont myhkicon-backward\"></i>\x0A",
            "            <div class=\"myhkstatus\">\x0A", "                <b>\x0A",
            "                    <i class=\"myhkplay myhkfont myhkicon-playCircle\"></i>\x0A",
            "                    <i class=\"myhkpause myhkfont myhkicon-pauseCircle\"></i>\x0A", "                </b>\x0A", "                <div id=\"pdyf1\" class=\"myhknote\">\x0A", "                    <i class=\"myhkfont myhkicon-music\" aria-hidden=\"true\"></i>\x0A", "                </div>\x0A", "                <div id=\"pdyf2\" class=\"myhknote\">\x0A", "                <div id=\"pdyf3\" class=\"myhknote\">\x0A", "            <i class=\"myhknext myhkfont myhkicon-forward\"></i>\x0A", "            <i class=\"myhkanext myhkfont myhkicon-last\"></i>\x0A", "\x09\x09<div class=\"musicbottom\">\x0A", "\x09\x09\x09<div class=\"volumecontrol\">\x0A", "\x09\x09        <div class=\"volume myhkfont myhkicon-volumeMiddle\"></div>\x0A", "\x09\x09        \x09<div class=\"volumeprogress\">\x0A", "\x09\x09                    <div class=\"progressbg\">\x0A", "\x09\x09                        <div class=\"progressbg1\" style=\"height: 19px;\"></div>\x0A", "\x09\x09                        <div class=\"ts\" style=\"top: 81px;\"></div>\x0A", "\x09\x09                    </div>\x0A", "\x09\x09                </div>\x0A", "\x09\x09        </div>\x0A", "\x09\x09        <div class=\"playprogress\">\x0A", "\x09\x09            <div class=\"progressbg\">\x0A", "\x09\x09                <div class=\"progressbg1\"></div>\x0A", "\x09\x09                <div class=\"progressbg2\"></div>\x0A", "\x09\x09                <div class=\"ts\"></div>\x0A", "\x09\x09            </div>\x0A", "            <div class=\"switch-playlist\">\x0A", "                <i class=\"myhkfont myhkicon-list\"></i>\x0A", "            <div class=\"qhms\">\x0A", "                <i class=\"myhkfont myhkicon-suijibofang\"></i>\x0A", "            <div class=\"switch-ksclrc\">\x0A", "                <i class=\"myhkfont myhkicon-anniu_kaiqi\"></i>\x0A", "        <div class=\"myhkcover\"></div>\x0A", "    </div>\x0A", "    <div class=\"myhkplaylist\">\x0A", "        <div class=\"myhkplaylist-bd\">\x0A", "            <div class=\"album-list\">\x0A", "                <div class=\"musicheader\">请欣赏音乐吧~</div>\x0A", "                <div class=\"myhklist\"></div>\x0A", "            <div class=\"song-list\">\x0A", "                <div class=\"musicheader\"><i class=\"myhkfont myhkicon-arrow-right-bold\"></i><span></span></div>\x0A", "                <div class=\"myhklist\">\x0A", "                    <ul></ul>\x0A", "    <div class=\"switch-player\">\x0A", "        <i class=\"myhkfont myhkicon-arrow-right-bold\"></i>\x0A", "</div>\x0A", "<div id=\"myhkTips\"></div>\x0A", "<div id=\"myhkKsc\"></div>\x0A", "<div id=\"myhkLrc\"></div>", "body", "#myhkTips", "#myhkLrc", "#myhkKsc", ".switch-player", ".myhksong", ".myhkcover", ".myhktime", ".song-list .myhklist", ".album-list", ".myhkplayer .myhkartist", ".myhkplayer .myhkalbum", ".myhkplayer .myhkmoshi", ".myhkplayer .myhkgeci .geci", ".myhkplayer .switch-ksclrc", "48939749", "\u5f00\u542f", "myhknow", "0,0,0", "255,255,255", "myhk_player_lrc", "null", "myhk_player_ksc", "myhk_player_time", "myhk_player_times", "myhk_player_album", "myhk_player_song", "myhk_player_songid", "currentTime", " / ", "duration", "text", "<a style=\"color:#f00\">\u521d\u59cb\u5316\u6b4c\u5355</a>", "html", "<a style=\"color:#f00\"></a>", "<a style=\"color:#f00\">\u97f3\u4e50\u64ad\u653e\u5668</a>", "<i class=\"myhkfont myhkicon-mapMarker\"></i> \u6b22\u8fce\u5149\u4e34", "playing", "addClass", "play", "lrc", "myhkshow", "show", "ksc", "showPlayer", "removeClass", "\u8fde\u7eed\u64ad\u653e\u5931\u8d25\u8d85\u8fc73\u6b21\uff01\u5df2\u505c\u6b62\u64ad\u653e\uff01", "songNames", " - \u8d44\u6e90\u83b7\u53d6\u5931\u8d25\uff01\u5c1d\u8bd5\u83b7\u53d6\u4e0b\u4e00\u9996...", "\u64ad\u653e\u5931\u8d25 ", " \u6b21\uff01", "coverplay", "myhk_player", "no", "next", "paused", "load", "\u7f13\u51b2\u4e2d...", "volume", "myhkicon-volumeLow myhkicon-volumeMiddle myhkicon-volumeHigh", "myhkicon-volumeCross", ".myhkplayer .musicbottom .volume", "myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeHigh", "myhkicon-volumeMiddle", "myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeMiddle", "myhkicon-volumeHigh", "myhkicon-volumeHigh myhkicon-volumeCross myhkicon-volumeMiddle", "myhkicon-volumeLow", "myhk_player_qq", "myhk_player_version", "songTypes", "songIds", "wy", "\u7f51\u6613\u97f3\u4e50", "kg", "\u9177\u72d7\u97f3\u4e50", "qq", "QQ\u97f3\u4e50", "mg", "\u54aa\u5495\u97f3\u4e50", "kw", "\u9177\u6211\u97f3\u4e50", "qi", "\u5343\u5343\u97f3\u4e50", "local", "\u81ea\u5b9a\u4e49\u97f3\u4e50", "getInfos", "length", "random", "showSongList", "buffered", "start", "end", "%", "css", ".playprogress .progressbg .progressbg2", "left", "toFixed", ".playprogress .progressbg .ts", "width", ".playprogress .progressbg .progressbg1", "0", "00:00 / 00:00", "addEventListener", "pause", "ended", "nexts", "volumechange", "error", "seeking", "timeupdate", "toggleClass", "click", "parent", ".artist", "find", "siblings", "\u6682\u505c\u64ad\u653e > ", "eq", "li", "\u6682\u505c\u64ad\u653e - ", "myhk_player_auto", ".myhkpause", "\u5f53\u524d\u64ad\u653e > ", "yes", ".myhkplay", "prev", ".myhkprev", ".myhknext", "aprev", ".myhkaprev", "anext", ".myhkanext", "\u4e13\u8f91\u5faa\u73af", "<i class = \"random myhkfont myhkicon-shunxubofang\"></i>", "<i class=\"myhkfont myhkicon-shunxubofang\"></i> \u4e13\u8f91\u5faa\u73af", "\u968f\u673a\u64ad\u653e", "<i class = \"random myhkfont myhkicon-suijibofang\"></i>", "<i class=\"myhkfont myhkicon-suijibofang\"></i> \u968f\u673a\u64ad\u653e", "\u5355\u66f2\u5faa\u73af", "<i class = \"random myhkfont myhkicon-danquxunhuan\"></i>", "<i class=\"myhkfont myhkicon-danquxunhuan\"></i> \u5355\u66f2\u5faa\u73af", ".qhms", ".myhkloop", "random_play", ".myhkrandom", "\u987a\u5e8f\u64ad\u653e", "<i class=\"myhkfont myhkicon-shunxubofang\"></i> \u987a\u5e8f\u64ad\u653e", "false", ".volumeprogress .progressbg .ts", ".volumeprogress .progressbg", "top", "84px", "height", ".volumeprogress .progressbg .progressbg1", "myhk_player_volume", "\u97f3\u91cf\uff1a", ".playprogress .progressbg", "pageX", "offset", "showAlbumList", "#myhkplayer .myhkplayer", "#myhkplayer .myhkplaylist", ".myhkplayer .musicbottom .playprogress", ".myhkplayer .musicbottom .volumecontrol", ".myhkplayer", ".myhkplayer .myhkblur", ".myhkplayer .myhkcover img", "rgba(255,255,255,.7)", ".myhkplayer .musicbottom", "rgba(255,255,255,.8)", ".switch-playlist", "mCustomScrollbar", ".song-list .musicheader,.song-list .myhkicon-arrow-right-bold", "hidePlayer", "hasClass", "<i class=\"myhkfont myhkicon-mapMarker\"></i> \u6b4c\u8bcd\u5b9a\u4f4d", "<i class=\"myhkfont myhkicon-successCircle\"></i> \u6b4c\u8bcd\u5f00\u542f", "\u5f00\u542f\u6b4c\u8bcd\u663e\u793a", "<i class=\"myhkfont myhkicon-anniu_kaiqi\"></i>", "<i class=\"myhkfont myhkicon-errorCircle\"></i> \u6b4c\u8bcd\u5173\u95ed", "\u6b4c\u8bcd\u663e\u793a\u5df2\u5173\u95ed", "\u5173\u95ed", "<i class=\"myhkfont myhkicon-anniu_guanbi\"></i>", ".switch-ksclrc", "playList", ".musicheader", "cssText", "display:block !important;", "<a style=\"display: unset!important\" href=\"https://myhkw.cn\" title=\"\u70b9\u51fb\u514d\u8d39\u7533\u8bf7\u97f3\u4e50\u64ad\u653e\u5668\" target=\"_blank\" style=\"color:#FFF\">\u672c\u7ad9\u97f3\u4e50\u64ad\u653e\u5668\u7531 MYHKW.CN \u514d\u8d39\u63d0\u4f9b</a>", "<li><span class=\"index\">", "</span><span class=\"artist\"></span>", " - ", "artistNames", "</li>", "<li><i class=\"myhkfont myhkicon-arrow-right-bold\"></i><span class=\"index\">", "</span><span class=\"artist\"></span>\u300a", "songSheetName", "\u300b - ", "author", "<ul>", "</ul>", ".myhklist", "\u6b63\u5728\u64ad\u653e - ", "#", "index", "song", "creat", "rgb(", ")", ".myhkplaylist .myhklist li", "getSongId", "getalbumId", "parseInt", "(", ".song-list .musicheader span", "ul", "data-album", "update", "scrollTo", "position", "li.myhknow", "<i class=\"myhkfont myhkicon-successCircle\"></i> \u6b4c\u8bcd", "<i class=\"myhkfont myhkicon-errorCircle\"></i> \u6b4c\u8bcd", "karaoke", "format", "<i class=\"myhkfont myhkicon-errorCircle\"></i> \u6682\u65e0\u6b4c\u8bcd", "[00", "&ksc=", "songId", "api/lyric?song=", "&type=", "&id=", "&sign=", "sign", "&play=", ".", "GET", "jsonp", "jsoncallback", "type", "txt", "ajax", "match", "\x0A", "split", "<li class=\"myhkLrc0\"></li>", "round", "string", "push", "sort", "<li class=\"myhkLrc", " ", " myhknow\">", " \">", "shift", ".myhkLrc", "class", "myhkLrc", "<span>", "</span>", "style", "removeAttr", "color:rgba(", ")!important", "smear", "rewind", "letterfx", "reset", "ticker", "data", "wave", "150ms", "each", "scrollTop", "b", ",", "\u7537\uff1a", "\u5973\uff1a", "g", "\u5408\uff1a", "t", "\uff0c", "<span class=\"blank\"><em dir=\"", "\"></em></span>", "<span><em dir=\"", "</em></span>", "<div id=\"myhkKsc", "\" class=\"myhkKsc", " line line", "\"><div class=\"bg\">", "</div><div class=\"lighter\">", "</div></div>", ".myhkKsc", "color", "rgba(", "line1", ".line1", ".line2", "showLetters", "line2", ".lighter span", "em", "dir", "100%", "animate", "myhk_player_list", "myhkw.cn/admin/#/", "api/playlist?id=", "&version=", "removeItem", "\u65b0\u6b4c\u5355\uff1a", "KB \u7f13\u5b58\u6210\u529f\uff01", "KB \u5df2\u8d85\u51fa\u6d4f\u89c8\u5668\u6700\u5927\u9650\u5236\uff01", "\u64ad\u653e\u5668\uff1a\u6210\u529f\u7f13\u5b58\u6700\u65b0\u6b4c\u5355\uff01", "\u64ad\u653e\u5668\uff1a\u65b0\u6b4c\u5355\u6570\u636e\u83b7\u53d6\u5931\u8d25\uff01", "\u64ad\u653e\u5668\uff1a\u6b4c\u5355\u7f13\u5b58\u8bfb\u53d6\u6210\u529f\uff01", "\u6b4c\u5355\uff1a", "\u539f\u6b4c\u5355\u6570\u636e\u83b7\u53d6\u5931\u8d25!", "beforeunload", "display", "contents", "\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u7981\u6b62\u975e\u4e2d\u56fdIP\u52a0\u8f7d\uff01", "none", "\u64ad\u653e\u5668\uff1a\u754c\u9762\u6570\u636e\u52a0\u8f7d\u6210\u529f\uff01", "<a style=\"display: unset!important;float: right\" href=\"https://myhkw.cn\" title=\"\u70b9\u51fb\u514d\u8d39\u7533\u8bf7\u97f3\u4e50\u64ad\u653e\u5668\" target=\"_blank\"><i class=\"myhkfont myhkicon-share\"></i> \u514d\u8d39\u7533\u8bf7</a>", ".myhkgeci", ".artiststyle", "display:unset !important;", "\u514d\u8d39\u7248\u64ad\u653e\u5668\u88ab\u7be1\u6539\uff0c\u5df2\u81ea\u52a8\u91cd\u8f7d\uff01", "a", "<a style=\"display: unset!important\" href=\"", "ad/", "adurl", "\" title=\"", "adtitle", "\" style=\"color:rgb(", ")\" target=\"_blank\"><i class=\"myhkfont myhkicon-megaphone\"></i> ", "</a>", "<a style=\"display: unset!important;float: right;color:rgb(", ")\" href=\"", "\" target=\"_blank\"><i class=\"myhkfont myhkicon-share\"></i> ", "adname", "100", "1", "0.", "0.5", ".myhkstatus .myhknote", "px", "\u64ad\u653e\u5668\uff1a\u4f18\u5148\u64ad\u653e\u4e13\u8f91\u5927\u4e8e\u603b\u6570\uff08", "\uff09\uff01", "\u64ad\u653e\u5668\uff1a\u64ad\u653e\u6570\u636e\u52a0\u8f7d\u6210\u529f\uff01", "\uff09\uff0c\u672a\u6307\u5b9a\u4f18\u5148\u64ad\u653e\u6b4c\u66f2\uff01", "\u64ad\u653e\u5668\uff1a\u5df2\u6307\u5b9a\u4f18\u5148\u64ad\u653e\u4e13\u8f91\uff08", "\uff09\uff0c\u5df2\u6307\u5b9a\u4f18\u5148\u64ad\u653e\u6b4c\u66f2\uff08", "album", "...", "charCodeAt", "charAt", "locations", "api/url?song=", "albumNames", "api/pic?song=", "&pic=", "albumCovers", "changing", "onload", "api/color", "script", "onerror", "https://q1.qlogo.cn/g?b=qq&nk=", "&s=140", " - \u4e13\u8f91\u56fe\u7247\u83b7\u53d6\u5931\u8d25\uff01", ".myhkblur", "document", "\u6b4c\u8bcd\u81ea\u52a8\u9690\u85cf", "scroll", "WeixinJSBridgeReady", "touchstart", "removeEventListener", "\u6d4f\u89c8\u5668\u9650\u5236\u97f3\u9891\u81ea\u52a8\u64ad\u653e\uff0c\u9700\u8981\u70b9\u51fb\u64ad\u653e\uff01", "catch", "\u5f00\u59cb\u4ece", "\u64ad\u653e\uff1a", "-", " \u65f6\u957f\uff1a", "floor", ":", "slice", "then", "\u5f53\u524d\u64ad\u653e&nbsp;>&nbsp;", ".myhklist ul", "[data-album=", "]", ",.8)", ",.3)", ",.6)", ".myhkinfo,.myhkcontrol,.myhkstatus .myhknote,.myhkgeci a,.myhkplaylist .myhklist li,.musicheader a,.myhkplaylist,.musicheader", "border", "4px rgb(", ") solid", ".myhkplayer .myhkcover", "background-image", "linear-gradient(90deg, rgb(", ") 50%, transparent 50%, transparent), linear-gradient(90deg, rgb(", ") 50%, rgb(", ".myhkplayer .myhkcontrol .myhkstatus", ",.5)", ".myhkplayer .myhkcontrol .myhkstatus b", "r", "Notification", "mozNotification", "webkitNotification", "permission", "granted", "close", "onclick", "onshow", "onclose", "requestPermission", "00:", "00:00", "00", "substring", "lettering", "done", "cycleCount", "cycleCurrent", "original", "letters", "span", "letterCount", "letterCurrent", "chars", "aria-label", "charsCount", "data-orig", "substr", "getChar", "prototype", "loop", "#000", "opacity", "0.4", "color:rgb(", "keyCode", "keydown", "ready", "event", "target", "srcElement", "myhkplayer", "getElementById", "contains", "songSheetList", "includes", "defaultAlbum", "<span class=\"geci\"><i class=\"myhkfont myhkicon-mapMarker\"></i> \u6b22\u8fce\u5149\u4e34</span>", "#myhkplayer .myhkgeci", "#myhkplayer .myhkplayer .myhkgeci .geci", "myhkcss", "\u64ad\u653e\u5668\uff1a\u6210\u529f\u52a0\u8f7d\u65b0\u6b4c\u5355\uff01", ".myhkplayer .musicbottom .switch-ksclrc", "\u64ad\u653e\u5668\uff1a\u6b4c\u5355\u6570\u636e\u5f02\u5e38!", "\u64ad\u653e\u5668\uff1a\u6b4c\u5355\u6570\u636e\u83b7\u53d6\u5931\u8d25!"];

        // for (let i = 0; i < _0xef73.length; i++) {
        //     if (_0xef73[i] == "myhk_player_auto"){
        //         console.log(i)
        //     }
        // }

        var mobile = $(_0xef73[2])[_0xef73[1]](_0xef73[0]);
        if (typeof mobile === _0xef73[3]) {
            mobiles = 0
        } else {
            mobiles = mobile
        }
        ;var skin = $(_0xef73[2])[_0xef73[1]](_0xef73[4]);
        if (typeof skin === _0xef73[3]) {
            skins = _0xef73[5]
        } else {
            skins = _0xef73[6] + skin
        }
        ;var lr = $(_0xef73[2])[_0xef73[1]](_0xef73[7]);
        if (typeof lr === _0xef73[3]) {
            lr = _0xef73[5]
        } else {
            lr = _0xef73[8] + lr
        }
        ;var op = $(_0xef73[2])[_0xef73[1]](_0xef73[9]);
        if (typeof op === _0xef73[3]) {
            op = 1
        } else {
            op = op
        }
        ;var au = $(_0xef73[2])[_0xef73[1]](_0xef73[10]);
        if (typeof au === _0xef73[3]) {
            au = 1
        } else {
            au = au
        }
        ;var sg = $(_0xef73[2])[_0xef73[1]](_0xef73[11]);
        if (typeof sg === _0xef73[3]) {
            sg = 1
        } else {
            sg = sg
        }
        ;var myhkload = localStorage[_0xef73[13]](_0xef73[12]);
        var myhkfeed = localStorage[_0xef73[13]](_0xef73[14]);
        myhkload = typeof myhkload === _0xef73[3] ? false : myhkload === _0xef73[15];
        myhkload = myhkload && typeof myhkfeed !== _0xef73[3] && new Date()[_0xef73[16]]() - parseInt(myhkfeed) < 1000;
        if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i[_0xef73[18]](navigator[_0xef73[17]]) && mobiles < 1 && window[_0xef73[22]][_0xef73[21]][_0xef73[20]](_0xef73[19]) < 0) {
            $(_0xef73[24])[_0xef73[23]]();
            throw new Error(_0xef73[25])
        } else {
            if (myhkload && window[_0xef73[22]][_0xef73[21]][_0xef73[20]](_0xef73[19]) < 0) {
                $(_0xef73[24])[_0xef73[23]]();
               // throw new Error('音乐播放器已在其他页面加载');
            } else {
                var songSheetList;
                var webURL ='https://myhkw.cn/';
                var keyId  ='1667214511113';
                localStorage[_0xef73[42]](_0xef73[12], _0xef73[15]);
                $(_0xef73[117])[_0xef73[46]](_0xef73[48] + _0xef73[49] + _0xef73[50] + _0xef73[51] + webURL + _0xef73[52] + _0xef73[53] + _0xef73[54] + _0xef73[55] + _0xef73[56] + _0xef73[57] + _0xef73[58] + _0xef73[59] + _0xef73[60] + _0xef73[61] + _0xef73[62] + _0xef73[53] + _0xef73[63] + _0xef73[64] + _0xef73[65] + _0xef73[66] + _0xef73[67] + _0xef73[68] + _0xef73[69] + _0xef73[70] + _0xef73[71] + _0xef73[72] + _0xef73[73] + _0xef73[74] + _0xef73[72] + _0xef73[73] + _0xef73[75] + _0xef73[72] + _0xef73[73] + _0xef73[62] + _0xef73[76] + _0xef73[77] + _0xef73[53] + _0xef73[78] + _0xef73[79] + _0xef73[80] + _0xef73[81] + _0xef73[82] + _0xef73[83] + _0xef73[84] + _0xef73[85] + _0xef73[86] + _0xef73[87] + _0xef73[88] + _0xef73[89] + _0xef73[90] + _0xef73[91] + _0xef73[92] + _0xef73[93] + _0xef73[87] + _0xef73[94] + _0xef73[95] + _0xef73[62] + _0xef73[96] + _0xef73[97] + _0xef73[62] + _0xef73[98] + _0xef73[99] + _0xef73[62] + _0xef73[53] + _0xef73[100] + _0xef73[101] + _0xef73[102] + _0xef73[103] + _0xef73[104] + _0xef73[105] + _0xef73[106] + _0xef73[62] + _0xef73[107] + _0xef73[108] + _0xef73[109] + _0xef73[110] + _0xef73[73] + _0xef73[62] + _0xef73[53] + _0xef73[101] + _0xef73[111] + _0xef73[112] + _0xef73[101] + _0xef73[113] + _0xef73[114] + _0xef73[115] + _0xef73[116]);
                var audio = new Audio()
                    , $player = $(_0xef73[24])
                    , $tips = $(_0xef73[118])
                    , $lk = $(_0xef73[119])
                    , $kk = $(_0xef73[120])
                    , $switchPlayer = $(_0xef73[121], $player)
                    , $songName = $(_0xef73[122], $player)
                    , $cover = $(_0xef73[123], $player)
                    , $songTime = $(_0xef73[124], $player)
                    , $songList = $(_0xef73[125], $player)
                    , $albumList = $(_0xef73[126], $player)
                    , $songFrom = $(_0xef73[127], $player)
                    , $songFrom1 = $(_0xef73[128], $player)
                    , $songFrom2 = $(_0xef73[129], $player)
                    , $songFrom3 = $(_0xef73[130], $player)
                    , $songFrom4 = $(_0xef73[131], $player)
                    , myhkqq = _0xef73[132]
                    , songFrom33 = _0xef73[133]
                    , songFrom55 = _0xef73[5]
                    , myhknow = _0xef73[134]
                    , ycgeci = true
                    , myhkfirst = 1;
                errCount = 0;
                randcolor = 0;
                letterfx = 0;
                myhkcolor = _0xef73[135];
                myhkfcolor = _0xef73[136];
                localStorage[_0xef73[42]](_0xef73[137], _0xef73[138]);
                localStorage[_0xef73[42]](_0xef73[139], _0xef73[138]);
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
                myhkplaytime = localStorage[_0xef73[13]](_0xef73[140]) ? localStorage[_0xef73[13]](_0xef73[140]) : false;
                myhkplaying = localStorage[_0xef73[13]](_0xef73[141]) ? localStorage[_0xef73[13]](_0xef73[141]) : false;
                playingalbumId = localStorage[_0xef73[13]](_0xef73[142]) ? localStorage[_0xef73[13]](_0xef73[142]) : false;
                playingsongId = localStorage[_0xef73[13]](_0xef73[143]) ? localStorage[_0xef73[13]](_0xef73[143]) : false;
                myhk_player_songid = localStorage[_0xef73[13]](_0xef73[144]) ? localStorage[_0xef73[13]](_0xef73[144]) : false;
                function myhkCicle() {
                    $songTime[_0xef73[148]](formatSecond(audio[_0xef73[145]]) + _0xef73[146] + formatSecond(audio[_0xef73[147]]))
                }
                var cicleTime = null;
                var myhkadTime = null;
                $songName[_0xef73[150]](_0xef73[149]);
                $songFrom[_0xef73[150]](_0xef73[151]);
                $songFrom1[_0xef73[150]](_0xef73[152]);
                $songFrom3[_0xef73[150]](_0xef73[153]);
                var myhkMedia = {
                    play: function() {
                        hasgeci = true;
                        $player[_0xef73[155]](_0xef73[154]);
                        currentFrameId = GetCurrentFrame();
                        cicleTime = setInterval(myhkCicle, 800);
                        if (hasLrc) {
                            lrcTime = setInterval(myhkLrc[_0xef73[157]][_0xef73[156]], 500);
                            if (!gcdw) {
                                $(_0xef73[119])[_0xef73[155]](_0xef73[158])
                            }
                            ;if (zdyc) {
                                $songFrom4[_0xef73[159]]()
                            }
                        }
                        ;if (hasKsc) {
                            kscTime = setInterval(myhkLrc[_0xef73[160]][_0xef73[156]], 80);
                            if (!gcdw) {
                                $(_0xef73[120])[_0xef73[155]](_0xef73[161])
                            }
                            ;if (zdyc) {
                                $songFrom4[_0xef73[159]]()
                            }
                        }
                    },
                    pause: function() {
                        clearInterval(cicleTime);
                        $player[_0xef73[162]](_0xef73[154]);
                        $songFrom4[_0xef73[23]]();
                        if (hasLrc) {
                            myhkLrc[_0xef73[157]][_0xef73[23]]()
                        }
                        ;if (hasKsc) {
                            myhkLrc[_0xef73[160]][_0xef73[23]]()
                        }
                    },
                    error: function() {
                        clearInterval(cicleTime);
                        $player[_0xef73[162]](_0xef73[154]);
                        if (errCount > 2) {
                            myhkTips[_0xef73[159]](_0xef73[163]);
                            errCount = 0;
                            errjc = true
                        } else {
                            errCount++;
                            errjc = false;
                            myhkTips[_0xef73[159]](songSheetList[albumId][_0xef73[164]][songId] + _0xef73[165]);

                            setTimeout(function() {
                                $cover[_0xef73[162]](_0xef73[168]);
                                localStorage[_0xef73[42]](_0xef73[169], _0xef73[170]);
                                hasgeci = true;
                                auto = _0xef73[5];
                                myhkMedia[_0xef73[171]]()
                            }, 1500)
                        }
                    },
                    seeking: function() {
                        if (audio[_0xef73[172]] === true) {
                            audio[_0xef73[156]]()
                        }
                        $player[_0xef73[155]](_0xef73[154]);
                        $cover[_0xef73[155]](_0xef73[168]);
                        myhkLrc[_0xef73[173]]();
                        myhkTips[_0xef73[159]](_0xef73[174])
                    },
                    seeked: function() {
                        currentFrameId = GetCurrentFrame()
                    },
                    volumechange: function() {
                        var a = audio[_0xef73[175]];
                        0 == a ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[177])[_0xef73[162]](_0xef73[176]) : a >= 0.4 && a <= 0.7 ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[180])[_0xef73[162]](_0xef73[179]) : a >= 0.7 && a <= 1 ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[182])[_0xef73[162]](_0xef73[181]) : $(_0xef73[178], $player)[_0xef73[155]](_0xef73[184])[_0xef73[162]](_0xef73[183])
                    },
                    getInfos: function(a, b) {
                        currentFrameId = 0;
                        $cover[_0xef73[162]](_0xef73[168]);
                        songId = a;
                        albumId = b;
                        allmusic();
                        localStorage[_0xef73[42]](_0xef73[185], myhkqq);
                        localStorage[_0xef73[42]](_0xef73[186], myhkversion);
                        localStorage[_0xef73[42]](_0xef73[142], albumId + 1);
                        localStorage[_0xef73[42]](_0xef73[143], songId + 1);
                        localStorage[_0xef73[42]](_0xef73[144], songSheetList[albumId][_0xef73[187]][songId] + songSheetList[albumId][_0xef73[188]][songId]);
                        if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[189]) {
                            songFrom55 = _0xef73[190];
                            musictype = _0xef73[189];
                            netmusic()
                        } else {
                            if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[191]) {
                                songFrom55 = _0xef73[192];
                                musictype = _0xef73[191];
                                netmusic()
                            } else {
                                if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[193]) {
                                    songFrom55 = _0xef73[194];
                                    musictype = _0xef73[193];
                                    netmusic()
                                } else {
                                    if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[195]) {
                                        songFrom55 = _0xef73[196];
                                        musictype = _0xef73[195];
                                        netmusic()
                                    } else {
                                        if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[197]) {
                                            songFrom55 = _0xef73[198];
                                            musictype = _0xef73[197];
                                            netmusic()
                                        } else {
                                            if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[199]) {
                                                songFrom55 = _0xef73[200];
                                                musictype = _0xef73[199];
                                                netmusic()
                                            } else {
                                                if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[201]) {
                                                    songFrom55 = _0xef73[202];
                                                    musictype = _0xef73[201];
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
                            myhkMedia[_0xef73[203]](songId, albumId)
                        } else {
                            myhkMedia[_0xef73[171]]()
                        }
                    },
                    next: function() {
                        myhkpass = false;
                        songTotal = songSheetList[albumId][_0xef73[188]][_0xef73[204]];
                        if (myhkrandom) {
                            rid = parseInt(Math[_0xef73[205]]() * songTotal);
                            if (songTotal > 1) {
                                if (rid != songId) {
                                    myhkMedia[_0xef73[203]](rid, albumId)
                                } else {
                                    if (rid + 1 >= songTotal) {
                                        myhkMedia[_0xef73[203]](0, albumId)
                                    } else {
                                        myhkMedia[_0xef73[203]](rid + 1, albumId)
                                    }
                                }
                            } else {
                                myhkMedia[_0xef73[203]](0, albumId)
                            }
                        } else {
                            if (parseInt(songId) + 1 >= songTotal) {
                                myhkMedia[_0xef73[203]](0, albumId)
                            } else {
                                myhkMedia[_0xef73[203]](parseInt(songId) + 1, albumId)
                            }
                        }
                        ;setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    prev: function() {
                        myhkpass = false;
                        songTotal = songSheetList[albumId][_0xef73[188]][_0xef73[204]];
                        if (myhkrandom) {
                            rid = parseInt(Math[_0xef73[205]]() * songTotal);
                            if (songTotal > 1) {
                                if (rid != songId) {
                                    myhkMedia[_0xef73[203]](rid, albumId)
                                } else {
                                    if (rid + 1 >= songTotal) {
                                        myhkMedia[_0xef73[203]](0, albumId)
                                    } else {
                                        myhkMedia[_0xef73[203]](rid + 1, albumId)
                                    }
                                }
                            } else {
                                myhkMedia[_0xef73[203]](0, albumId)
                            }
                        } else {
                            if (parseInt(songId) - 1 < 0) {
                                myhkMedia[_0xef73[203]](songTotal - 1, albumId)
                            } else {
                                myhkMedia[_0xef73[203]](parseInt(songId) - 1, albumId)
                            }
                        }
                        ;setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    anext: function() {
                        myhkpass = false;
                        albumTotal = songSheetList[_0xef73[204]];
                        if (myhkrandom) {
                            rid = parseInt(Math[_0xef73[205]]() * albumTotal);
                            if (albumTotal > 1) {
                                if (rid != albumId) {
                                    songTotals = songSheetList[rid][_0xef73[188]][_0xef73[204]];
                                    rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                    myhkMedia[_0xef73[203]](rids - 1, rid)
                                } else {
                                    if (rid + 1 >= albumTotal) {
                                        songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                        rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                        myhkMedia[_0xef73[203]](rids - 1, 0)
                                    } else {
                                        songTotals = songSheetList[rid + 1][_0xef73[188]][_0xef73[204]];
                                        rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                        myhkMedia[_0xef73[203]](rids - 1, rid + 1)
                                    }
                                }
                            } else {
                                songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                myhkMedia[_0xef73[203]](rids, 0)
                            }
                        } else {
                            if (albumTotal > 1) {
                                if (parseInt(albumId) + 1 >= albumTotal) {
                                    myhkMedia[_0xef73[203]](0, 0)
                                } else {
                                    myhkMedia[_0xef73[203]](0, parseInt(albumId) + 1)
                                }
                            } else {
                                songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                myhkMedia[_0xef73[203]](rids, 0)
                            }
                        }
                        ;$player[_0xef73[162]](_0xef73[206]);
                        setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    aprev: function() {
                        myhkpass = false;
                        albumTotal = songSheetList[_0xef73[204]];
                        if (myhkrandom) {
                            rid = parseInt(Math[_0xef73[205]]() * albumTotal);
                            if (albumTotal > 1) {
                                if (rid != albumId) {
                                    songTotals = songSheetList[rid][_0xef73[188]][_0xef73[204]];
                                    rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                    myhkMedia[_0xef73[203]](rids - 1, rid)
                                } else {
                                    if (rid + 1 >= albumTotal) {
                                        songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                        rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                        myhkMedia[_0xef73[203]](rids - 1, 0)
                                    } else {
                                        songTotals = songSheetList[rid + 1][_0xef73[188]][_0xef73[204]];
                                        rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                        myhkMedia[_0xef73[203]](rids - 1, rid + 1)
                                    }
                                }
                            } else {
                                songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                myhkMedia[_0xef73[203]](rids, 0)
                            }
                        } else {
                            if (albumTotal > 1) {
                                if (parseInt(albumId) - 1 < 0) {
                                    myhkMedia[_0xef73[203]](0, albumTotal - 1)
                                } else {
                                    myhkMedia[_0xef73[203]](0, parseInt(albumId) - 1)
                                }
                            } else {
                                songTotals = songSheetList[0][_0xef73[188]][_0xef73[204]];
                                rids = parseInt(Math[_0xef73[205]]() * songTotals);
                                myhkMedia[_0xef73[203]](rids, 0)
                            }
                        }
                        ;$player[_0xef73[162]](_0xef73[206]);
                        setTimeout(function() {
                            myhkpass = true
                        }, 1000)
                    },
                    timeupdate: function() {
                        if (audio[_0xef73[207]][_0xef73[204]]) {
                            if (!errjc) {
                                errCount = 0;
                                errjc = true
                            }
                            ;var a = 100 * audio[_0xef73[207]][_0xef73[208]](currentFrameId) / audio[_0xef73[147]]
                                , b = 100 * audio[_0xef73[207]][_0xef73[209]](currentFrameId) / audio[_0xef73[147]];
                            $(_0xef73[212], $player)[_0xef73[211]]({
                                left: a + _0xef73[210],
                                width: b - a + _0xef73[210]
                            })
                        }
                        ;if (audio[_0xef73[145]] > 0 && audio[_0xef73[147]] > 0) {
                            localStorage[_0xef73[42]](_0xef73[140], audio[_0xef73[145]]);
                            playisTsMoving || ($(_0xef73[215], $player)[_0xef73[211]](_0xef73[213], 100 * (audio[_0xef73[145]] / audio[_0xef73[147]])[_0xef73[214]](2) + _0xef73[210]),
                                $(_0xef73[217], $player)[_0xef73[211]](_0xef73[216], 100 * (audio[_0xef73[145]] / audio[_0xef73[147]])[_0xef73[214]](2) + _0xef73[210]),
                                $(_0xef73[124], $player)[_0xef73[148]](formatSecond(audio[_0xef73[145]]) + _0xef73[146] + formatSecond(audio[_0xef73[147]])))
                        } else {
                            $(_0xef73[215], $player)[_0xef73[211]](_0xef73[213], _0xef73[218]);
                            $(_0xef73[217], $player)[_0xef73[211]](_0xef73[216], _0xef73[218]);
                            $(_0xef73[212], $player)[_0xef73[211]]({
                                left: _0xef73[218],
                                width: _0xef73[218]
                            });
                            $(_0xef73[124], $player)[_0xef73[148]](_0xef73[219])
                        }
                    }
                };
                var myhkTipsTime = null;
                var myhkTips = {
                    show: function(a) {
                        clearTimeout(myhkTipsTime);
                        $(_0xef73[118])[_0xef73[148]](a)[_0xef73[155]](_0xef73[158]);
                        this[_0xef73[23]]()
                    },
                    hide: function() {
                        myhkTipsTime = setTimeout(function() {
                            $(_0xef73[118])[_0xef73[162]](_0xef73[158])
                        }, 3000)
                    }
                };
                audio[_0xef73[220]](_0xef73[156], myhkMedia[_0xef73[156]], false);
                audio[_0xef73[220]](_0xef73[221], myhkMedia[_0xef73[221]], false);
                audio[_0xef73[220]](_0xef73[222], myhkMedia[_0xef73[223]], false);
                audio[_0xef73[220]](_0xef73[154], myhkMedia[_0xef73[154]], false);
                audio[_0xef73[220]](_0xef73[224], myhkMedia[_0xef73[224]], false);
                audio[_0xef73[220]](_0xef73[225], myhkMedia[_0xef73[225]], false);
                audio[_0xef73[220]](_0xef73[226], myhkMedia[_0xef73[226]], false);
                audio[_0xef73[220]](_0xef73[227], myhkMedia[_0xef73[227]], !1);
                $switchPlayer[_0xef73[229]](function() {
                    $player[_0xef73[228]](_0xef73[158]);
                    autoswitch = true
                });
                $(_0xef73[239], $player)[_0xef73[229]](function() {
                    hasgeci = false;
                    var a = songSheetList[_0xef73[204]];
                    if (a == 1) {
                        $(_0xef73[236], $albumList)[_0xef73[235]](songId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[234])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]()
                    } else {
                        $(_0xef73[236], $albumList)[_0xef73[235]](albumId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[234])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]()
                    }
                    ;myhkTips[_0xef73[159]](_0xef73[237] + songSheetList[albumId][_0xef73[164]][songId]);
                    $cover[_0xef73[162]](_0xef73[168]);
                    audio[_0xef73[221]]();
                    localStorage[_0xef73[42]](_0xef73[238], _0xef73[170])
                });
                $(_0xef73[242], $player)[_0xef73[229]](function() {
                    hasgeci = true;
                    var a = songSheetList[_0xef73[204]];
                    if (a == 1) {
                        $(_0xef73[236], $albumList)[_0xef73[235]](songId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[240])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]()
                    } else {
                        $(_0xef73[236], $albumList)[_0xef73[235]](albumId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[240])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]()
                    }
                    ;startPlay();
                    localStorage[_0xef73[42]](_0xef73[238], _0xef73[241])
                });
                $(_0xef73[244], $player)[_0xef73[229]](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia[_0xef73[243]]();
                        localStorage[_0xef73[42]](_0xef73[238], _0xef73[241])
                    }
                });
                $(_0xef73[245], $player)[_0xef73[229]](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia[_0xef73[171]]();
                        localStorage[_0xef73[42]](_0xef73[238], _0xef73[241])
                    }
                });
                $(_0xef73[247], $player)[_0xef73[229]](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia[_0xef73[246]]();
                        localStorage[_0xef73[42]](_0xef73[238], _0xef73[241])
                    }
                });
                $(_0xef73[249], $player)[_0xef73[229]](function() {
                    if (myhkpass) {
                        hasgeci = true;
                        myhkMedia[_0xef73[248]]();
                        localStorage[_0xef73[42]](_0xef73[238], _0xef73[241])
                    }
                });
                $(_0xef73[259], $player)[_0xef73[229]](function() {
                    myhkrandom ? (myhkrandom = false,
                        myhkTips[_0xef73[159]](_0xef73[250]),
                        $(this)[_0xef73[150]](_0xef73[251]),
                        $songFrom2[_0xef73[150]](_0xef73[252])) : (myhkloop ? (myhkrandom = true,
                        myhkloop = false,
                        myhkTips[_0xef73[159]](_0xef73[253]),
                        $(this)[_0xef73[150]](_0xef73[254]),
                        $songFrom2[_0xef73[150]](_0xef73[255])) : (myhkrandom = false,
                        myhkloop = true,
                        myhkTips[_0xef73[159]](_0xef73[256]),
                        $(this)[_0xef73[150]](_0xef73[257]),
                        $songFrom2[_0xef73[150]](_0xef73[258])));
                    if (autoswitch) {
                        autoswitch = false;
                        setTimeout(function() {
                            autoswitch = true
                        }, 500)
                    }
                });
                $(_0xef73[262], $player)[_0xef73[229]](function() {
                    $(this)[_0xef73[155]](myhknow);
                    $(_0xef73[260], $player)[_0xef73[162]](myhknow);
                    myhkrandom = true;
                    myhkTips[_0xef73[159]](_0xef73[253]);
                    $songFrom2[_0xef73[150]](_0xef73[255]);
                    localStorage[_0xef73[42]](_0xef73[261], _0xef73[15])
                });
                $(_0xef73[260], $player)[_0xef73[229]](function() {
                    $(this)[_0xef73[155]](myhknow);
                    $(_0xef73[262], $player)[_0xef73[162]](myhknow);
                    myhkrandom = false;
                    myhkTips[_0xef73[159]](_0xef73[263]);
                    $songFrom2[_0xef73[150]](_0xef73[264]);
                    localStorage[_0xef73[42]](_0xef73[261], _0xef73[265])
                });
                var $Volumeprogress = $(_0xef73[266], $player);
                $Volumeprogress.Drag({
                    parentObj: $(_0xef73[267], $player),
                    lockY: !0,
                    callback: function(a, b, c, e, g) {
                        if (5 == arguments[_0xef73[204]]) {
                            visTsMoving = !0;
                            var d;
                            d = ((84 - c) / 84)[_0xef73[214]](2);
                            1 < Number(d) ? d = 1 : 0 > Number(d) && (d = 0,
                                $(a)[_0xef73[211]](_0xef73[268], _0xef73[269]));
                            $(_0xef73[271], $player)[_0xef73[270]](100 * d);
                            audio[_0xef73[175]] = d,
                                volume = d,
                                localStorage[_0xef73[42]](_0xef73[272], d);
                            setTimeout(function() {
                                myhkTips[_0xef73[159]](_0xef73[273] + parseInt(d * 100) + _0xef73[210])
                            }, 500)
                        } else {
                            visTsMoving = !1
                        }
                    }
                });
                var $playprogress = $(_0xef73[215], $player);
                $playprogress.Drag({
                    parentObj: $(_0xef73[274], $player),
                    lockX: !0,
                    callback: function(a, b, c, e, g) {
                        if (5 == arguments[_0xef73[204]]) {
                            playisTsMoving = !0;
                            var d = $(_0xef73[274], $player)[_0xef73[216]]()
                                , d = b / (d - $(a)[_0xef73[216]]())
                                , d = d[_0xef73[214]](2);
                            $(_0xef73[217], $player)[_0xef73[216]](b);
                            audio[_0xef73[145]] = audio[_0xef73[147]] * d
                        } else {
                            playisTsMoving = !1
                        }
                    }
                });
                $(_0xef73[274], $player)[_0xef73[229]](function(a) {
                    $(_0xef73[119])[_0xef73[162]](_0xef73[158]);
                    $(_0xef73[120])[_0xef73[162]](_0xef73[161]);
                    hasgeci = true;
                    playisTsMoving = !1;
                    a = a[_0xef73[275]] - $(this)[_0xef73[276]]()[_0xef73[213]];
                    var b = $(this)[_0xef73[216]]();
                    a = (a / b)[_0xef73[214]](2);
                    audio[_0xef73[145]] = audio[_0xef73[147]] * a
                });
                $(_0xef73[288])[_0xef73[229]](function() {
                    $player[_0xef73[228]](_0xef73[277]);
                    playerHeight = $(_0xef73[278])[_0xef73[270]]();
                    playlistHeight = $(_0xef73[279])[_0xef73[270]]();
                    if (playerHeight >= 300 && playlistHeight <= 200) {
                        $(_0xef73[280], $player)[_0xef73[23]]();
                        $(_0xef73[281], $player)[_0xef73[23]]();
                        $(_0xef73[282], $player)[_0xef73[270]](90);
                        $(_0xef73[283], $player)[_0xef73[270]](90);
                        $(_0xef73[284], $player)[_0xef73[270]](90);
                        $(_0xef73[286], $player)[_0xef73[211]]({
                            background: _0xef73[285]
                        });
                        $songFrom4[_0xef73[23]]()
                    } else {
                        if (playerHeight == 90 && playlistHeight >= 200) {
                            $(_0xef73[280], $player)[_0xef73[159]]();
                            $(_0xef73[281], $player)[_0xef73[159]]();
                            $(_0xef73[282], $player)[_0xef73[270]](300);
                            $(_0xef73[283], $player)[_0xef73[270]](300);
                            $(_0xef73[284], $player)[_0xef73[270]](300);
                            $(_0xef73[286], $player)[_0xef73[211]]({
                                background: _0xef73[287]
                            });
                            if (zdyc && (hasLrc || hasKsc)) {
                                $songFrom4[_0xef73[159]]()
                            }
                        }
                    }
                });
                $songList[_0xef73[289]]();
                $(_0xef73[290], $player)[_0xef73[229]](function() {
                    $player[_0xef73[162]](_0xef73[206])
                });
                $(_0xef73[301])[_0xef73[229]](function() {
                    $(_0xef73[119])[_0xef73[228]](_0xef73[23]);
                    $(_0xef73[120])[_0xef73[228]](_0xef73[291]);
                    if (!$(_0xef73[119])[_0xef73[292]](_0xef73[23]) || !$(_0xef73[120])[_0xef73[292]](_0xef73[291])) {
                        ycgeci = true;
                        if (hasLrc || hasKsc) {
                            if (gcdw) {
                                $songFrom3[_0xef73[150]](_0xef73[293])
                            } else {
                                $songFrom3[_0xef73[150]](_0xef73[294])
                            }
                        }
                        ;myhkTips[_0xef73[159]](_0xef73[295]);
                        songFrom33 = _0xef73[133];
                        $songFrom4[_0xef73[150]](_0xef73[296])
                    } else {
                        ycgeci = false;
                        if (hasLrc || hasKsc) {
                            $songFrom3[_0xef73[150]](_0xef73[297])
                        }
                        ;myhkTips[_0xef73[159]](_0xef73[298]);
                        songFrom33 = _0xef73[299];
                        $songFrom4[_0xef73[150]](_0xef73[300])
                    }
                    ;if (autoswitch) {
                        autoswitch = false;
                        setTimeout(function() {
                            autoswitch = true
                        }, 500)
                    }
                });
                myhkplayer[_0xef73[302]] = {
                    creat: {
                        album: function() {
                            var b = songSheetList[_0xef73[204]]
                                , albumList = _0xef73[5];
                            if (typeof myhkid === _0xef73[3]) {
                                $(_0xef73[303], $albumList)[_0xef73[150]](siteName)
                            } else {
                                $(_0xef73[303], $player)[_0xef73[211]](_0xef73[304], _0xef73[305]);
                                $(_0xef73[303], $albumList)[_0xef73[150]](_0xef73[306])
                            }
                            ;if (b == 1) {
                                for (var i = 0; i < songSheetList[0][_0xef73[188]][_0xef73[204]]; i++) {
                                    albumList += _0xef73[307] + (i + 1) + _0xef73[308] + songSheetList[0][_0xef73[164]][i] + _0xef73[309] + songSheetList[0][_0xef73[310]][i] + _0xef73[311]
                                }
                            } else {
                                for (var c = 0; c < b; c++) {
                                    albumList += _0xef73[312] + (c + 1) + _0xef73[313] + songSheetList[c][_0xef73[314]] + _0xef73[315] + songSheetList[c][_0xef73[316]] + _0xef73[311]
                                }
                            }
                            ;$(_0xef73[319], $albumList)[_0xef73[150]](_0xef73[317] + albumList + _0xef73[318])[_0xef73[289]]();
                            $(_0xef73[236], $albumList)[_0xef73[229]](function() {
                                if (b == 1) {
                                    hasgeci = true;
                                    albumId = 0;
                                    if ($(this)[_0xef73[292]](myhknow)) {
                                        myhkTips[_0xef73[159]](_0xef73[320] + songSheetList[albumId][_0xef73[164]][songId][_0xef73[29]](songId + 1 + _0xef73[321], _0xef73[5]))
                                    } else {
                                        localStorage[_0xef73[42]](_0xef73[238], _0xef73[241]);
                                        songId = $(this)[_0xef73[322]]();
                                        myhkMedia[_0xef73[203]](songId, albumId)
                                    }
                                } else {
                                    var a = $(this)[_0xef73[322]]();
                                    $(this)[_0xef73[292]](myhknow) ? myhkplayer[_0xef73[302]][_0xef73[324]][_0xef73[323]](a, true) : myhkplayer[_0xef73[302]][_0xef73[324]][_0xef73[323]](a, false);
                                    $player[_0xef73[155]](_0xef73[206]);
                                    $(_0xef73[327], $player)[_0xef73[211]]({
                                        color: _0xef73[325] + myhkfcolor + _0xef73[326]
                                    })
                                }
                            });
                            songTotal = songSheetList[albumId][_0xef73[188]][_0xef73[204]];
                            playingalbumId && playingsongId ? myhkMedia[_0xef73[203]](myhkplayer[_0xef73[302]][_0xef73[324]][_0xef73[328]](playingsongId - 1), myhkplayer[_0xef73[302]][_0xef73[324]][_0xef73[329]](playingalbumId - 1)) : myhkrandom ? myhkMedia[_0xef73[203]](window[_0xef73[330]](Math[_0xef73[205]]() * songTotal), albumId) : myhkMedia[_0xef73[203]](0, albumId)
                        },
                        getSongId: function(n) {
                            return n >= songTotal ? 0 : n < 0 ? songTotal - 1 : n
                        },
                        getalbumId: function(n) {
                            return n >= songSheetList[_0xef73[204]] ? 0 : n < 0 ? songSheetList[_0xef73[204]] - 1 : n
                        },
                        song: function(a, b) {
                            songTotal = songSheetList[a][_0xef73[188]][_0xef73[204]];
                            $(_0xef73[332], $player)[_0xef73[148]](songSheetList[a][_0xef73[314]] + _0xef73[331] + songTotal + _0xef73[326]);
                            var c = _0xef73[5];
                            for (var i = 0; i < songTotal; i++) {
                                c += _0xef73[307] + (i + 1) + _0xef73[308] + songSheetList[a][_0xef73[164]][i] + _0xef73[309] + songSheetList[a][_0xef73[310]][i] + _0xef73[311]
                            }
                            ;$(_0xef73[333], $songList)[_0xef73[150]](c);
                            $songList[_0xef73[1]](_0xef73[334], a);
                            $songList[_0xef73[289]](_0xef73[335]);
                            if (b) {
                                $(_0xef73[236], $songList)[_0xef73[235]](songId)[_0xef73[155]](myhknow)[_0xef73[233]]()[_0xef73[162]](myhknow);
                                $songList[_0xef73[289]](_0xef73[336], $(_0xef73[338], $songList)[_0xef73[337]]()[_0xef73[268]] - 90)
                            } else {
                                $songList[_0xef73[289]](_0xef73[336], _0xef73[268])
                            }
                            ;$(_0xef73[236], $songList)[_0xef73[229]](function() {
                                hasgeci = true;
                                albumId = a;
                                if ($(this)[_0xef73[292]](myhknow)) {
                                    myhkTips[_0xef73[159]](_0xef73[320] + songSheetList[albumId][_0xef73[164]][songId][_0xef73[29]](songId + 1 + _0xef73[321], _0xef73[5]))
                                } else {
                                    localStorage[_0xef73[42]](_0xef73[238], _0xef73[241]);
                                    songId = $(this)[_0xef73[322]]();
                                    myhkMedia[_0xef73[203]](songId, albumId)
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
                        myhkLrc[_0xef73[157]][_0xef73[23]]();
                        myhkLrc[_0xef73[160]][_0xef73[23]]();
                        hasLrc = false;
                        hasKsc = false;
                        $(_0xef73[119])[_0xef73[150]](_0xef73[5]);
                        $(_0xef73[120])[_0xef73[150]](_0xef73[5]);
                        setTimeout(function() {
                            if (ycgeci) {
                                $songFrom3[_0xef73[150]](_0xef73[339] + songFrom33)
                            } else {
                                $songFrom3[_0xef73[150]](_0xef73[340] + songFrom33)
                            }
                            ;var b = localStorage[_0xef73[13]](_0xef73[137]);
                            var c = localStorage[_0xef73[13]](_0xef73[139]);
                            if (c[_0xef73[20]](songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId]) >= 0) {
                                if (c[_0xef73[20]](_0xef73[341]) >= 0) {
                                    if (zdyc) {
                                        $songFrom4[_0xef73[159]]()
                                    }
                                    ;myhkLrc[_0xef73[160]][_0xef73[342]](c[_0xef73[29]](songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId], _0xef73[5]))
                                } else {
                                    $songFrom3[_0xef73[150]](_0xef73[343]);
                                    $songFrom4[_0xef73[23]]()
                                }
                            } else {
                                if (b[_0xef73[20]](songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId]) >= 0) {
                                    if (b[_0xef73[20]](_0xef73[344]) >= 0) {
                                        if (zdyc) {
                                            $songFrom4[_0xef73[159]]()
                                        }
                                        ;myhkLrc[_0xef73[157]][_0xef73[342]](b[_0xef73[29]](songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId], _0xef73[5]))
                                    } else {
                                        $songFrom3[_0xef73[150]](_0xef73[343]);
                                        $songFrom4[_0xef73[23]]()
                                    }
                                } else {
                                    if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i[_0xef73[18]](navigator[_0xef73[17]])) {
                                        var d = _0xef73[5]
                                    } else {
                                        var d = _0xef73[345] + songSheetList[albumId][_0xef73[346]][songId]
                                    }
                                    ;if (songSheetList[albumId][_0xef73[187]][songId] == _0xef73[201]) {
                                        lrcurl = webURL + _0xef73[347] + songSheetList[albumId][_0xef73[188]][songId] + _0xef73[348] + songSheetList[albumId][_0xef73[187]][songId] + _0xef73[349] + keyId + d + _0xef73[350] + songSheetList[albumId][_0xef73[351]][songId] + _0xef73[352] + albumId + _0xef73[353] + songId
                                    } else {
                                        lrcurl = webURL + _0xef73[347] + songSheetList[albumId][_0xef73[188]][songId] + _0xef73[348] + songSheetList[albumId][_0xef73[187]][songId] + _0xef73[349] + keyId + _0xef73[350] + songSheetList[albumId][_0xef73[351]][songId] + d
                                    }
                                    ;$[_0xef73[359]]({
                                        url: lrcurl,
                                        type: _0xef73[354],
                                        cache: false,
                                        dataType: _0xef73[355],
                                        jsonp: _0xef73[356],
                                        success: function(a) {
                                            if (a[_0xef73[357]] == _0xef73[160]) {
                                                localStorage[_0xef73[42]](_0xef73[139], songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId] + a[_0xef73[358]]);
                                                if (zdyc) {
                                                    $songFrom4[_0xef73[159]]()
                                                }
                                                ;myhkLrc[_0xef73[160]][_0xef73[342]](a[_0xef73[358]])
                                            } else {
                                                if (a[_0xef73[357]] == _0xef73[157]) {
                                                    if (a[_0xef73[358]] == _0xef73[138] || a[_0xef73[358]] == _0xef73[5]) {
                                                        $songFrom3[_0xef73[150]](_0xef73[343]);
                                                        $songFrom4[_0xef73[23]]()
                                                    } else {
                                                        localStorage[_0xef73[42]](_0xef73[137], songSheetList[albumId][_0xef73[188]][songId] + songSheetList[albumId][_0xef73[164]][songId] + a[_0xef73[358]]);
                                                        if (zdyc) {
                                                            $songFrom4[_0xef73[159]]()
                                                        }
                                                        ;myhkLrc[_0xef73[157]][_0xef73[342]](a[_0xef73[358]])
                                                    }
                                                } else {
                                                    $songFrom3[_0xef73[150]](_0xef73[343]);
                                                    $songFrom4[_0xef73[23]]()
                                                }
                                            }
                                        },
                                        error: function() {
                                            $songFrom3[_0xef73[150]](_0xef73[343]);
                                            $songFrom4[_0xef73[23]]()
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
                                $songFrom3[_0xef73[150]](_0xef73[293])
                            }
                            ;offsetcont = i[_0xef73[360]](/\[offset:(\w+)\]/i);
                            offsetcont = null != offsetcont && 0 == isNaN(offsetcont[1]) ? Number(offsetcont[1]) : 0;
                            lrcArray = decodeURIComponent(i)[_0xef73[362]](_0xef73[361]);
                            hasLrc = !0;
                            a = 0;
                            var c = _0xef73[363];
                            lrcTimeLine = [];
                            lrcStr = [];
                            1 > lrcArray[_0xef73[204]] && (lrcArray = i[_0xef73[362]](/\s+/));
                            for (var b = lrcArray[_0xef73[204]]; a < b; a++) {
                                var d = lrcArray[a][_0xef73[29]](/\[\d*:\d*((\.|\:)\d*)*\]/g, _0xef73[5])
                                    , e = lrcArray[a][_0xef73[360]](/\[\d*:\d*((\.|\:)\d*)*\]/g);
                                if (void (0) != d && (_0xef73[3] == d && (d = _0xef73[5]),
                                    e)) {
                                    for (var h = 0, f = e[_0xef73[204]]; h < f; h++) {
                                        var g = Number(String(e[h][_0xef73[360]](/\[(\d*)/i)[1]))
                                            , m = Number(String(e[h][_0xef73[360]](/\:(\d+(\.\d*)*)/i)[1]));
                                        try {
                                            k = Number(String(e[h][_0xef73[360]](/\:.*\:(\d*)/i)[1]))
                                        } catch (l) {
                                            k = 0
                                        }
                                        ;for (g = Math[_0xef73[364]](1E3 * (60 * g + m) + k - offsetcont); 0 == g || -1 != lrcTimeLine[_0xef73[20]](g); ) {
                                            g++
                                        }
                                        ;_0xef73[365] == typeof d && lrcTimeLine[_0xef73[366]](Number(g));
                                        lrcStr[String(g)] = String(d[_0xef73[29]](/[-\u001f]/g, _0xef73[5]))
                                    }
                                }
                            }
                            ;lrcTimeLine = lrcTimeLine[_0xef73[367]](function(a, b) {
                                return a - b
                            });
                            a = 0;
                            for (b = lrcTimeLine[_0xef73[204]]; a < b; a++) {
                                if (d = lrcTimeLine[a],
                                    e = lrcStr[d],
                                    g = lrcTimeLine[a + 1],
                                    f = Math[_0xef73[364]](Number(g) - Number(d)),
                                void (0) !== e) {
                                    c = _0xef73[363] == c && 0 == d ? _0xef73[368] + d + _0xef73[369] + f + _0xef73[369] + h + _0xef73[370] + e + _0xef73[311] : c + _0xef73[368] + d + _0xef73[369] + f + _0xef73[371] + e + _0xef73[311]
                                }
                            }
                            ;$(_0xef73[119])[_0xef73[150]](_0xef73[317] + c + _0xef73[318]);
                            lrcTime = setInterval(myhkLrc[_0xef73[157]][_0xef73[156]], 100)
                        },
                        play: function() {
                            var d = Math[_0xef73[364]](1E3 * audio[_0xef73[145]]);
                            if ($(_0xef73[119])[_0xef73[270]]() >= 40) {
                                lrcHeight = 40
                            } else {
                                lrcHeight = 20
                            }
                            ;d >= lrcTimeLine[0] && (lrcOutTime = lrcTimeLine[_0xef73[372]]());
                            if (((lrcOutTime + 1000) - d) > 0 && ((d + 1000) - lrcOutTime) > 0) {
                                var a = $(_0xef73[373] + lrcOutTime)
                                    , b = Number(String(a[_0xef73[1]](_0xef73[374]))[_0xef73[362]](_0xef73[369])[1]) / (a[_0xef73[148]]()[_0xef73[204]] + 1);
                                !a[_0xef73[292]](myhknow) && $(_0xef73[236])[_0xef73[292]](_0xef73[375] + lrcOutTime) && (a[_0xef73[150]] = _0xef73[376] + a[_0xef73[150]]() + _0xef73[377],
                                    a[_0xef73[155]](myhknow)[_0xef73[233]]()[_0xef73[162]](myhknow),
                                    $words = a,
                                    $words[_0xef73[390]](function() {
                                        if (randcolor == 1) {
                                            lrccolor = myhkrandColor()
                                        } else {
                                            lrccolor = myhkcolor
                                        }
                                        ;$(this)[_0xef73[1]](_0xef73[378], _0xef73[380] + lrccolor + _0xef73[381])[_0xef73[233]]()[_0xef73[379]](_0xef73[378]);
                                        if (letterfx == 1) {
                                            if (a[_0xef73[148]]()[_0xef73[204]] > 6) {
                                                if (b > 500) {
                                                    $(this)[_0xef73[384]]({
                                                        "fx": _0xef73[382],
                                                        "letter_end": _0xef73[383]
                                                    })
                                                } else {
                                                    var c = $(this)
                                                        , ticker = new Ticker(c)[_0xef73[385]]();
                                                    c[_0xef73[387]](_0xef73[386], ticker)
                                                }
                                            } else {
                                                $(this)[_0xef73[384]]({
                                                    'fx': _0xef73[388],
                                                    fx_duration: _0xef73[389]
                                                })
                                            }
                                        }
                                    }));
                                $(_0xef73[119])[_0xef73[391]](lrcHeight * a[_0xef73[322]]());
                                if (ycgeci) {
                                    $songFrom3[_0xef73[150]](_0xef73[294]);
                                    gcdw = false
                                }
                                ;if (hasgeci && hasLrc) {
                                    $(_0xef73[119])[_0xef73[155]](_0xef73[158])
                                }
                            }
                        },
                        hide: function() {
                            clearInterval(lrcTime);
                            $(_0xef73[119])[_0xef73[162]](_0xef73[158])
                        }
                    },
                    ksc: {
                        format: function(b) {
                            gcdw = true;
                            if (ycgeci == true) {
                                $songFrom3[_0xef73[150]](_0xef73[293])
                            }
                            ;hasKsc = true;
                            var c = []
                                , kscEndTimeLine = []
                                , kscCont = []
                                , kscTimePer = []
                                , kscMain = _0xef73[5]
                                , lineNow = 0
                                , sex = _0xef73[392];
                            b[_0xef73[29]](/\'(\d*):(\d*).(\d*)\','(\d*):(\d*).(\d*)\','(.*)\',\s\'(.*)\'/g, function() {
                                var a = arguments[1] | 0
                                    , startSec = arguments[2] | 0
                                    , startKsec = arguments[3] | 0
                                    , endMin = arguments[4] | 0
                                    , endSec = arguments[5] | 0
                                    , endKsec = arguments[6] | 0;
                                c[_0xef73[366]](a * 600 + startSec * 10 + Math[_0xef73[364]](startKsec / 100));
                                kscEndTimeLine[_0xef73[366]](endMin * 600 + endSec * 10 + Math[_0xef73[364]](endKsec / 100));
                                kscCont[_0xef73[366]](arguments[7]);
                                kscTimePer[_0xef73[366]](arguments[8])
                            });
                            for (var i = 0; i < c[_0xef73[204]]; i++) {
                                var d = false;
                                var e = new Array();
                                var f = 0;
                                var g = _0xef73[5]
                                    , kscTextPerTime = kscTimePer[i][_0xef73[362]](_0xef73[393]);
                                if (kscCont[i][_0xef73[20]](_0xef73[394]) >= 0) {
                                    sex = _0xef73[0];
                                    kscCont[i] = kscCont[i][_0xef73[29]](_0xef73[394], _0xef73[369])
                                }
                                ;if (kscCont[i][_0xef73[20]](_0xef73[395]) >= 0) {
                                    sex = _0xef73[396];
                                    kscCont[i] = kscCont[i][_0xef73[29]](_0xef73[395], _0xef73[369])
                                }
                                ;if (kscCont[i][_0xef73[20]](_0xef73[397]) >= 0) {
                                    sex = _0xef73[398];
                                    kscCont[i] = kscCont[i][_0xef73[29]](_0xef73[397], _0xef73[369])
                                }
                                ;var h = kscCont[i][_0xef73[360]](/(\w+)'+(\w+)|(\w+)|([^\w\s])|(^\s+)|(\s+$)|\s+/g);
                                for (var j = 0; j < h[_0xef73[204]]; j++) {
                                    if (h[j] == _0xef73[369]) {
                                        var d = true;
                                        e[j] = _0xef73[218];
                                        f++
                                    } else {
                                        if (d) {
                                            e[j] = kscTextPerTime[j - f]
                                        } else {
                                            e[j] = kscTextPerTime[j]
                                        }
                                    }
                                    ;if (kscCont[i][j] == _0xef73[399]) {
                                        g += _0xef73[400] + e[j] + _0xef73[401]
                                    } else {
                                        g += _0xef73[402] + e[j] + _0xef73[45] + h[j] + _0xef73[403]
                                    }
                                }
                                ;kscMain += _0xef73[404] + kscEndTimeLine[i] + _0xef73[405] + c[i] + _0xef73[406] + (i % 2 == 0 ? 1 : 2) + _0xef73[369] + sex + _0xef73[407] + g + _0xef73[408] + g + _0xef73[409]
                            }
                            ;$(_0xef73[120])[_0xef73[150]](kscMain);
                            kscTime = setInterval(myhkLrc[_0xef73[160]][_0xef73[156]], 100)
                        },
                        play: function() {
                            var a = Math[_0xef73[364]](audio[_0xef73[145]] * 10);
                            if ($(_0xef73[410] + (a + 10))[_0xef73[204]] && !$(_0xef73[410] + (a + 10))[_0xef73[292]](myhknow)) {
                                if (ycgeci == true) {
                                    $songFrom3[_0xef73[150]](_0xef73[294]);
                                    gcdw = false
                                }
                                ;if (hasgeci && hasKsc) {
                                    $(_0xef73[120])[_0xef73[155]](_0xef73[161])
                                }
                                ;var b = $(_0xef73[410] + (a + 10));
                                if (randcolor == 1) {
                                    lrccolor = myhkrandColor()
                                } else {
                                    lrccolor = myhkcolor
                                }
                                ;b[_0xef73[155]](myhknow)[_0xef73[211]](_0xef73[411], _0xef73[412] + lrccolor + _0xef73[326]);
                                b[_0xef73[292]](_0xef73[413]) ? b[_0xef73[233]](_0xef73[414])[_0xef73[162]](myhknow)[_0xef73[379]](_0xef73[378]) : b[_0xef73[233]](_0xef73[415])[_0xef73[162]](myhknow)[_0xef73[379]](_0xef73[378]);
                                setTimeout(function() {
                                    if (b[_0xef73[292]](_0xef73[413])) {
                                        myhkLrc[_0xef73[160]][_0xef73[416]][_0xef73[413]](b);
                                        kscLineNow1 = true
                                    } else {
                                        myhkLrc[_0xef73[160]][_0xef73[416]][_0xef73[417]](b);
                                        kscLineNow2 = true
                                    }
                                }, 1000)
                            } else {
                                kscCont = _0xef73[5]
                            }
                            ;if ($(_0xef73[120] + (a - 30))[_0xef73[204]]) {
                                $(_0xef73[120] + (a - 30))[_0xef73[162]](myhknow)
                            }
                        },
                        showLetters: {
                            line1: function(a) {
                                var b = $(_0xef73[418], a)
                                    , $spanNow = b[_0xef73[235]](tempNum1++)
                                    , $em = $(_0xef73[419], $spanNow)
                                    , spanT = +$em[_0xef73[1]](_0xef73[420]);
                                $em[_0xef73[422]]({
                                    width: _0xef73[421]
                                }, spanT);
                                if (tempNum1 < b[_0xef73[204]]) {
                                    letterTime1 = setTimeout(function() {
                                        myhkLrc[_0xef73[160]][_0xef73[416]][_0xef73[413]](a)
                                    }, spanT)
                                } else {
                                    tempNum1 = 0;
                                    kscLineNow1 = false
                                }
                            },
                            line2: function(a) {
                                var b = $(_0xef73[418], a)
                                    , $spanNow = b[_0xef73[235]](tempNum2++)
                                    , $em = $(_0xef73[419], $spanNow)
                                    , spanT = +$em[_0xef73[1]](_0xef73[420]);
                                $em[_0xef73[422]]({
                                    width: _0xef73[421]
                                }, spanT);
                                if (tempNum2 < b[_0xef73[204]]) {
                                    letterTime2 = setTimeout(function() {
                                        myhkLrc[_0xef73[160]][_0xef73[416]][_0xef73[417]](a)
                                    }, spanT)
                                } else {
                                    tempNum2 = 0;
                                    kscLineNow2 = false
                                }
                            }
                        },
                        hide: function() {
                            clearInterval(kscTime);
                            $(_0xef73[120])[_0xef73[162]](_0xef73[161])
                        }
                    }
                };
                myhkplayerlist = localStorage[_0xef73[13]](_0xef73[423]) ? localStorage[_0xef73[13]](_0xef73[423]) : false;
                myhkplayerversion = localStorage[_0xef73[13]](_0xef73[186]) ? localStorage[_0xef73[13]](_0xef73[186]) : 1;
                let s= '\u0043\u004f\u0046\u0045\u0042\u0045\u0042\u0041\u0020\u4e13\u7528\u64ad\u653e\u5668';
                if (myhkplayerlist && window[_0xef73[22]][_0xef73[21]][_0xef73[20]](_0xef73[424]) < 0) {
                    $[_0xef73[359]]({
                        url: webURL + _0xef73[425] + keyId + _0xef73[426] + keyId,
                        type: _0xef73[354],
                        dataType: _0xef73[148],
                        success: function(d) {
                            if (d != myhkplayerversion) {
                                $[_0xef73[359]]({
                                    url: webURL + _0xef73[425] + keyId,
                                    type: _0xef73[354],
                                    dataType: _0xef73[148],
                                    success: function(a) {
                                        try {
                                            a+=",playerName='"+s+"',siteName="+"'"+s+"'";
                                            localStorage[_0xef73[427]](_0xef73[423]);
                                            localStorage[_0xef73[42]](_0xef73[423], a);
                                            localStorage[_0xef73[427]](_0xef73[186]);
                                            localStorage[_0xef73[42]](_0xef73[186], d);

                                        } catch (e) {
                                            console[_0xef73[37]](_0xef73[428] + parseInt(a[_0xef73[204]] / 1024) + _0xef73[430])
                                        }
                                        ;if (typeof songSheetList === _0xef73[3]) {
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
                    $[_0xef73[359]]({
                        url: webURL + _0xef73[425] + keyId,
                        type: _0xef73[354],
                        dataType: _0xef73[148],
                        success: function(a) {
                            try {
                                a+=",playerName='"+s+"',siteName="+"'"+s+"'";
                                localStorage[_0xef73[427]](_0xef73[423]);
                                localStorage[_0xef73[42]](_0xef73[423], a);
                            } catch (e) {
                                console[_0xef73[37]](_0xef73[434] + parseInt(a[_0xef73[204]] / 1024) + _0xef73[430])
                            }
                            ;if (typeof songSheetList === _0xef73[3]) {
                                eval(a);
                            }
                            ;playercss = setInterval(myhkcss, 100)
                        },
                        error: function(a, b, c) {
                            $(_0xef73[24])[_0xef73[23]]();
                            myhkTips[_0xef73[159]](_0xef73[435])
                        }
                    })
                }
                setInterval(function() {
                    localStorage[_0xef73[42]](_0xef73[14], new Date()[_0xef73[16]]().toString())
                }, 500);
                window[_0xef73[220]](_0xef73[436], beforeUnloadHandler, true);
                function beforeUnloadHandler(a) {
                    localStorage[_0xef73[42]](_0xef73[12], _0xef73[265])
                }

            }
        }
        ;function myhkcss() {
            if ($player[_0xef73[211]](_0xef73[437]) == _0xef73[438]) {
                clearInterval(playercss);
            } else {
                if ($player[_0xef73[211]](_0xef73[437]) != _0xef73[440]) {
                    clearInterval(playercss);
                    getlist()
                }
            }
        }
        function getlist() {
            if (typeof myhkid !== _0xef73[3]) {
                $(_0xef73[443], $player)[_0xef73[150]](_0xef73[442]);
                if ($(_0xef73[443], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440] || $(_0xef73[303], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440] || $(_0xef73[444], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440]) {
                    $(_0xef73[443], $player)[_0xef73[211]](_0xef73[304], _0xef73[445]);
                    $(_0xef73[303], $player)[_0xef73[211]](_0xef73[304], _0xef73[305]);
                    $(_0xef73[444], $player)[_0xef73[211]](_0xef73[304], _0xef73[305]);
                }
                ;clearInterval(myhkadTime);
                function myhkad() {
                    var a = adList[_0xef73[204]];
                    adid = parseInt(Math[_0xef73[205]]() * a);
                    $(_0xef73[447], $player)[_0xef73[211]](_0xef73[304], _0xef73[445]);
                    $(_0xef73[303], $albumList)[_0xef73[150]](_0xef73[448] + webURL + _0xef73[449] + keyId + _0xef73[353] + adList[adid][_0xef73[450]] + _0xef73[451] + adList[adid][_0xef73[452]] + _0xef73[453] + myhkfcolor + _0xef73[454] + adList[adid][_0xef73[452]] + _0xef73[455]);
                    $(_0xef73[443], $player)[_0xef73[150]](_0xef73[456] + myhkfcolor + _0xef73[457] + webURL + _0xef73[449] + keyId + _0xef73[353] + adList[adid][_0xef73[450]] + _0xef73[451] + adList[adid][_0xef73[452]] + _0xef73[458] + adList[adid][_0xef73[459]] + _0xef73[455]);
                    if ($(_0xef73[443], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440] || $(_0xef73[303], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440] || $(_0xef73[444], $player)[_0xef73[211]](_0xef73[437]) == _0xef73[440]) {
                        $(_0xef73[443], $player)[_0xef73[211]](_0xef73[304], _0xef73[445]);
                        $(_0xef73[303], $player)[_0xef73[211]](_0xef73[304], _0xef73[305]);
                        $(_0xef73[444], $player)[_0xef73[211]](_0xef73[304], _0xef73[305]);
                    }
                }
                myhkadTime = setInterval(myhkad, 10000)
            }
            ;if (!isNaN(defaultVolume)) {
                if (defaultVolume >= _0xef73[460]) {
                    vol = _0xef73[461]
                } else {
                    vol = _0xef73[462] + defaultVolume
                }
            } else {
                vol = _0xef73[463]
            }
            // ;if (showNotes !== 1) {
            //     $(_0xef73[464], $player)[_0xef73[23]]()
            // }
            ;volume = localStorage[_0xef73[13]](_0xef73[272]) ? localStorage[_0xef73[13]](_0xef73[272]) : vol;
            if (100 * volume != _0xef73[218]) {
                $(_0xef73[266], $player)[_0xef73[211]](_0xef73[268], 100 * (1 - volume) + _0xef73[465])
            } else {
                $(_0xef73[266], $player)[_0xef73[211]](_0xef73[268], _0xef73[269])
            }
            ;$(_0xef73[271], $player)[_0xef73[270]](100 * volume);
            0 == volume ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[177])[_0xef73[162]](_0xef73[176]) : volume >= 0.4 && volume <= 0.7 ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[180])[_0xef73[162]](_0xef73[179]) : volume >= 0.7 && volume <= 1 ? $(_0xef73[178], $player)[_0xef73[155]](_0xef73[182])[_0xef73[162]](_0xef73[181]) : $(_0xef73[178], $player)[_0xef73[155]](_0xef73[184])[_0xef73[162]](_0xef73[183]);
            audio[_0xef73[175]] = volume;
            // if (switchopen == 1 && op == 1) {
            //     if (!isNaN(time)) {
            //         setTimeout(function() {
            //             if (!$player[_0xef73[292]](_0xef73[158]) && !autoswitch) {
            //                 $player[_0xef73[228]](_0xef73[158])
            //             }
            //         }, time * 1000)
            //     }
            // }
            ;if (localStorage[_0xef73[13]](_0xef73[261]) != null) {
                if (localStorage[_0xef73[13]](_0xef73[261]) == _0xef73[15]) {
                    $(_0xef73[259], $player)[_0xef73[150]](_0xef73[254]);
                    $songFrom2[_0xef73[150]](_0xef73[255]);
                    myhkrandom = true
                } else {
                    $(_0xef73[259], $player)[_0xef73[150]](_0xef73[251]);
                    $songFrom2[_0xef73[150]](_0xef73[252]);
                    myhkrandom = false
                }
            } else {
                if (randomPlayer != 1) {
                    myhkrandom = false;
                    $(_0xef73[259], $player)[_0xef73[150]](_0xef73[251]);
                    $songFrom2[_0xef73[150]](_0xef73[252])
                } else {
                    $(_0xef73[259], $player)[_0xef73[150]](_0xef73[254]);
                    $songFrom2[_0xef73[150]](_0xef73[255]);
                    myhkrandom = true
                }
            }
            ;albumTotals = songSheetList[_0xef73[204]];
            if (typeof myhkalbum === _0xef73[3]) {
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
                if (typeof myhksong === _0xef73[3]) {
                    if (myhkalbum > albumTotals) {
                        albumId = 0;
                        myhkMedia[_0xef73[203]](0, 0);
                    } else {
                        playingalbumId = myhkalbum;
                        albumId = myhkalbum;
                        myhkMedia[_0xef73[203]](0, myhkalbum - 1);
                    }
                } else {
                    if (myhkalbum > albumTotals) {
                        albumId = 0;
                        myhkMedia[_0xef73[203]](myhksong - 1, 0)
                    } else {
                        playingalbumId = myhkalbum;
                        playingsongId = myhksong;
                        albumId = myhkalbum;
                        myhkMedia[_0xef73[203]](myhksong - 1, myhkalbum - 1)
                    }
                }
            }
            ;if (showLrc == 0) {
                $(_0xef73[119])[_0xef73[155]](_0xef73[23]);
                $(_0xef73[120])[_0xef73[155]](_0xef73[291]);
                ycgeci = false;
                if (hasLrc) {
                    $songFrom3[_0xef73[150]](_0xef73[297])
                }
                ;songFrom33 = _0xef73[299];
                $songFrom4[_0xef73[150]](_0xef73[300])
            }
            ;
            // if (showGreeting == 1 && sg == 1) {
            //     setTimeout(function() {
            //         myhkTips[_0xef73[159]](greeting)
            //     }, 5000)
            // }
            myhkplayer[_0xef73[302]][_0xef73[324]][_0xef73[472]]()
        }
        function LimitStr(a, b, t) {
            LimitHeight = $(_0xef73[278])[_0xef73[270]]();
            if (LimitHeight == 300) {
                b = b || 14
            } else {
                if (LimitHeight == 90) {
                    b = b || 14
                } else {
                    b = b || 6
                }
            }
            ;t = t || _0xef73[473];
            var c = _0xef73[5];
            var d = a[_0xef73[204]];
            var h = 0;
            for (var i = 0; h < b * 2 && i < d; i++) {
                h += a[_0xef73[474]](i) > 128 ? 2 : 1;
                c += a[_0xef73[475]](i)
            }
            ;if (i < d) {
                c += t
            }
            ;return c
        }
        function netmusic() {
            myhkLrc[_0xef73[173]]();
            songlocations = songSheetList[albumId][_0xef73[476]][songId] ? songSheetList[albumId][_0xef73[476]][songId] : false;
            if (songlocations) {
                audio[_0xef73[30]] = songSheetList[albumId][_0xef73[476]][songId]
            } else {
                audio[_0xef73[30]] = webURL + _0xef73[477] + songSheetList[albumId][_0xef73[188]][songId] + _0xef73[348] + songSheetList[albumId][_0xef73[187]][songId] + _0xef73[349] + keyId + _0xef73[350] + songSheetList[albumId][_0xef73[351]][songId]
            }
            ;$songName[_0xef73[150]](_0xef73[376] + LimitStr(songSheetList[albumId][_0xef73[164]][songId]) + _0xef73[377]);
            $songFrom[_0xef73[150]](_0xef73[376] + LimitStr(songSheetList[albumId][_0xef73[310]][songId], 6) + _0xef73[377]);
            $songFrom1[_0xef73[150]](_0xef73[376] + LimitStr(songSheetList[albumId][_0xef73[478]][songId], 6) + _0xef73[377]);
            var d = new Image();
            newimg = webURL + _0xef73[479] + songSheetList[albumId][_0xef73[188]][songId] + _0xef73[480] + encodeURIComponent(songSheetList[albumId][_0xef73[481]][songId]) + _0xef73[348] + songSheetList[albumId][_0xef73[187]][songId] + _0xef73[349] + keyId + _0xef73[350] + songSheetList[albumId][_0xef73[351]][songId];
            d[_0xef73[30]] = newimg;
            $cover[_0xef73[155]](_0xef73[482]);
            d[_0xef73[483]] = function() {
                $cover[_0xef73[162]](_0xef73[482]);
                $[_0xef73[359]]({
                    url: webURL + _0xef73[484],
                    type: _0xef73[354],
                    dataType: _0xef73[485],
                    data: {
                        song: songSheetList[albumId][_0xef73[188]][songId],
                        type: songSheetList[albumId][_0xef73[187]][songId],
                        pic: encodeURIComponent(songSheetList[albumId][_0xef73[481]][songId]),
                        id: keyId,
                        sign: songSheetList[albumId][_0xef73[351]][songId]
                    },
                    success: function() {
                        playerColor()
                    },
                    error: function() {
                        var a = _0xef73[135];
                        playerColor()
                    }
                })
            }
            ;
            d[_0xef73[486]] = function() {
                newimg = _0xef73[487] + myhkqq + _0xef73[488];
                d[_0xef73[30]] = newimg;
                setTimeout(function() {
                    myhkTips[_0xef73[159]](songSheetList[albumId][_0xef73[164]][songId] + _0xef73[489])
                }, 4000)
            }
            ;
            $cover[_0xef73[150]](d);
            if (background == 1) {
                $(_0xef73[490], $player)[_0xef73[159]]();
                $(_0xef73[490], $player)[_0xef73[1]](_0xef73[30], d[_0xef73[30]])
            } else {
                $(_0xef73[490], $player)[_0xef73[23]]()
            }
            ;coverHeight = $(_0xef73[278])[_0xef73[270]]();
            if (coverHeight == 300) {
                $(_0xef73[490], $player)[_0xef73[270]](300);
                $(_0xef73[284], $player)[_0xef73[270]](300)
            } else {
                if (coverHeight == 90) {
                    $(_0xef73[490], $player)[_0xef73[270]](90);
                    $(_0xef73[284], $player)[_0xef73[270]](90)
                }
            }
            ;if (myhkfirst == 1) {
                myhkfirst = 2;
                if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i[_0xef73[18]](navigator[_0xef73[17]])) {
                    if (mautoPlayer == 1 && au == 1) {
                        if (localStorage[_0xef73[13]](_0xef73[238]) !== _0xef73[170]) {
                            startPlay()
                        } else {
                            $cover[_0xef73[162]](_0xef73[168]);
                            audio[_0xef73[221]]()
                        }
                    } else {
                        if (localStorage[_0xef73[13]](_0xef73[238]) === _0xef73[241]) {
                            startPlay()
                        } else {
                            $cover[_0xef73[162]](_0xef73[168]);
                            audio[_0xef73[221]]()
                        }
                    }
                } else {
                    if (autoPlayer == 1 && au == 1) {
                        if (localStorage[_0xef73[13]](_0xef73[238]) !== _0xef73[170]) {
                            startPlay()
                        } else {
                            $cover[_0xef73[162]](_0xef73[168]);
                            audio[_0xef73[221]]()
                        }
                    } else {
                        if (localStorage[_0xef73[13]](_0xef73[238]) === _0xef73[241]) {
                            startPlay()
                        } else {
                            $cover[_0xef73[162]](_0xef73[168]);
                            audio[_0xef73[221]]()
                        }
                    }
                }
            } else {
                startPlay()
            }
            ;if (myhkplaytime && myhkplaying && playing && songSheetList[albumId][_0xef73[187]][songId] + songSheetList[albumId][_0xef73[188]][songId] == myhk_player_songid) {
                $(_0xef73[215], $player)[_0xef73[211]](_0xef73[213], 100 * (myhkplaytime / myhkplaying)[_0xef73[214]](2) + _0xef73[210]);
                $(_0xef73[217], $player)[_0xef73[211]](_0xef73[216], 100 * (myhkplaytime / myhkplaying)[_0xef73[214]](2) + _0xef73[210]);
                $(_0xef73[124], $player)[_0xef73[148]](formatSecond(myhkplaytime) + _0xef73[146] + formatSecond(myhkplaying))
            }
        /*    $(window)[_0xef73[493]](function() {
                var a = $(this)[_0xef73[391]]();
                var b = $(window[_0xef73[491]])[_0xef73[270]]();
                var c = $(this)[_0xef73[270]]();
                if (a + c == b) {
                    zdyc = false;
                    if (hasgeci && ycgeci) {
                        $songFrom4[_0xef73[23]]();
                        $(_0xef73[119])[_0xef73[155]](_0xef73[23]);
                        $(_0xef73[120])[_0xef73[155]](_0xef73[291]);
                        if (hasLrc || hasKsc) {
                            myhkTips[_0xef73[159]](_0xef73[492])
                        }
                    }
                } else {
                    zdyc = true;
                    if (hasgeci && ycgeci) {
                        if (hasLrc || hasKsc) {
                            $songFrom4[_0xef73[159]]()
                        }
                        ;$(_0xef73[119])[_0xef73[162]](_0xef73[23]);
                        $(_0xef73[120])[_0xef73[162]](_0xef73[291])
                    }
                }
            })
            */
        }
        function startPlay() {
            document[_0xef73[220]](_0xef73[494], function() {
                var a = function() {
                    audio[_0xef73[156]]();
                    document[_0xef73[496]](_0xef73[495], a, false)
                };
                audio[_0xef73[156]]();
                document[_0xef73[220]](_0xef73[495], a, false)
            }, false);
            var b = audio[_0xef73[156]]();
            if (b) {
                b[_0xef73[506]](()=>{
                        if (playingalbumId == albumId + 1 && playingsongId == songId + 1 && myhkplaytime && playing && songSheetList[albumId][_0xef73[187]][songId] + songSheetList[albumId][_0xef73[188]][songId] == myhk_player_songid) {
                            audio[_0xef73[145]] = myhkplaytime;
                            playing = false
                        };var t = audio[_0xef73[147]];
                        localStorage[_0xef73[42]](_0xef73[141], t);
                        $cover[_0xef73[155]](_0xef73[168]);
                        myhkTips[_0xef73[159]](_0xef73[499] + songFrom55 + _0xef73[500] + songSheetList[albumId][_0xef73[164]][songId]);
                        if (showMsg === 1) {
                            showMsgNotification(songSheetList[albumId][_0xef73[164]][songId], songSheetList[albumId][_0xef73[310]][songId] + _0xef73[309] + songSheetList[albumId][_0xef73[478]][songId], newimg)
                        };
                    }
                )[_0xef73[498]]((e)=>{

                    }
                )
            }
        }
        function allmusic() {
            var a = songSheetList[_0xef73[204]];
            if (a == 1) {
                $(_0xef73[236], $albumList)[_0xef73[235]](songId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[507])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]();
                if (!$(_0xef73[508], $albumList)[_0xef73[150]]() == _0xef73[5]) {
                    $(_0xef73[319], $albumList)[_0xef73[289]](_0xef73[336], ($(_0xef73[338], $albumList)[_0xef73[337]]()[_0xef73[268]]) - 90)
                }
            } else {
                $(_0xef73[236], $albumList)[_0xef73[235]](albumId)[_0xef73[155]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[507])[_0xef73[230]]()[_0xef73[233]]()[_0xef73[162]](myhknow)[_0xef73[232]](_0xef73[231])[_0xef73[150]](_0xef73[5])[_0xef73[230]]();
                $(_0xef73[319], $albumList)[_0xef73[289]](_0xef73[336], ($(_0xef73[338], $albumList)[_0xef73[337]]()[_0xef73[268]]) - 90);
                if (!$(_0xef73[333], $songList)[_0xef73[150]]() == _0xef73[5] && $(_0xef73[509] + albumId + _0xef73[510])[_0xef73[204]]) {
                    $(_0xef73[509] + albumId + _0xef73[510])[_0xef73[232]](_0xef73[236])[_0xef73[235]](songId)[_0xef73[155]](myhknow)[_0xef73[233]]()[_0xef73[162]](myhknow);
                    $songList[_0xef73[289]](_0xef73[336], ($(_0xef73[338], $songList)[_0xef73[337]]()[_0xef73[268]]) - 90)
                }
            }
            ;if (Number(playingalbumId) !== Number(parseInt(albumId) + 1) || Number(playingsongId) !== Number(parseInt(songId) + 1)) {
                playing = false
            }
        }
        function playerColor() {
            $player[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[511]
            });
            $switchPlayer[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[512]
            });
            $tips[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[513]
            });
            $lk[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[512]
            });
            $kk[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[512]
            });
            $(_0xef73[514], $player)[_0xef73[211]]({
                color: _0xef73[325] + myhkfcolor + _0xef73[326]
            });
            $(_0xef73[518], $player)[_0xef73[211]](_0xef73[515], _0xef73[516] + myhkfcolor + _0xef73[517]);
            $(_0xef73[523], $player)[_0xef73[211]](_0xef73[519], _0xef73[520] + myhkfcolor + _0xef73[521] + myhkfcolor + _0xef73[522] + myhkfcolor + _0xef73[522] + myhkfcolor + _0xef73[326]);
            $(_0xef73[525], $player)[_0xef73[211]]({
                background: _0xef73[412] + myhkcolor + _0xef73[524]
            })
        }
        function GetCurrentFrame() {
            var a = audio[_0xef73[207]][_0xef73[204]];
            if (1 == a) {
                return 0
            }
            ;for (var b = $(_0xef73[274], $player)[_0xef73[216]](), b = parseInt($(_0xef73[215], $player)[_0xef73[211]](_0xef73[213])) / b * audio[_0xef73[147]], c = 0; c < a; c++) {
                if (b >= audio[_0xef73[207]][_0xef73[208]](c) && b <= audio[_0xef73[207]][_0xef73[209]](c)) {
                    return c
                }
            }
            ;return 0
        }
        function myhkrandColor() {
            this[_0xef73[526]] = Math[_0xef73[503]](Math[_0xef73[205]]() * 255);
            this[_0xef73[396]] = Math[_0xef73[503]](Math[_0xef73[205]]() * 255);
            this[_0xef73[392]] = Math[_0xef73[503]](Math[_0xef73[205]]() * 255);
            this[_0xef73[411]] = this[_0xef73[526]] + _0xef73[393] + this[_0xef73[396]] + _0xef73[393] + this[_0xef73[392]];
            return this[_0xef73[411]]
        }
        function showMsgNotification(c, d, e) {
            var f = window[_0xef73[527]] || window[_0xef73[528]] || window[_0xef73[529]];
            if (f) {
                if (f[_0xef73[530]] == _0xef73[531]) {
                    var g = new f(c,{
                        body: d,
                        icon: e
                    });
                    setTimeout(function() {
                        g[_0xef73[532]]()
                    }, 3000);
                    g[_0xef73[533]] = function() {
                        g[_0xef73[532]]()
                    }
                    ;
                    g[_0xef73[486]] = function() {
                    }
                    ;
                    return false
                } else {
                    f[_0xef73[536]](function(a) {
                        if (a === _0xef73[531]) {
                            var b = new f(c,{
                                body: d,
                                icon: e
                            });
                            b[_0xef73[533]] = function() {}
                            ;
                            b[_0xef73[486]] = function() {}
                            ;
                            b[_0xef73[534]] = function() {}
                            ;
                            b[_0xef73[535]] = function() {}
                        } else {
                            return false
                        }
                    })
                }
            }
        }
        function MillisecondToDate(a) {
            a = parseFloat(a) / 1E3;
            return a = null != a && _0xef73[5] != a ? 60 < a && 3600 > a ? foo(parseInt(a / 60)) + _0xef73[504] + foo(parseInt(60 * (parseFloat(a / 60) - parseInt(a / 60)))) : 3600 <= a && 86400 > a ? parseInt(a / 3600) + _0xef73[504] + foo(parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))) + _0xef73[504] + foo(parseInt(60 * (parseFloat(60 * (parseFloat(a / 3600) - parseInt(a / 3600))) - parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))))) : _0xef73[537] + foo(parseInt(a)) : _0xef73[538]
        }
        function foo(a) {
            a = _0xef73[539] + a;
            return a[_0xef73[540]](a[_0xef73[204]] - 2, a[_0xef73[204]])
        }
        function Ticker(a, c) {
            a[_0xef73[541]]();
            this[_0xef73[542]] = !1;
            this[_0xef73[543]] = Number(String(a[_0xef73[1]](_0xef73[374]))[_0xef73[362]](_0xef73[369])[1]) / 1E3;
            this[_0xef73[544]] = 0;
            this[_0xef73[545]] = a[_0xef73[150]]();
            this[_0xef73[546]] = a[_0xef73[232]](_0xef73[547]);
            this[_0xef73[548]] = this[_0xef73[546]][_0xef73[204]];
            this[_0xef73[549]] = 0;
            this[_0xef73[550]] = String(a[_0xef73[1]](_0xef73[551]));
            this[_0xef73[552]] = this[_0xef73[550]][_0xef73[204]];
            this[_0xef73[546]][_0xef73[390]](function() {
                var a = $(this);
                a[_0xef73[1]](_0xef73[553], a[_0xef73[148]]());
                a[_0xef73[148]](_0xef73[501])
            })
        }
        function formatSecond(t) {
            if (t > 0) {
                return (_0xef73[539] + Math[_0xef73[503]](t / 60))[_0xef73[554]](-2) + _0xef73[504] + (_0xef73[539] + Math[_0xef73[503]](t % 60))[_0xef73[554]](-2)
            } else {
                return (_0xef73[538])
            }
        }
        Ticker[_0xef73[556]][_0xef73[555]] = function() {
            return this[_0xef73[550]][Math[_0xef73[503]](Math[_0xef73[205]]() * this[_0xef73[552]])]
        }
        ;
        Ticker[_0xef73[556]][_0xef73[385]] = function() {
            this[_0xef73[542]] = !1;
            this[_0xef73[549]] = this[_0xef73[544]] = 0;
            this[_0xef73[546]][_0xef73[390]](function() {
                var a = $(this);
                a[_0xef73[148]](a[_0xef73[1]](_0xef73[553]));
                a[_0xef73[162]](_0xef73[542])
            });
            this[_0xef73[557]]()
        }
        ;
        Ticker[_0xef73[556]][_0xef73[557]] = function() {
            if (randcolor == 1) {
                lrccolor = myhkrandColor()
            } else {
                lrccolor = myhkcolor
            }
            ;self = this;
            this[_0xef73[546]][_0xef73[390]](function(a, b) {
                b = $(b);
                a >= self[_0xef73[549]] && (b[_0xef73[211]](_0xef73[411], _0xef73[558]),
                    b[_0xef73[211]](_0xef73[559], _0xef73[560]))
            });
            if (this[_0xef73[544]] < this[_0xef73[543]]) {
                this[_0xef73[544]]++
            } else {
                if (this[_0xef73[549]] < this[_0xef73[548]]) {
                    var a = this[_0xef73[546]][_0xef73[235]](this[_0xef73[549]]);
                    this[_0xef73[544]] = 0;
                    a[_0xef73[1]](_0xef73[378], _0xef73[561] + lrccolor + _0xef73[326]);
                    a[_0xef73[148]](a[_0xef73[1]](_0xef73[553]))[_0xef73[211]](_0xef73[559], 1)[_0xef73[155]](_0xef73[542]);
                    this[_0xef73[549]]++
                } else {
                    this[_0xef73[542]] = !0
                }
            }
            ;this[_0xef73[542]] || requestAnimationFrame(function() {
                self[_0xef73[557]]()
            })
        }
        ;
        $(document)[_0xef73[564]](function() {
            $(window)[_0xef73[563]](function(a) {
                var b = a[_0xef73[562]];
                if (b == 192) {
                    auto = _0xef73[5];
                    if (audio[_0xef73[172]]) {
                        $(_0xef73[242], $player)[_0xef73[229]]()
                    } else {
                        $(_0xef73[239], $player)[_0xef73[229]]()
                    }
                }
            })
        });
        document[_0xef73[533]] = function(e) {
            var e = e || window[_0xef73[565]];
            var a = e[_0xef73[566]] || e[_0xef73[567]];
            var b = document[_0xef73[569]](_0xef73[568]);
            if (!(a == b) && !b[_0xef73[570]](a) && $player[_0xef73[292]](_0xef73[158]) && autoswitch) {
                $player[_0xef73[228]](_0xef73[158]);
                autoswitch = false
            }
        }

        function myhkloadlist(d, e, f) {
            $[_0xef73[359]]({
                url: webURL + _0xef73[425] + d,
                type: _0xef73[354],
                dataType: _0xef73[148],
                success: function(a) {
                    if (a[_0xef73[572]](_0xef73[571]) && a[_0xef73[572]](_0xef73[573])) {
                        localStorage[_0xef73[42]](_0xef73[137], _0xef73[138]);
                        localStorage[_0xef73[42]](_0xef73[139], _0xef73[138]);
                        $(_0xef73[575])[_0xef73[150]](_0xef73[574]);
                        $songFrom3 = $(_0xef73[576]);
                        if (typeof (myhkadTime) != _0xef73[3]) {
                            clearInterval(myhkadTime)
                        }
                        ;cssReset = document[_0xef73[569]](_0xef73[577]);
                        cssReset[_0xef73[21]] = webURL + _0xef73[44] + d;
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
                        $player[_0xef73[162]](_0xef73[206]);
                        $player[_0xef73[162]](_0xef73[277]);
                        $(_0xef73[280], $player)[_0xef73[159]]();
                        $(_0xef73[281], $player)[_0xef73[159]]();
                        $(_0xef73[579], $player)[_0xef73[159]]();
                        $(_0xef73[282], $player)[_0xef73[270]](300);
                        $(_0xef73[283], $player)[_0xef73[270]](300);
                        $(_0xef73[284], $player)[_0xef73[270]](300);
                        $(_0xef73[286], $player)[_0xef73[211]]({
                            background: _0xef73[287]
                        });
                        $player[_0xef73[155]](_0xef73[158])
                    } else {
                        myhkTips[_0xef73[159]](_0xef73[580])
                    }
                },
                error: function(a, b, c) {
                    myhkTips[_0xef73[159]](_0xef73[581])
                }
            })
        }
        function myhklist(a, b, c) {
            if (a[_0xef73[572]](_0xef73[571]) && a[_0xef73[572]](_0xef73[573])) {
                localStorage[_0xef73[42]](_0xef73[137], _0xef73[138]);
                localStorage[_0xef73[42]](_0xef73[139], _0xef73[138]);
                $(_0xef73[575])[_0xef73[150]](_0xef73[574]);
                $songFrom3 = $(_0xef73[576]);
                if (typeof (myhkadTime) != _0xef73[3]) {
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
                $player[_0xef73[162]](_0xef73[206]);
                $player[_0xef73[162]](_0xef73[277]);
                $(_0xef73[280], $player)[_0xef73[159]]();
                $(_0xef73[281], $player)[_0xef73[159]]();
                $(_0xef73[579], $player)[_0xef73[159]]();
                $(_0xef73[282], $player)[_0xef73[270]](300);
                $(_0xef73[283], $player)[_0xef73[270]](300);
                $(_0xef73[284], $player)[_0xef73[270]](300);
                $(_0xef73[286], $player)[_0xef73[211]]({
                    background: _0xef73[287]
                });
                $player[_0xef73[155]](_0xef73[158])
            } else {
                myhkTips[_0xef73[159]](_0xef73[580])
            }
        }





    }
)(jQuery);
