$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3500
});

$('.mitem').mousemove(function () {
    $(this).css("color", "#0ff")
});

$(".mitem").mouseout(function () {
    $(this).css("color", "white")
});

$(".hitem1").mousemove(function () {
    $(this).text("~WELCOME!!~")
});

$(".hitem1").mouseout(function () {
    $(this).text("~World Heritage~")
});


