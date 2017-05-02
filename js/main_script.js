(function($) {
'use strict';



  $(document).ready(function(){

    /*-------------------------------------------------------------------------*
     *             02. change Menu background on scroll js                     *
     *-------------------------------------------------------------------------*/
      $(window).on('scroll', function () {
          var menu_area = $('.menu-area');
          if ($(window).scrollTop() > 200) {
              menu_area.addClass('sticky-menu');
          } else {
              menu_area.removeClass('sticky-menu');
          }
      }); // $(window).on('scroll' end




    /*-------------------------------------------------------------------------*
     *                   03. Navigation js                                     *
     *-------------------------------------------------------------------------*/
 $('.meanmenu-reveal').on("click", function (e) {
          e.preventDefault();
		  $('.sticky-menu .menu ').show();
      });


/*-------------------------------------------------------------------------*
     *                   04. Smooth scroll to anchor                           *
     *-------------------------------------------------------------------------*/
      $('a.smooth_scroll').on("click", function (e) {
          e.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 50
          }, 1000);
		   var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {

		 $('.sticky-menu .menu ').hide();
	}
      });


 /*-------------------------------------------------------------------------*
     *                  05. Portfolio js                                       *
     *-------------------------------------------------------------------------*/
      $('.portfolio').mixItUp();


    

   


  }); // $(document).ready end

})(jQuery);