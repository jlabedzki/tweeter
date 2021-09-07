const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


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
      <span>10 days ago</span>
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

const $tweet = createTweetElement(tweetData);

console.log(tweetData.user.avatars);

$(document).ready(() => {
  $('.tweet-container').append($tweet);
});
/*
<article class="tweet">
<header>
  <div>
    <i class="far fa-user"></i>
    <span>Newton</span>
  </div>
  <span class="handle">@SirIsaac</span>
</header>
<p>For every action there is an equal an opposite reaction, yo.</p>
<footer>
  <span>10 days ago</span>
  <div>
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</article>
*/