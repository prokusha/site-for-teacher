$(function(){

    $('.some_link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
        e.preventDefault();
    });

});