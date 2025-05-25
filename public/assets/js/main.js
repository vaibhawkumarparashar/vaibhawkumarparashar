jQuery(function ($) {

    'use strict';

    // OnePageNav
    // Slick Slider
    // Isotope
    // CounterUp
    // Toggle Menu
    // TxtType
    // Scroll Up

    // -------------------------------------------------------------
    //  SlideToggle
    // -------------------------------------------------------------  
    
    mobileDropdown ();
    function mobileDropdown () {
      if($('.navbar-nav').length) {
        $('.navbar-nav .dm-dropdown').append(function () {
          return '<i class="fa fa-angle-down icon"></i>';
        });
        $('.navbar-nav .dm-dropdown .icon').on('click', function () {
          $(this).parent('li, .dm-dropdown').children('ul, .dm-dropdown-menu').slideToggle();
        });
      }
    }     

    // -------------------------------------------------------------
    //  Mobile Menu Collapse
    // -------------------------------------------------------------

    var navMain = $(".collapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });    

    // -------------------------------------------------------------
    //  OnePageNav
    // -------------------------------------------------------------
        
    $('.navbar-nav').onePageNav({});

    // -------------------------------------------------------------
    //  S croll Fixed Top
    // -------------------------------------------------------------
        
    $(window).bind('scroll', function() {
        var navHeight = $('.sa-banner').height();
        if ($(window).scrollTop() > navHeight) {
            $('.sa-menu-style-1').addClass('fixed-top');
         }
        else {
            $('.sa-menu-style-1').removeClass('fixed-top');
         }
    }); 
    
    // -------------------------------------------------------------
    //  Toggle Menu
    // -------------------------------------------------------------


    $("body").on("click", ".sg-toggle", function(e) {
        e.preventDefault();
        $('body').toggleClass( "sidebar-active" );
        $(this).toggleClass( "active" ); 
    });

    $("body").on("click", "#close-menu", function(e) {
        e.preventDefault();
        $('body').toggleClass( "sidebar-active" );
        $(this).toggleClass( "active" ); 
    });

    $("body").on("click", "#ncf-overlay", function(e) {
        e.preventDefault();
        $('body').removeClass( "sidebar-active" );
        $('.sg-toggle').removeClass( "active" ); 
    }); 

    // -------------------------------------------------------------
    //  TxtType
    // -------------------------------------------------------------

    var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
            document.body.appendChild(css);
        };    

    /*==============================================================*/
    // Scroll Up
    /*==============================================================*/

    $("body").append(' <a id="scrollUp" class="show"></a> ');

    var btn = $('#scrollUp');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });  


    // -------------------------------------------------------------
    //  Ripples
    // -------------------------------------------------------------    

    $('.water-background').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.04,
    });    

// script end
});



  
