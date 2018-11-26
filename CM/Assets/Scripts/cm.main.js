/* FRONTPAGE SLIDER */
if ($('.slider-outer').length) // Only start slideshow if on front page
{
    //slider vars
    var mCurSlideIndex = 0;
    var mSlideTimeout = 5000; //5 seconds per slide
    // Hide all but first slide, set zindex's and move slide text out of view for non-visible slides
    $('.slider-outer').each(function (index) {
        if ($(this).is(":first-child")) {
            $(this).show();
            $(this).css('z-index', 1000);
        } else {
            var idx = 0;
            $(this).hide();
            $(this).css('z-index', 1);
            $(this).children('.slider-content').children().each(function (index) {
                if (idx == 0) {
                    $(this).css('opacity', 0);
                    $(this).css('margin-left', function (indx, val) {
                        return parseInt(val) - 1200;
                    });
                    idx = idx + 1;
                } else {
                    $(this).css('opacity', 0);
                    $(this).css('margin-left', function (indx, val) {
                        return parseInt(val) + 1200;
                    });
                }

            });
        }
    });
}

/* Main Slider function 
   Works in this order
   1. Animates text of current slide out of view
   2. Fades current slide out
   3. Animates next slides text into view
   4. Sets zindex of last slide to below current
   5. Sets timeout to repeat
*/
var mSlider = function () {
    var slides = $('.slider-outer');
    var curSlide = slides.eq(mCurSlideIndex);
    var nextSlideIndex = mCurSlideIndex + 1;
    if (nextSlideIndex > 4) {
        nextSlideIndex = 0;
    }
    var nextSlide = slides.eq(nextSlideIndex);
    nextSlide.show();
    curSlide.children('.slider-content').children().each(function (index) {
        if (index >= 1) {
            $(this).animate({
                opacity: 0,
                marginLeft: "+=1200"
            }, 500, function () {
                curSlide.fadeOut(500, function () {
                    nextSlide.children('.slider-content').children().each(function (index) {
                        if (index >= 1) {
                            $(this).animate({
                                opacity: 1,
                                marginLeft: "-=1200"
                            }, 500, function () {

                                mCurSlideIndex = nextSlideIndex;
                                curSlide.css('z-index', 1);
                                nextSlide.css('z-index', 1000);
                                curSlide.hide();
                                setTimeout(function () {
                                    mSlider();
                                }, mSlideTimeout);
                            });
                        } else {
                            $(this).animate({
                                opacity: 1,
                                marginLeft: "+=1200"
                            });

                        }
                    });
                });
            });
        } else {
            $(this).animate({
                opacity: 0,
                marginLeft: "-=1200"
            });
        }
    })
};
/* // FRONTPAGE SLIDER */



$(document).ready(function () {
    if ($('.slider-outer').length) // Only start slideshow if on front page
    {
        //Start front page slider
        setTimeout(function () {
            mSlider();
        }, mSlideTimeout);
    }
    
    
    
    
    
    
    
});




