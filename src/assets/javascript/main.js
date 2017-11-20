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

$(document).on("click", ".drawer", function () {
    var id = $(this).data('id');
    var title = $(this).data('title');
    var desc = $(this).data('desc');
    var img = $(this).data('img');
    $(".modal-body .title").text(title);
    $(".modal-body .desc").text(desc);
    $(".modal-body img").attr("src", img);
});
