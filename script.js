function sideContent() {
    // only one so we can return [0]
    return document.getElementsByClassName('side-content')[0];

}
function navBar() {
    // only one so return [0]
    return document.getElementsByTagName('nav')[0];
}

function collapseSideBar() {
    sideContent().style.display = 'none';
    navBar().style.width = '80vw';
    navBar().style.left = '20vw';
}
function expandSideBar() {
    sideContent().style.display = 'block';
    // fix navbar, should match initial css
    navBar().style.width = '80vw';
    navBar().style.left = '20vw';

}

$(function () {
    function showSlide(n) {
  $('body').unbind('mousewheel');
  currSlide += n;
  currSlide = currSlide <= 0 ? 0 : currSlide >= $slide.length - 1 ? $slide.length - 1 : currSlide;

  if (currSlide === 0) {
      collapseSideBar();
  } else {
      expandSideBar();
  }


// ORIGINAL CODE
  var displacment = window.innerWidth * currSlide;
  $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
  setTimeout(function () {
      $('body').bind('mousewheel', mouseEvent);
  }, 800);
  $('nav a.active').removeClass('active');
  $($('a')[currSlide]).addClass('active');
    }
    function mouseEvent(e, delta) {
  showSlide(delta >= 0 ? 1 : -1);
  e.preventDefault();
    }
    $('nav a').click(function (e) {
  var newslide = parseInt($(this).attr('href')[1]);
  var diff = newslide - currSlide - 1;
  showSlide(diff);
  e.preventDefault();
    });
    $(window).resize(function () {
  var displacment = window.innerWidth * currSlide;
  $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
    });
    var currSlide = 0;
    var $slide = $('.slide');
    $($('nav a')[0]).addClass('active');
    $('body').bind('mousewheel', mouseEvent);
});
