
    $(function() {
        $('.smooth').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1500);
            }
        });
    });



    $(function() {
        var btn_menu = $('.btn_menu');
        menu = $('nav ul');

        $(btn_menu).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle(1500);
        });
    });


