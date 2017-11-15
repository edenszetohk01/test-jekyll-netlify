function mainSlider() {
  $('.main-slider').owlCarousel({
    items: 1,
    margin: 50,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    URLhashListener: true
  });
}

function scrollTo() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
}

$(function() {
  mainSlider();

  scrollTo();
});
