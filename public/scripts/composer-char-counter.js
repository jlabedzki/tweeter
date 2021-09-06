$(document).ready(() => {
  $('#tweet-text').on('input', function () {
    const input = $(this).val().length;
    const output = $(this).parent().find('output');
    output.html(140 - input);

    if (parseInt(output.html()) < 0) {
      $(output).addClass('overCount');
    }
  });
});