$(function () {

    $('#menu-btn').click(function () {
        $("html,body").animate({scrollTop:$('#menu').offset().top});
    })

    $('#about-btn').click(function () {
        $("html,body").animate({scrollTop:$('#about').offset().top});
    })

    $('#location-btn').click(function () {
        $("html,body").animate({scrollTop:$('#location').offset().top});
    })

});
