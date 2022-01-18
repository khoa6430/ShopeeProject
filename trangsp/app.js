
$('.slider-x').slick({
  // variableWidth: true,
  arrows: false,
  asNavFor: '.slider-for,.slider-nav',
  infinite: true,
});
$('.slider-nav').slick({
  variableWidth: true,//thêm vô mới set width
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  asNavFor: '.slider-for,.slider-x',
  centerMode: true,
  
  dots: false,
  focusOnSelect: true,
  slidesToShow: 5,
  infinite: true,

});

$(document).ready(function () {
  $('#demolist a').on('click', function () {
    var txt = ($(this).text());
    $('#laytentinhra').replaceWith("<div id='laytentinhra'>"+txt+"</div>");

  });
});


$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})


$('.fsslide').slick({
  variableWidth: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite: false, // không cho back lại slide 1

});
$(".slick-track").css("max-width:100px", $(window).width());