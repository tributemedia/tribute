
(function ($, Drupal) {
  
  $(document).ready(function(){
    // Loop through all <a> and match href substring to current page.
    $('a').each(function(index, value) {
      const link = this.href;
      // If link matches current page href add class
      if (link.indexOf(window.location.href + '#') > -1) {
        $(this).addClass('scrollLink');
      }
    });
    // Smooth scroll to section down page.
    var hdrHeight = $('nav.navbar').outerHeight();
    $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ 
        scrollTop: $($(this).attr("href")).offset().top - hdrHeight }, 1000);
    });
  });
  
})(jQuery, Drupal);