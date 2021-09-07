//Prevent user tweet code injections
const escape = str => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweetData) {

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

const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $('.tweet-container').prepend(createTweetElement(tweet));
  }
};

$(document).ready(() => {
  $('.new-tweet').hide();

  //Toggles visibility of new tweet form when clicking navbar button
  $('#writeTweet').click(() => {
    if ($('.new-tweet').is(':hidden')) {
      $('.new-tweet').slideDown('slow');
      $('#tweet-text').focus();
    } else {
      $('.new-tweet').slideUp('slow');
    }
  })


  $('.new-tweet form').on('submit', function (e) {
    //Remove any error messages on submission
    $(this).children('.errorContainer').empty();

    const data = $(this).serialize();
    const input = data
      .split('=')
      .slice(1)
      .join('')
      .split('%20')
      .join(' ');

    e.preventDefault();

    if (input && input.length <= 140) {
      $.post('/tweets', data);
      loadTweets();
    }
    if (input.length > 140) {
      $(this)
        .children('.errorContainer')
        .append(`<p class="error">Too many characters!</p>`);
      $('.error')
        .hide()
        .slideDown('fast');
    }
    if (!input) {
      $(this)
        .children('.errorContainer')
        .append(`<p class="error">Enter some text!</p>`);
      $('.error')
        .hide()
        .slideDown('fast');
    }
  });

  const loadTweets = () => {
    $.get('/tweets', res => {
      renderTweets(res);
    });
  }

  loadTweets();

});
