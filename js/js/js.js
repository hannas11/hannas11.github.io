
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
    });
    
    $('.clients-slaider').slick({
        dots: true, 
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.team').slick({
        dots: false, 
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [                                    
					{   breakpoint: 968,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,}
					} ,
					{   breakpoint: 769,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,}
          },
          {   breakpoint: 561,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,}
					}
				]
    });

  document.querySelector('.menu-btn').addEventListener('click', () => {
      document.querySelector('.nav-mobile').classList.add('active');
      document.querySelector('.close-menu').classList.add('close-search-active');
      // alert('1');
  });
  document.querySelector('.close-menu').addEventListener('click', () => {
      document.querySelector('.nav-mobile').classList.remove('active');
      document.querySelector('.close-menu').classList.remove('close-search-active');
  });
  $(".nav-mobile li a").click(function () {
    document.querySelector('.nav-mobile').classList.remove('active');
  });

  $(window).scroll(function(){
    var $real_height = $('.title-wrap').outerHeight();
        if ($(this).scrollTop() >= $real_height && !$(".nav-mobile").hasClass("active")) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
      }

});

    $(".all").click(function () {
        $("[class^=gallery-image]").hide();
        $("[class*=gallery-image]").fadeIn(1000);
        $(".portfolio-works").addClass('portf-all');
      })
      
      $(".branding").click(function () {
        $("[class^=gallery-image]").hide();
        $("[class*=_branding]").fadeIn(1000);
        // $('.portfolio-works').removeClass('portf-all');
        // $(".portfolio-works").addClass('portf-active');
        // $(".portfolio-work").addClass('portf-active');
        // $(".portfolio-work").addClass('portf-act');
      })
      
      $(".design").click(function () {
        $("[class^=gallery-image]").hide();
        $("[class*=_design]").fadeIn(1000);
        // $('.portfolio-works').removeClass('portf-all');
        // $(".portfolio-work").addClass('portf-active');
        // $(".portfolio-work").addClass('portf-act');
      })
      
      $(".development").click(function () {
        $("[class^=gallery-image]").hide();
        $("[class*=_development]").fadeIn(1000);
        // $('.portfolio-works').removeClass('portf-all');
        // $(".portfolio-work").addClass('portf-active');
        // $(".portfolio-work").addClass('portf-act');
      })
      
      $(".strategy").click(function () {
        $("[class^=gallery-image]").hide();
        $("[class*=_strategy]").fadeIn(1000);
        // $('.portfolio-works').removeClass('portf-all');
        // $(".portfolio-work").addClass('portf-active');
        // $(".portfolio-work").addClass('portf-act');
      })
    //   $(".html").click(function () {
    //     $("[class^=gallery-image]").hide();
    //     $("[class*=_html]").show();
    //     $('.portfolio-works').removeClass('portf-all');
    //     $(".portfolio-works").addClass('portf-active');
    //     $(".portfolio-work").addClass('portf-act');
    //   })
      
    //   $(".wordpress").click(function () {
    //     $("[class^=gallery-image]").hide();
    //     $("[class*=_wordpress]").show();
    //     $('.portfolio-works').removeClass('portf-all');
    //     $(".portfolio-works").addClass('portf-active');
    //     $(".portfolio-work").addClass('portf-act');
    //   })
    
});