/*
Copyright (c) 2017
[Master Stylesheet]
Template Name : App Landing Page Template
Version    : 1.0
Author     : UISuMo Team
Author URI : https://uisumo.com
Support    : uisumo@gmail.com
*/
/*---------------------------------------------
Table of Contents
-----------------------------------------------
Genaral Styling
Typography
Buttons & Links
Form Styling

*/
$(document).ready(function () {
    "use strict";
    var lastScrollTop, navbar, $nav, simpleParallax, back;
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */
    //Initiat WOW JS
    new WOW().init();
    /*nav bar background color change on scroll */
    $(document).on('scroll', function () {
        $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    /*navbar reduced height on scroll*/
    lastScrollTop = 0;
    navbar = $('.navbar');
    $(window).on('scroll', function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.addClass('navbar-scroll-custom');
        }
        else {
            navbar.removeClass('navbar-scroll-custom');
        }
        lastScrollTop = st;
    });
    //Smooth Scroll
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /* Theme color change*/
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function () {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        console.log(val);
        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function () {
        $("#switcher").toggleClass("active");
        return false;
    });
    /*Scroll To Top*/
    if ($('.back-to-top').length) {
        var scrollTrigger = 1000, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                }
                else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    //scrolls down
    //Showcase Slider
    if ($('.showcase-slider').length) {
        $(".showcase-slider").owlCarousel({
            items: 5
            , autoplay: true
            , nav: false
            , dots: true
            , margin: 10
            , responsive: {
                0: {
                    items: 1
                    , dots: false
                    , nav: true
                }
                , 600: {
                    items: 2
                    , dots: false
                    , nav: true
                }
                , 992: {
                    items: 3
                    , dots: false
                    , nav: true
                }
                , 1000: {
                    items: 4
                }
                , 1200: {
                    items: 5
                }
            }
        });
    }
    /*Showcase slider*/
    //client Slider
    if ($('.client-slider').length) {
        $(".client-slider").owlCarousel({
            items: 1
            , autoplay: true
            , nav: true
            , navText: [
            "<i class=' fa fa-angle-left'></i>"
            , "<i class=' fa fa-angle-right'></i>"
        ]
            , dots: false
        });
    }
    /*client slider*/
    /*magnific popup*/
    $('.popup-video').magnificPopup({
        type: 'iframe'
        , iframe: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
                    src: 'https://www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
                }
                , vimeo: {
                    index: 'vimeo.com/'
                    , id: '/'
                    , src: 'https://player.vimeo.com/video/%id%'
                }
                , gmaps: {
                    index: '//maps.google.'
                    , src: '%id%&output=embed'
                }
                // you may add here more sources
            }
            , srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    });
    /*magnific popup*/
    /*scroll reveal animations*/
    window.sr = ScrollReveal();
    sr.reveal('.service-card', {
        duration: 500
    });
    sr.reveal('.about-img', {
        origin: 'right'
        , duration: 2000
    });
    sr.reveal('.header-img', {
        origin: 'right'
        , duration: 5000
    });
    sr.reveal('.featured-img', {
        origin: 'bottom'
        , duration: 2000
    });
    sr.reveal('.header-text', {
        rotate: {
            x: 0
            , y: 100
            , z: 0
        }
        , duration: 2500
    });
    /*scroll reveal animations*/
});