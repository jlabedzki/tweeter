(function ($) {
  $(document).ready(() => {
    $('#backToTop').hide();
    $(document).scroll(scrollShowsButton);
    $('#backToTop').click(backToTop);
  });


  const scrollShowsButton = function () {
    const scrollDepth = $(this).scrollTop();

    //Hide navbar button and show backToTop button on scroll
    //Adjust how far user has to scroll for backToTop button to appear based on window width
    if ($(window).width() >= 1024) {
      if (scrollDepth > 10) {
        $('#newTweet').hide();
        $('#backToTop').show();
        $('nav')
          .removeClass('seeThrough')
          .addClass('blue');
      } else {
        $('#newTweet').show();
        $('#backToTop').hide();
        $('nav')
          .addClass('seeThrough')
          .removeClass('blue');
      }
    } else {
      if (scrollDepth > 400) {
        $('#newTweet').hide();
        $('#backToTop').show();
        $('nav')
          .removeClass('seeThrough')
          .addClass('blue');
      } else {
        $('#newTweet').show();
        $('#backToTop').hide();
        $('nav')
          .addClass('seeThrough')
          .removeClass('blue');
      }
    }
  }

  const backToTop = () => {
    //Focus on new tweet textarea when clicking backToTop
    if ($('.new-tweet').is(':hidden')) {
      //Animate scroll instead of instant-teleportation to top of page
      $('html, body').animate({ scrollTop: 0 });
      $('.new-tweet').slideDown(1000);
      $('#tweet-text').focus();
    } else {
      $('html, body').animate({ scrollTop: 0 });
      $('#tweet-text').focus();
      $('#backToTop').hide();
    }
  };
})(jQuery);