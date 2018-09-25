
$ (function() {
	$('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
           if (target.length) {
             $('html,body').stop().animate({
                 scrollTop: target.offset().top
            }, 1000);
    }
});
});

$(function (){
	new WOW().init();
});