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

    function menuSlider(){
        var $sliderContainer = $('.menu-section .slider-container'),
            $slider = $sliderContainer.find('.slider'),
            $sliderBanner = $slider.find('.slider-banner'),
            $sliderItems = $sliderBanner.find('.slider-item'),
            itemsLength = $sliderItems.length,
            $nextArrow = $sliderContainer.find('.slider-arrows .arrow.next'),
            $prevArrow = $sliderContainer.find('.slider-arrows .arrow.prev');

            var itemWidth;
            
            var slidesToShow = 3,
                activeSlides = slidesToShow,
                itemMove = 0,
                clicked = false;
                
            function responsiveSlides() {
                if($(window).width() <= 991 && $(window).width() > 550){
                    slidesToShow = 2;
                    $sliderBanner.css('left', '0');
                    itemMove = 0;
                    $nextArrow.removeClass('disabled');
                    $prevArrow.addClass('disabled');
                }
                else if($(window).width() <= 550) {
                    slidesToShow = 1;
                    $sliderBanner.css('left', '0');
                    itemMove = 0;
                    $nextArrow.removeClass('disabled');
                    $prevArrow.addClass('disabled');
                }
                else {
                    slidesToShow = 3;
                    $sliderBanner.css('left', '0');
                    itemMove = 0;
                    $nextArrow.removeClass('disabled');
                    $prevArrow.addClass('disabled');
                }
            } responsiveSlides();

            activeSlides = slidesToShow;
            
            $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow) + 10);

            function fixWidth() {
                itemWidth = $sliderItems.outerWidth();
                $sliderBanner.width(itemWidth * itemsLength);
            } fixWidth();


            $(window).on('resize', () => {
                responsiveSlides();
                activeSlides = slidesToShow;

                if($(window).width() <= 550) {
                    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow) + 30);
                } else {
                    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow) + 10);
                }

                fixWidth();
            });
            
            function checkStatus() {
                if(activeSlides === itemsLength)
                    $nextArrow.addClass('disabled');
                else
                    $nextArrow.removeClass('disabled');
                
                if(activeSlides === slidesToShow)
                    $prevArrow.addClass('disabled');
                else
                    $prevArrow.removeClass('disabled');
            } checkStatus();

            function leftCalc() {
                return itemWidth * itemMove;
            }
            
            $nextArrow.on('click', () => {
                if(!clicked) {
                    if(activeSlides != itemsLength) {
                        clicked = true;
                        itemMove++;
                        $sliderBanner.css('left', -leftCalc());
                        activeSlides++;
                        setTimeout(function(){
                            clicked = false;
                        }, 450);
                        checkStatus();
                    }
                }
            });
            
            $prevArrow.on('click', () => {
                if(!clicked) {
                    if(activeSlides > slidesToShow) {
                        clicked = true;
                        itemMove--;
                        $sliderBanner.css('left', -leftCalc());
                        activeSlides--;
                        setTimeout(function(){
                            clicked = false;
                        }, 450);
                        checkStatus();
                    }
                }
            });
            
    } menuSlider();


});



