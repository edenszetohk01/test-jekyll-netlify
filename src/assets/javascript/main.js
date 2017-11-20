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

function sceneToggle() {
  $('.main-slider__item').on('click', '.main-slider__graph', function() {
    $(this)
      .closest('.main-slider__item')
      .addClass('main-slider__item--open')
      .closest('section')
      .addClass('open');
  });
}

function sceneClose() {
  $('.main-slider__toggle').on('click', function(e) {
    e.stopPropagation();

    $(this)
      .closest('.main-slider__item')
      .removeClass('main-slider__item--open')
      .closest('section')
      .removeClass('open');
  });
}


// Scene 1
var jsonfile = "/assets/SnapSVGAnimator/js/scene-1.json",
  fps = 24,
  width = 1400,
  height = 787,
  AJAX_req;

AJAX_JSON_Req(jsonfile);

function handle_AJAX_Complete() {
  if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
    var json = JSON.parse(AJAX_req.responseText);
    var comp = new SVGAnim(
      json,
      width,
      height,
      fps
    );

    $('#scene-1').append(comp.s.node);
  }
}

function AJAX_JSON_Req(url) {
  AJAX_req = new XMLHttpRequest();
  AJAX_req.open("GET", url, true);
  AJAX_req.setRequestHeader("Content-type", "application/json");

  AJAX_req.onreadystatechange = handle_AJAX_Complete;
  AJAX_req.send();
}

$(function() {
  mainSlider();

  scrollTo();

  sceneToggle();

  sceneClose();

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
