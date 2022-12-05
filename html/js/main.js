/*------------------------------------------------------------------
 * Theme Name: Hostino Responsive Template
 * Theme URI: http://www.brandio.io/envato/hostino
 * Author: Brandio
 * Author URI: http://www.brandio.io/
 * Description: A Bootstrap Responsive HTML5 Template
 * Version: 1.0
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2017 Brandio.
 -------------------------------------------------------------------*/

/* For preview only */
$('body').append('<style>#customizer{display: inline-block; position: fixed; top: 80px; left: 30px; width: 45px; height: 80px; padding: 8px; -webkit-box-shadow: 2px 5px 30px rgba(0,0,0,0.1); -moz-box-shadow: 2px 5px 30px rgba(0,0,0,0.1); box-shadow: 2px 5px 30px rgba(0,0,0,0.1); background-color: #ffffff; border-radius: 100px; z-index: 9999;}#customizer .btn-theme{position: relative; width: 100%; height: 100%; background-color: #f0f3f7; border-radius: 100px; cursor: pointer;}#customizer .btn-theme:after{position: absolute; content: ""; width: 18px; height: 18px; top: 7px; left: 50%; margin-left: -9px; border-radius: 50px; background-color: #0397ff; -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; transition: all 0.3s ease;}#customizer .btn-theme.active{background-color: #0397ff;}#customizer .btn-theme.active:after{top: 39px; background-color: #f0f3f7;}</style><div id="customizer"> <div class="btn-theme"></div></div>');

var themeBtn=$('.btn-theme','#customizer');
var themeSelected = getCookie("hostinotheme");

if(themeSelected=="normal"){
    themeBtn.removeClass("active");
    $("#custom-css").attr("disabled", "disabled");
    $("#custom-css").remove();
}else if(themeSelected=="bluegrey"){
    themeBtn.addClass("active");
    $('head').append('<link id="custom-css" rel="stylesheet" type="text/css" href="css/blue-grey.css">');
}
themeBtn.on('click',function(){
    themeBtn.toggleClass('active');
    if(!themeBtn.hasClass('active')){
        $("#custom-css").attr("disabled", "disabled");
        $("#custom-css").remove();
        document.cookie = "hostinotheme=normal";
        setCookie("hostinotheme", "normal", 1);
    }else{
        $('head').append('<link id="custom-css" rel="stylesheet" type="text/css" href="css/blue-grey.css">');
        document.cookie = "hostinotheme=bluegrey";
        setCookie("hostinotheme", "bluegrey", 1);
    }
});
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
/* for preview end */

"use strict";

// Add Slider functionality to the top of home page in #top-content section.
var mainSlider = $("#main-slider","#top-content");
mainSlider.slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
    },
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Adding animation to the #main-slider
mainSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slide > div:nth-child(2)','#main-slider').removeClass("animated");
    $('.slide > div:nth-child(3)','#main-slider').removeClass("animated animation-delay1");
 
    $('.slick-active > div:nth-child(2)','#main-slider').addClass("animated");
    $('.slick-active > div:nth-child(3)','#main-slider').addClass("animated animation-delay1");
});
// Add Slider functionality to the #testimonials section in the home page.
var testimonialsSlider = $("#testimonials-slider","#testimonials");
testimonialsSlider.slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});
// Add Slider functionality to the images in the "Sign in" and "Sign out" pages.
var imgTextSlider = $(".img-text-slider","#form-section");
imgTextSlider.slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 200
});
// Add Slider functionality to the about page images in #about section.
var photoSlider = $(".photo-slider","#about");
photoSlider.slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 200
});
// Add Slider functionality to the about page text in #goals section.
var textSlider = $("#text-slider","#goals");
textSlider.slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
    },
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$(window).on("load", function() {
    // Adding animation to the #main-slider
    $('.slick-active > div:nth-child(2)','#main-slider').addClass("animated");
    $('.slick-active > div:nth-child(3)','#main-slider').addClass("animated animation-delay1");

    // Adding hover style for the feature box
    var featureBox = $(".mfeature-box", "#features");
    featureBox.on("mouseover",function(){
        featureBox.removeClass("active");
        $(this).addClass("active");
        return false;
    });
    // Adding hover style for the info box
    var infobox = $(".info-box", "#contact-info");
    var infoboxBorderColor = $('div[class^="col-"]:nth-child(2) .info-box','#contact-info').css("border-color");
    infobox.on("mouseover",function(){
        infobox.css("border-color","transparent");
        return false;
    });
    infobox.on("mouseout",function(){
        infobox.css("border-color",infoboxBorderColor);
        return false;
    });
    // Apps Section hover function
    var appHolder = $(".app-icon-holder", "#apps");
    
    appHolder.on("mouseover",function(){
        appHolder.removeClass("opened");
        $(this).addClass("opened");
        $(".show-details", "#apps").removeClass("show-details");
        $(".app-details"+$(this).data("id"), "#apps").addClass("show-details");
    });
});