const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants, yo."
  },
  "created_at": 1461116232227
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



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
    const newTweet = createTweetElement(tweet);
    $('.tweet-container').append(newTweet);
  }
};

$(document).ready(() => {
  renderTweets(data);
});
