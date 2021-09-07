$(document).ready(() => {
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

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      $('.tweet-container').prepend(createTweetElement(tweet));
    }
  };

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

  //use $(this) over direct class/id selecting to not have to traverse the entire DOM every time we select an element
  $('.new-tweet form').on('submit', function (e) {
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
  });

  const loadTweets = () => {
    $.get('/tweets', res => {
      renderTweets(res);
    });
  }

  loadTweets();
});
