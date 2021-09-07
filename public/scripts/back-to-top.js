$(document).ready(() => {
  $('#backToTop').hide();
  //Hide navbar button and show backToTop button on scroll
  $(document).scroll(function () {
    const scrollDepth = $(this).scrollTop();

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

  })

  //Focus on new tweet textarea when clicking backToTop
  $('#backToTop').click(() => {
    if ($('.new-tweet').is(':hidden')) {
      $('html, body').animate({ scrollTop: 0 });
      $('.new-tweet').slideDown(1000);
      $('#tweet-text').focus();
    } else {
      $('html, body').animate({ scrollTop: 0 });
      $('#tweet-text').focus();
      $('#backToTop').hide();
    }
  });
});