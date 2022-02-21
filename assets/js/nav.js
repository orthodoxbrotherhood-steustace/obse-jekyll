// /primary mobile menu
    // $('.mobile-menu').prepend('<button class="btn-close-menu"><span></span></button>');
    $('#mobile-site-navigation ul li.menu-item-has-children').find('> a').after('<button class="arrow-holder"><span class="fas fa-angle-down"></span></button>');
    $('#mobile-site-navigation ul li .arrow-holder').on( 'click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $('#toggle-button').on( 'click', function() {
        $('.mobile-menu-wrap').animate({
            width: 'toggle',
        });
    });

    $('.btn-close-menu').on( 'click', function() {
        $('.mobile-menu-wrap').animate({
            width: 'toggle',
        });
    });

    $('.mobile-menu-wrap .social-networks').insertAfter('.mobile-menu-wrap .mobile-menu .main-menu-modal > li:last-child');
