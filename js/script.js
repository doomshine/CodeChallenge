$(document).ready(function () {
    var activeSlide = 1;
    var numberOfSlides = 4;

    function changeTo(slideNumber) {
        $("#hero-images .active").removeClass("active");
        $("#hero-images .hero-slide:nth-child(" + slideNumber + ")").addClass("active");
        $("#hero-thumbs .active").removeClass("active");
        $("#hero-thumbs li:nth-child(" + slideNumber + ")").addClass("active");
    }

    function incrementSlide() {
        if (activeSlide == numberOfSlides) {
            activeSlide = 1;
        } else {
            activeSlide = activeSlide + 1;
        }
        changeTo(activeSlide);
    }

    $('#hero-thumbs .thumb').on('click', function (event) {
        event.preventDefault();
        $this = $(this);
        thumbNumber = $this.data("thumb-number");
        activeSlide = thumbNumber;
        changeTo(activeSlide);
    });

    setInterval(function () {
        var hover = $("#hero").is(":hover");
        if (!hover) {
            incrementSlide();
        };
    }, 4500);

});
