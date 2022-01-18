// $('.slidevip').slick({
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3,
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
// });


$('.slidevip').slick({
    variableWidth: true,//thêm vô mới set width
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: $('.danhmuc-prev'),
    nextArrow: $('.danhmuc-next'),
    infinite: false, // không cho back lại slide 1
    row:2


});
$(".slick-track").css("max-width:100px", $(window).width());

//slick TRACK
var elem = document.getElementsByClassName('slidevip')[0].children[0];
// console.log(elem.className);
var slicktrackofvip = document.getElementsByClassName(elem.className)[0].children[0];
slicktrackofvip.style.maxWidth = "1200px";
// console.log(slicktrackofvip);

//slicklist
elem.style.maxWidth = "1120px";
