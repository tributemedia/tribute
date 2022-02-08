/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
  $(".mobile-close").click(function() { 
    $('.menu-overlay').removeClass('open'); 
    $('.mobile-offcanvas').removeClass('open');
  });
    
  /**
   * Accordion Fixes
   */
	$( ".mob_accordion .accordion-list" ).each(function( index ) {
    var getId=$(this).attr('id'); 
    var setId=$(this).attr('id',getId+""+index);
    var getTarget=$(this).children().attr('data-target'); 
    var setTarget=$(this).children().attr('data-target',getTarget+""+index);
    var getControls=$(this).children().attr('aria-controls'); 
    var setControls=$(this).children().attr('aria-controls',getControls+""+index);
  });
  $( ".mob_accordion .accordion-list .collapse" ).each(function( index ) {
    var getChildId=$(this).attr('id'); 
    var setChildId=$(this).attr('id',getChildId+""+index);
    var getLabelled=$(this).attr('aria-labelledby'); 
    var setLabelled=$(this).attr('aria-labelledby',getLabelled+""+index);
  });
				
  /**
   * Detect OS and add body class accordingly
   */
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac-os';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  $('body').addClass(os);  

    
})(jQuery, Drupal);

