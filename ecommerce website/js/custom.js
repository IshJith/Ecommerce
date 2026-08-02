

// Js Documents

const jquery321Min = require("./jquery-3.2.1.min");

// Table of contyent
// 1.  vars and inits

var mainSlider = $('.main_slider');
var hamburger = $('.hamburger_ontainer');
var menu = $('.hamburger_menu');
var menuActive = false;
var mainburgerClose = $('.mainburger_close')
var fsOverlay = $('fs_menu_overlay')


initFavorite();
initIsotopeFiltering();
initTimer();
// 2.  Inits Menu
// 3.  Init Timer
function initTimer() {
    if ($('.timer').length) {
        var date = new Date();
        date.setDate(date.getDate() + 3);
        var target_date = date.getTimer();


        //variables for time units
        var days, hours, minutes, seconds
        var d = $('#day');
        var h = $('#hours');
        var m = $('#minutes');
        var s = $('#second');

        setInterval(function () {
            //find the amount of "seconds" between now and target

            var current_date = new Date().getTime();
            var_seconds_left = (target_date - current_date) / 1000;

            // do some time calculation
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds_left = parseInt(seconds_left % 60);

            //display text
            d.text(days);
            h.text(hours);
            m.text(minutes);
            s.text(seconds);
        }, 1000);
    }
}
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider

jQuery(document).ready(function ($) {
    "user strict";
    // 1.  vars and inits

    var mainSlider = $('.main_slider');
    var hamburger = $('.hamburger_ontainer');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var mainburgerClose = $('.mainburger_close')
    var fsOverlay = $('fs_menu_overlay')

    initMenu();
    initFavorite();
    initIsotopeFiltering();
    initTimer();
    initSlider();
    // 2.  Inits Menu
    function initMenu();
    {
        if (hamburger.length) {
            hamburger.on('click', function () {
                if (!menuActive) {
                    openMenu();
                }
            });
        }
        if (fsOverlay.length) {
            fsOverlay.on('click', function () {
                if (menuActive) {
                    closeMenu();
                }
            });
        }
        if (hamburgerClose.length) {
            hamburgerClose.on('click', function () {
                if (!menuActive) {
                    closeMenu();
                }
            });
        }
        if ($('.menu_item'), length) {
            var item = document.getElementsByClassName('menu_item');
            var i;

            for (i = 0; i < items.length; i++) 
            {
                if (items[i].classList.contains("has-children")) {
                    items[i].onclick = function () {
                        this.classList.toggle("active");
                        var panel = this.children[1];
                        if (panel.style.maxHeight) {
                            panel.style.maxHeight = null
                        }
                        else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
                    }
                }
            }
        }
    }
    function openMenu()
    {
        menu.addClass('active');
        fsOverlay.css('pointer-event', "auto");
        menuActive = true;
    }
    function closeMenu()
    {
        menu.removeClass('active');
        fsOverlay.css('pointer-event', "none");
        menuActive = false;
    }




    // 3.  Init Timer
    function initTimer() {
        if ($('.timer').length) {
            var date = new Date();
            date.setDate(date.getDate() + 3);
            var target_date = date.getTimer();


            //variables for time units
            var days, hours, minutes, seconds
            var d = $('#day');
            var h = $('#hours');
            var m = $('#minutes');
            var s = $('#second');

            setInterval(function () {
                //find the amount of "seconds" between now and target

                var current_date = new Date().getTime();
                var_seconds_left = (target_date - current_date) / 1000;

                // do some time calculation
                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds_left = parseInt(seconds_left % 60);

                //display text
                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);
            }, 1000);
        }
    }
    // 4.  Init Favorite
    // 5.  Init Isotope Filtering
    // 6.  Init Slider
    function initSlider() {
        if ($('.product_slider').length) {
            var slider1 = $('.product_slider')
            slider1.owlCarousel({
                loop: false,
                dot: false,
                nav: false,
                responsive:
                {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1280: { items: 5 },
                    1440: { items: 5 },
                }
            });

        }
    }







});


