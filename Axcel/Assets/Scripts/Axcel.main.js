$(document).ready(function () {
    

    // Start custom front page slideshow
    $('#slider-wrap').axcelSlider();
    
    //Start custom testimonials slideshow
    $('.quotes-container').testimonialSlider();

    
    
    

    // Animate navbar on scroll
    // pretty use specific and procedural
    // TODO: make it a little more universal and adaptable.
    var NavScrollState = "large";
    var mNavAnimating = false;
    var mScrollFunc = function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 120 && NavScrollState == "large" && !mNavAnimating) {
            mNavAnimating = true;
            NavScrollState = "small";
            $(".navbar-wrapper").animate({
                height: "80"
            }, 300);
            $(".navbar").animate({
                height: "80"
            }, 300);
            $(".navbar-outer").animate({
                height: "80"
            }, 300);
            $(".navbar-links").animate({
                marginTop: "-65"
            }, 300);
            $(".navbar-links2").animate({
                marginTop: "80"
            }, 300);
            $(".navbar-toggler").animate({
                marginTop: "-85"
            }, 300);
            $(".navbar").addClass("show");
            $(".navbar-logo").animate({
                width: "131",
                height: "80"
            }, 300,function(){
                mNavAnimating = false;
            });
            $(".navbar").css('box-shadow', '0px -10px 40px #444');
        } else if (scrolled < 140 && NavScrollState == "small" && !mNavAnimating) {
            mNavAnimating = true;
            NavScrollState = "large";
            $(".navbar-outer").animate({
                height: "140"
            }, 300);
            $(".navbar").animate({
                height: "140"
            }, 300);
            $(".navbar-outer").animate({
                height: "140"
            }, 300);
            $(".navbar-links").animate({
                marginTop: "-100"
            }, 300);
            $(".navbar-links2").animate({
                marginTop: "140"
            }, 300);
            $(".navbar-toggler").animate({
                marginTop: "-120"
            }, 300);
            $(".navbar").removeClass("show");
            $(".navbar-logo").animate({
                width: "230",
                height: "140"
            }, 300,function(){
                mNavAnimating = false;
            });
            $(".navbar").css('box-shadow', 'none');
        }
    };
    mScrollFunc(); //Fire off when page first loaded incase page refreshed while scrolled down page
    $(window).on('scroll', mScrollFunc);



    
    
    
    
    
    
    
    

});
