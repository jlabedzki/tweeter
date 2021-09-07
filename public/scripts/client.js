const createTweetElement = function (tweetData) {
  const tweet = `
    <article class="tweet">
      <header>
        <div>
          <img src=${tweetData.user.avatars} />
          <span>${tweetData.user.name}</span>
        </div>
      </header>
      <p>${tweetData.content.text}</p>
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
  $('.new-tweet form').on('submit', function (e) {
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
    }
    if (input.length > 140) {
      $(this).children('.errorContainer').append(`<p class="error">Too many characters!</p>`);
    }
    if (!input) {
      $(this).children('.errorContainer').append(`<p class="error">Enter some text!</p>`);
    }
  });

  const loadTweets = () => {
    $.get('/tweets', res => {
      renderTweets(res);
    });
  }

  loadTweets();

});
