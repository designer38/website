$(document).ready(function() { $(this).scrollTop(0);
    $("html").niceScroll({ cursorcolor: "#229999", cursorwidth: "10", zindex: 1000, scrollspeed: "60", horizrailenabled: !1, cursorborder: "0", autohidemode: !1, cursorminheight: 30 }); var scrollButton = $("#shm");
    $(window).scroll(function() { $(this).scrollTop() >= 490 ? scrollButton.show() : scrollButton.hide() });
    scrollButton.click(function() { $("html,body").animate({ scrollTop: 0 }, 800) });
    $('.scroll').click(function() { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var $target = $(this.hash);
            $target = $target.length && $target || $('[name' + this.hash.slice(1) + ']'); if ($target.length) { var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 600); return !1 } } }) });
$('.navbar li a').click(function() { $('.navbar li').removeClass("active");
    $(this).parent("li").addClass("active"); if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var $target = $(this.hash);
        $target = $target.length && $target || $('[name' + this.hash.slice(1) + ']'); if ($target.length) { var targetOffset = $target.offset().top - 0;
            $('html,body').animate({ scrollTop: targetOffset }, 600); return !1 } } });
$(window).scroll(function() { var windscroll = $(window).scrollTop();
    $('#home').addClass('active'); if (windscroll >= 10) { $('.section').each(function(i) { if ($(this).position().top <= windscroll + 250) { $('.navbar li.active').removeClass('active');
                $('.navbar li').eq(i).addClass('active') } }) } else { $('.navbar li.active').removeClass('active');
        $('.navbar li:first').addClass('active') } })

function checkScroll() { var startY = $('.navbar li a').height() * 2; if ($(window).scrollTop() > startY) { $('#navbar').addClass("scrolled") } else { $('#navbar').removeClass("scrolled") } }
if ($('#navbar').length > 0) { $(window).on("scroll load resize", function() { checkScroll() }) }
$(window).scroll(function() { var $window = $(window),
        $body = $('body'),
        $panel = $('.section'); var scroll = $window.scrollTop() + ($window.height() / 3);
    $panel.each(function() { var $this = $(this); if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) { $body.removeClass(function(index, css) { return (css.match(/(^|\s)color-\S+/g) || []).join(' ') });
            $body.addClass('color-' + $(this).data('color')) } }) }).scroll();
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    if (wScroll > $('#service-section').offset().top - ($(window).height() / 1.8)) { $('#service-section .field .service-icon').each(function(i) { setTimeout(function() { $('#service-section .field .service-icon').eq(i).addClass('is-showing') }, 150 * (i + 1)) }) }
    if (wScroll > $('#client-section').offset().top - ($(window).height() / 1.8)) { $('#client-section .field .logos li').each(function(i) { setTimeout(function() { $('#client-section .field .logos li').eq(i).addClass('is-showing') }, 150 * (i + 1)) }) }
})