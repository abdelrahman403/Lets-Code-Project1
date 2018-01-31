$(document).ready(function(){
    var clicked = false;
    var $header = $('header');
    $header.find('nav .nav-btn').on('click', function(){
        var $this = $(this);
        if(!clicked) {
            clicked = true;
            $this.parent().toggleClass('active');
            setTimeout(function(){
                clicked = false;
            }, 1250);
        }
    });

    var clickOver = null,
        $nav = $('nav');
    $(document).on('click', function(e){
        clickOver = $(e.target);
        if(!clickOver.closest('header').length && $nav.hasClass('active')){
            if(!clicked){
                clicked = true;
                $nav.removeClass('active');
                setTimeout(function(){
                    clicked = false;
                }, 1250);
            }
        }
    });

    var $mainSection = $('.main-section');
    $(window).scroll(function(){
        if($(window).scrollTop() >= $mainSection.height() - 100){
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

});





