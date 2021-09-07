# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The front-end of Tweeter is made with HTML5, CSS3, JavaScript, jQuery, and AJAX.

## Purpose

BEWARE: This project was built for learning purposes. It is not intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Final Product

Register page
!["Register page"](/screenshots/1.png)


## Dependencies

- body-parser
- chance
- express
- md5
- timeago.js (included in a script tag in index.html)

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.
- Head over to http://localhost:8080/ to get started!

## Known Bugs

- If you have LastPass chrome extension installed, you will get an assertion error in the console when pressing 'enter' in the new tweet textarea.

## Features

- Single page app (`SPA`) that communicates with the server via AJAX

- `Navbar`:
   - fixed to top
   - has functional button (aligned right) that, when clicked, will show the new tweet form (if it was hidden) with a slide-down animation and autofocus the text area, or hide the new tweet form (if it was visible) with a slide-up animation
     - button has on hover animation effect
     - button disappears when user scrolls > 400px
   - dynamic background:
     - seethrough when user is at top of page
     - blue when user scrolls > 400px

- `New tweet box`:
  - Dynamic - slides in an out of view depending on buttons clicked
  - Contains a form for submitting tweets, which itself contains:
    - a textarea for user input
    - a left-aligned button for submitting tweets
    - a right aligned, dynamic counter which tracks the number of characters a user has entered
      - the counter starts at 140, counts down to 0, and then turns red and displays a negative number when the user inputs more than 140 characters
    - dynamic error messages (slide-in, slide-out) if the user tries to submit no text or too much text

- `List of tweets`:
  - Displays all tweets in the database in reverse chronological order
  - Individual tweets have:
    - box shadow on hover
    - a header, containing the user profile picture and name (left-aligned), as well as their handle (right-aligned)
    - a body, which contains the tweet text
    - a footer, which displays how long ago the tweet was created (left-aligned) and flag, retweet, and like action icons (right-aligned)

- `Back to top button`:
  - Fixed to bottom right
  - Only visible when user scrolls > 400px
  - Animated (bob up and down)
  - On hover: stop animation and increase size slightly
  - On click: Scrolls the user to the top of the page (animated) and autofocuses on the text area of new tweet form
    - if the new tweet form was hidden, then it brings it to view with slide-down animation