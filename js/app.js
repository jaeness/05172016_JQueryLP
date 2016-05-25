$(document).ready(function(){
  //WOW JS
  new WOW().init();

//Changing Navbar - anchoring the top nav for top 50px only
  $(window).on("scroll", function(){
    var scrollDistance = $(window).scrollTop();
    console.log (scrollDistance);
    if (scrollDistance > 50) {
      $("#mainNav")
      //chaining method - mainNav does not have to be written again.  Comma does not have to be between them
      .removeClass("affix-top").addClass("affix");
    } else {
      $("#mainNav")
      .removeClass("affix").addClass("affix-top");
    }
  });

//Scrolling to Anchors - top nav bar goes to the top section
  $(document).on("click", ".page-scroll", function(event){
    event.preventDefault();
    var target = $(this).attr("href");

    $("body").animate({
      scrollTop: $("target").offset().top
    }, 2000);
  });

//Scrollspy -
  $('body').scrollspy({ target: '#navbar-example' })

});
