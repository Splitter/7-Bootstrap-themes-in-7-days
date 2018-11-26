$(document).ready(function () {
    //Smooth scrolling between sections after clicking nav item
    $("a.nav-link, a.navbar-brand").click(function (event) {
        //event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);

    });
    //Animate/ Fade in Intro text on load
    $("#intro-header, #intro-text").animate({
        opacity: 1
    }, 1400);
    // Light box for 'What I do' section
    $(".port-item").featherlight();


});
