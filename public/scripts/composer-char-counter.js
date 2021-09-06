$(document).ready(() => {
  $('#tweet-text').on('input', charCountAndRecolor);
});

const charCountAndRecolor = function () {
  const input = $(this).val().length;
  //Retreat up the DOM to <form> and traverse down to find the <output>;
  const output = $(this).parent().find('output');
  output.html(140 - input);
  //Change text color to red if over text limit
  if (parseInt(output.html()) < 0) {
    $(output).addClass('overCount');
  }
};