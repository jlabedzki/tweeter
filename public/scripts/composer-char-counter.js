$(document).ready(() => {
  $('#tweet-text').on('input', charCountAndRecolor);
  $('#backToTop').hide();

  //Hide navbar button and show backToTop button after scrolling 400px
  $(document).scroll(function () {
    const scrollDepth = $(this).scrollTop();

    //Adjust how far user has to scroll for backToTop button based on window width
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
    }
  })
});

const charCountAndRecolor = function () {
  // $(this).parent().children('.errorContainer').empty();

  const input = $(this).val().length;

  //Retreat up the DOM to <form> and traverse down to find the <output>;
  const output = $(this).parent().find('output');
  output.html(140 - input);

  //Change text color to red if over text limit, remove red if user deletes excess text
  if (parseInt(output.html()) < 0) {
    $(output).addClass('overCount');

  } else {
    $(output).removeClass('overCount');
    //remove error message if visible when within count
    $(this)
      .parent()
      .children('.errorContainer')
      .children('.error')
      .slideUp('fast');
  }
};