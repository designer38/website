var Slider = function() { var n = $("#ps-container"),
        o = n.children("div.ps-contentwrapper").children("div.ps-content"),
        r = o.length,
        a = n.children("div.ps-slidewrapper").find("div.ps-slides").children("div"),
        s = n.find("nav > a.ps-prev"),
        e = n.find("nav > a.ps-next"),
        c = 0,
        d = !1,
        p = Modernizr.csstransitions,
        i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd", transition: "transitionend" }[Modernizr.prefixed("transition")],
        v = function() { 0 < c ? a.eq(c - 1).css("background-image") : a.eq(r - 1).css("background-image"), c < r - 1 ? a.eq(c + 1).css("background-image") : a.eq(0).css("background-image") },
        t = function() { s.on("click", function(n) { return d || l("prev"), !1 }), e.on("click", function(n) { return d || l("next"), !1 }), o.on(i, u), a.on(i, u) },
        u = function() { d = !1, $(this).removeClass("ps-move") },
        l = function(n) { d = !0; var s = o.eq(c),
                e = a.eq(c); "next" === n ? c < r - 1 ? ++c : c = 0 : "prev" === n && (0 < c ? --c : c = r - 1); var i = o.eq(c),
                t = a.eq(c);
            i.css({ top: "next" === n ? "-100%" : "100%", zIndex: 999 }), t.css({ top: "next" === n ? "100%" : "-100%", zIndex: 999 }), setTimeout(function() { s.addClass("ps-move").css({ top: "next" === n ? "100%" : "-100%", zIndex: 1 }), e.addClass("ps-move").css({ top: "next" === n ? "-100%" : "100%", zIndex: 1 }), i.addClass("ps-move").css("top", 0), t.addClass("ps-move").css("top", 0), p || (d = !1) }, 0), v() }; return { init: function() { var n = o.eq(c),
                s = a.eq(c),
                e = { top: 0, zIndex: 10 };
            n.css(e), s.css(e), v(), t() } } }();
setInterval(function() { $(".ps-container .ps-next").trigger("click") }, 5e3);