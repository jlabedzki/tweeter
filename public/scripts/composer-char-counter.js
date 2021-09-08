$(document).ready(() => {
  $('#tweet-text').on('input', e => {
    charCountAndRecolor(e);
  });
});

const charCountAndRecolor = e => {
  const MAX_CHAR_LIMIT = 140;
  const $inputLength = e.target.value.length;

  //Retreat up the DOM to <form> and traverse down to find the <output>;
  const $counter = $(e.target).parent().find('output');
  $counter.text(140 - $inputLength);

  //Change text color to red if over text limit, remove red if user deletes excess text
  if ((MAX_CHAR_LIMIT - $inputLength) < 0) {
    $($counter).addClass('overCount');
  } else {
    $($counter).removeClass('overCount');
    //remove error message if visible when within count
    $(e.target)
      .parent()
      .children('.errorContainer')
      .children('.error')
      .slideUp('fast');
  }
};