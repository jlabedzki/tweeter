$(document).ready(() => {
  $('#tweet-text').on('input', charCountAndRecolor);
});

const charCountAndRecolor = function () {
  $(this).parent().children('.errorContainer').empty();

  const input = $(this).val().length;

  //Retreat up the DOM to <form> and traverse down to find the <output>;
  const output = $(this).parent().find('output');
  output.html(140 - input);

  //Change text color to red if over text limit, remove red if user deletes excess text
  if (parseInt(output.html()) < 0) {
    $(output).addClass('overCount');
  } else {
    $(output).removeClass('overCount');
    $('.errorContainer').empty();
  }
};