$(function () {
    function showPage(n) {
        $('body').unbind('mousewheel');
        currPage += n;
        currPage = currPage <= 0 ? 0 : currPage >= $page.length - 1 ? $page.length - 1 : currPage;
        var displacment = window.innerWidth/2 * currPage;
        $('.pages').css('transform', 'translateX(-' + displacment + 'px)');
        setTimeout(function () {
            $('body').bind('mousewheel', mouseEvent);
        }, 800);
        $('nav a.active').removeClass('active');
        $($('a')[currPage]).addClass('active');
    }
    function mouseEvent(e, delta) {
        showPage(delta >= 0 ? 1 : -1);
        e.preventDefault();
    }
    $('nav a').click(function (e) {
        var newpage = parseInt($(this).attr('href')[1]);
        var diff = newpage - currPage - 1;
        showPage(diff);
        e.preventDefault();
    });
    $(window).resize(function () {
        var displacment = window.innerWidth/2 * currPage;
        $('.pages').css('transform', 'translateX(-' + displacment + 'px)');
    });
    var currPage = 0;
    var $page = $('.page');
    $($('nav a')[0]).addClass('active');
    $('body').bind('mousewheel', mouseEvent);
});
