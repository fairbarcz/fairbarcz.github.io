$(document).ready(function(){
    var sections = $('.js-section');
    var trigger = $('.js-trigger');
    var navbar = $('.js-nav');
    var navLinks = $('.js-nav-link');

    // Function for smooth scroll to target section
    function smoothScroll(target) {
        $('body, html').animate({
            'scrollTop': target.offset().top
        }, 600);
    }

    // Carousel init
    $('.js-slick').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<button type="button" class="slick-prev">Předchozí</button>',
        nextArrow: '<button type="button" class="slick-next">Následující</button>',
        variableWidth: true
    });

    // Open and close navbar
    trigger.on('click', function(){
        $(this).toggleClass('is-open');
        $(navbar).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
    });

    // Smooth scroll to the section and close navbar when selected an elemnt from the list
    navLinks.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        trigger.removeClass('is-open');
        navbar.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').removeClass('is-visible');
    });

    // Close navbar when scroll
    $(window).on('scroll', function(){
        trigger.removeClass('is-open');
        navbar.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').removeClass('is-visible');
    });
});
