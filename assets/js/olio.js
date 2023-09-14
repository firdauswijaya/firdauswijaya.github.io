$("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target
                    .offset()
                    .top - 80
            }, 700, 'swing', function () {
                window.location.hash = '';
            });
            return false;
        }
    }
});

var wow = new WOW({
    boxClass: 'wow',
    offset: 0,
    mobile: true,
    live: true,
    callback: function(box) { },
    scrollContainer: null,
    resetAnimation: true,
});
wow.init();

var n = new Date().toJSON().slice(0,4);
document.getElementById('tahun').innerHTML = n;

$(window).scroll(function() {
    onScroll();
    var scroll = $(window).scrollTop();
    var text = $(".olio-header-name").height() - 54;
    var navbar = $(".olio-navbar").height();

    if (scroll >= (text - navbar)) {
      $(".olio-navbar").addClass("olio-navbar-fixed");
    } else {
      $(".olio-navbar").removeClass("olio-navbar-fixed");
    }
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".olio-navbar a").each(function() {
        var currLink = $(this);
        try {
            var refElement = $(currLink.attr("href"));
            if (
            (refElement.position().top - 100) <= scrollPos &&
            (refElement.position().top - 100) + refElement.innerHeight() > scrollPos
            ) {
                $(".olio-navbar ul li a").removeClass("active");
                currLink.addClass("active");
            }
        } catch (e) {
            // Ignore href='javascript:;'
        }
    });
}