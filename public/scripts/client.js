$(document).ready(() => {
  $('.new-tweet').hide();
  $('#writeTweet').click(navTweetButton);
  $('.new-tweet form').submit(formSubmission);
  loadTweets();
});

//Prevent user tweet code injections
const escape = str => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = tweetData => {
  const tweet = `
      <article class="tweet">
        <header>
          <div>
            <img src=${tweetData.user.avatars} />
            <span>${tweetData.user.name}</span>
          </div>
          <span class="handle">${tweetData.user.handle}</span>
        </header>
        <p>${escape(tweetData.content.text)}</p>
        <footer>
        <span>${timeago.format(tweetData.created_at)}</span>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
        </footer>
      </article>
      `;
  return tweet;
}

//Appends all tweets in database to tweet container div
const renderTweets = (tweets) => {
  const $container = $('.tweet-container');
  $container.empty();

  for (const tweet of tweets) {
    $container.prepend(createTweetElement(tweet));
  }
};

//loads all tweets to page using AJAX ($.get is jquery shorthand for AJAX get request)
const loadTweets = () => {
  $.get('/tweets', res => {
    renderTweets(res);
  });
};

//Toggles visibility of new tweet form when clicking navbar button
const navTweetButton = () => {
  if ($('.new-tweet').is(':hidden')) {
    $('.new-tweet').slideDown('slow');
    $('#tweet-text').focus();
  } else {
    $('.new-tweet').slideUp('slow');
  }
}

const formSubmission = function (e) {
  //use $(this) over direct class/id selecting to not have to traverse the entire DOM every time we select an element

  e.preventDefault();

  //Remove any error messages on submission
  $(this).children('.errorContainer').empty();

  const $submission = $(this).serialize();
  const $input = $submission
    .split('=')
    .slice(1)
    .join('')
    .split('%20')
    .join(' ');

  if (!$input) {
    $(this)
      .children('.errorContainer')
      .append(`<p class="error">Enter some text!</p>`);
    $(this)
      .children('.errorContainer')
      .children('.error')
      .hide()
      .slideDown('fast');
  }

  if ($input.length > 140) {
    $(this)
      .children('.errorContainer')
      .append(`<p class="error">Too many characters!</p>`);
    //show error
    $(this)
      .children('.errorContainer')
      .children('.error')
      .hide()
      .slideDown('fast');
  }

  if ($input && $input.length <= 140) {
    $.post('/tweets', $submission);
    $('#tweet-text').val('');
    //hide tweet form
    $(this)
      .parent()
      .slideUp('slow');
    //reset char counter
    $(this)
      .children('.button-and-counter')
      .children('.counter')
      .text('140');
    //load most recent tweet
    loadTweets();
  }
};