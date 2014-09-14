$( document ).ready(function() {
  var currentSlide = 1;
  var numberOfSlides = $('#hero-images li').length;

  function changeSlideTo(slideNumber) {
    $("#hero-images .active").removeClass('active');
    $("#hero-images .hero-slide:nth-child(" + slideNumber + ")").addClass('active');
    $('#hero-thumbs .active').removeClass('active');
    $("#hero-thumbs li:nth-child(" + slideNumber + ")").addClass('active');
  }

  function incrementSlide () {
    if (currentSlide == numberOfSlides) {
      currentSlide = 1;
    }
    else {
      currentSlide = currentSlide + 1;
    }
    changeSlideTo(currentSlide);
  }

  $('#hero-thumbs .thumb').on('click', function(e) {
    e.preventDefault();
    $this = $(this);
    thumbNumber = $this.data("thumb-number");
    currentSlide = thumbNumber;
    changeSlideTo(currentSlide);
  });

  setInterval(function(){
    var isHovered = $('#hero').is(":hover");
    if (!isHovered) {
        incrementSlide();
    };
  }, 5000);

});
