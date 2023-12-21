/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  /*$('#mega-menu-container .menu .menu-item--expanded >.icon').click(function(){ 
    $(this).next('.menu').slideToggle();
    $(this).toggleClass('show');
  }); */
  $('nav.menu--main .nav .menu-item--expanded >.icon').click(function(){ 
    $(this).next('.menu').slideToggle();
    $(this).toggleClass('show');
  });
  $('.mobile-offcanvas .menu-item--expanded >.icon').click(function(){ 
    $(this).next('.menu').slideToggle();
    $(this).toggleClass('show');
  });

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
    top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top){
      wrapper.height(height);
      affixElement.addClass("affix");
    } else {
      affixElement.removeClass("affix");
      wrapper.height('auto');
    }
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
    wrapper = $('<div></div>');
    ele.before(wrapper);

    $(window).on('scroll resize', function() {
      toggleAffix(ele, $(this), wrapper);
    });

    // init
    toggleAffix(ele, $(window), wrapper);
  });


  Drupal.behaviors.tribute = {
    attach: function (context, settings) {

      $('.navbar-toggler').click(function() {
        $('.mobile-offcanvas').addClass('open');
        $('.menu-overlay').addClass('open');
      });

      $('.menu-overlay').click(function() {
        $('.mobile-offcanvas').removeClass('open');
        $(this).removeClass('open');
      });

	    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){ 
          $('body').addClass("scrolled");
          $('#back-to-top-wrapper').addClass("show");
          //$('.small_logo').show();
          $('.small_logo').fadeIn();
        } else {
          $('body').removeClass("scrolled");
          $('#back-to-top-wrapper').removeClass("show");
          //$('.small_logo').hide();
          $('.small_logo').fadeOut();
        }
      });

    }
  };


  $("#back-to-top").click(function(){
    $('body').removeClass("scrolled");
    $('#back-to-top-wrapper').removeClass("show");
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  


})(jQuery, Drupal);
