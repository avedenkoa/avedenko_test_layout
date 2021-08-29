;
(function ($) {

    $(document).ready(function () {

        // Include pages
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = 'views/' + $(this).data('include') + '.html'
            $(this).load(file)
        })

        // Sticky header
        $(window).scroll(function () {
            var sticky = $('.header_block'),
                scroll = $(window).scrollTop();

            if (scroll >= 50) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
        });

        // Slick Gallery
        $('.gallery_box').carousel();

        // Smooth links
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });

        $(document).on('click', '.to_top', function (event) {
            event.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });


        // Toggle Menu
        $(document).on('click', '.toggle_hamburger_menu', function (event) {
            event.preventDefault();

            $(this).toggleClass('open');
            $('.menu_mobile').toggleClass('open');
            $('body').toggleClass('no_scroll');
        });

        // Close All
        $(document).on('click', '.close_menu', function (event) {
            event.preventDefault();

            $('.toggle_hamburger_menu').removeClass('open');
            $('.menu_mobile').removeClass('open');
            $('body').removeClass('no_scroll');
        });

    });
})(jQuery);