(function ($) {

    /******************************************
    Axcel Slider - front page slideshow
    ******************************************/

    $.fn.axcelSlider = function (opts) {

        //Default settings
        var defaults = {
            slideWrapper: '.slider-outer',
            slideContentWrapper: '.slider-content',
            slideTime: 5000,
            animationSpeed: 400,
            animationDistance: 1200
        };
        //Merge with User defined settings if they exist
        opts = $.extend({}, defaults, opts);
        opts.animationDistance = parseInt(opts.animationDistance);

        var $this = $(this);
        //Hide all slides but firt one and move each slides content out of frame
        $this.children(opts.slideWrapper).each(function (index) {
            if ($(this).is(":first-child")) {
                $(this).show();
                $(this).css('z-index', 1000);
            } else {
                $(this).hide();
                $(this).css('z-index', 1);
                $(this).children(opts.slideContentWrapper).children().each(function (index) {
                    if (index % 2 == 0) {
                        $(this).css('opacity', 0);
                        $(this).css('margin-left', function (indx, val) {
                            return parseInt(val) - opts.animationDistance;
                        });
                    } else {
                        $(this).css('opacity', 0);
                        $(this).css('margin-left', function (indx, val) {
                            return parseInt(val) + opts.animationDistance;
                        });
                    }

                });
            }
        });

        //keep track of which slide is active
        $this.attr('mCurSlideIndex', 0);

        //Animation function
        var nextSlideAnimate = function ($this) {

            //Determine which slide is next and get handles to next & current slide
            var slides = $this.children(opts.slideWrapper);
            var curSlide = slides.eq($this.attr('mCurSlideIndex'));
            var nextSlideIndex = parseInt($this.attr('mCurSlideIndex')) + 1;
            if (nextSlideIndex >= slides.length) {
                nextSlideIndex = 0;
            }
            var nextSlide = slides.eq(nextSlideIndex);

            //Make next slide visible before animating current slide out of view
            nextSlide.show();

            //Animate current slide out, starting with slide content
            curSlide.children(opts.slideContentWrapper).children().each(function (index) {
                //Every other child content in slide will animate left out of screen, use modulus to determine                
                if (index % 2 != 0) {
                    $(this).animate({
                        opacity: 0,
                        marginLeft: "+=" + opts.animationDistance
                    }, opts.animationSpeed, function () {
                        curSlide.fadeOut(opts.animationSpeed, function () {
                            nextSlide.children(opts.slideContentWrapper).children().each(function (index) {
                                if (index % 2 != 0) {

                                    //When content is out of view then fade slide itself out of view
                                    $(this).animate({
                                        opacity: 1,
                                        marginLeft: "-=" + opts.animationDistance
                                    }, opts.animationSpeed, function () {

                                        //Animations done, update stuff and set new timer
                                        $this.attr('mCurSlideIndex', nextSlideIndex);
                                        curSlide.css('z-index', 1);
                                        nextSlide.css('z-index', 1000);
                                        curSlide.hide();
                                        setTimeout(function () {
                                            nextSlideAnimate($this);
                                        }, opts.slideTime);
                                    });
                                } else {
                                    $(this).animate({
                                        opacity: 1,
                                        marginLeft: "+=" + opts.animationDistance
                                    });
                                }
                            });
                        });
                    });
                } else {
                    $(this).animate({
                        opacity: 0,
                        marginLeft: "-=" + opts.animationDistance
                    });
                }
            })
        }
        setTimeout(function () {
            nextSlideAnimate($this);
        }, opts.slideTime);
        return this;
    };
    
    
    
    
    /******************************************
    Testimonials Slider - front page testimonials slideshow
    ******************************************/
    $.fn.testimonialSlider = function(opts){
        
        var defaults = {
            testimonialsWrapper: '.quotes-row',
            slideTime: 2000,
            animationSpeed: 400
        };
        //Merge with User defined settings if they exist
        opts = $.extend({}, defaults, opts);
		$this = $(this);
		//keep track of which row is in view
        $this.attr('mCurIndex', 0);
		var slideTestimonials = function($this){
			
			var slides = $this.children(opts.testimonialsWrapper);			
            var mainSlide = slides.eq(0); //animate 'margin-top' of upper most row to cycle throw slides
			var height = parseInt(slides.eq(parseInt($this.attr('mCurIndex'))).outerHeight(true)); //height can changeif browser window adjust so recalculate
            //figure out which slide is next
            var nextSlideIndex = parseInt($this.attr('mCurIndex')) + 1;
            if (nextSlideIndex >= slides.length) {
                nextSlideIndex = 0;
            }
			if (nextSlideIndex > 0){
				//animate by height of one row 
				mainSlide.animate({
                                    marginTop: "-=" + height
                                    }, opts.animationSpeed, function () {

                                        //Animations done, update stuff and set new timer
                                        $this.attr('mCurIndex', nextSlideIndex);
                                        setTimeout(function () {
                                            slideTestimonials($this);
                                        }, opts.slideTime);
                                    });
				
			}
			else{
                
				//animate by height of all slides combined to get back to original position
				var distance = (slides.length-1) * height;
                
				mainSlide.animate({
                                    marginTop: "+=" + distance
                                    }, opts.animationSpeed, function () {

                                        //Animations done, update stuff and set new timer
                                        $this.attr('mCurIndex', nextSlideIndex);
                                        setTimeout(function () {
                                            slideTestimonials($this);
                                        }, opts.slideTime);
                                    });
			}
		}
		// Set a timeout to get it all started
        setTimeout(function () {
            slideTestimonials($this);
        }, opts.slideTime);
        return this;
    };
    
    

})(jQuery);



