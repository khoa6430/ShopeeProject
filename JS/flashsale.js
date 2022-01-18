
$('.fsslide').slick({
    variableWidth: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: $('.fs-prev'),
    nextArrow: $('.fs-next'),
    infinite: false, // không cho back lại slide 1

});
$(".slick-track").css("max-width:100px", $(window).width());

//slick TRACK
var elem = document.getElementsByClassName('fsslide')[0].children[0];
// console.log(elem.className);
var slicktrackofvip = document.getElementsByClassName(elem.className)[0].children[0];
slicktrackofvip.style.maxWidth = "1200px";
// console.log(slicktrackofvip);

//slicklist
elem.style.maxWidth = "1120px";
