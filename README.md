# 03b-memory-game

![](img/Memoy-game-screenshot.png)

Building a memory game in Javascript:
* Using arrays to change the cards shown in the DOM
* Adding EventListeners, appending elements  
* Using CSS to create a flip effect
* Using a loop to cycle through the cards
* Showing succesful matches with prompts


Link to the memory game:
https://mickdellaert.github.io/03b-memory-game/

---

# Title: Memory game

- Repository: `Memory-game`
- Type of Challenge: `Learning Challenge`
- Duration: take your time
- Deployment strategy: Github page
- Team challenge : `solo

## Learning Objectives
- Change things in the DOM (Aka canvas = cheating)
- Array manipulation

## The Mission
We want to recreate the game `memory`. It is a game where  you have a bunch of cards. Each card contains an image. Of each image there are exactly two cards. The cards are placed in a random order. You get to turn them around. If you turned around two cards they either turn back so you can't see their image if they did not match. And if they did match they stay image face visible.

### Must-have features
- Clicking cards turns them around
- Randomly position the cards
- Readme, but that shouldn't even have to be said
- Explanation on the page itself

### Nice-to-have features
- Make it playable by keyboard
- Let a user define custom image urls
- Make it pleasing to look at
- Multiplayer (local)

### Tips (You might want to only read this if you are stuck)

Here is a good way to split up the work. You might want to try to split it up even further:

- Have a bunch of square images (hard code their order, use html)
- Make them turn on click
- Make their order random using javascript
- Turn them back around if you clicked two
- Then implement the logic to only turn back if they don't match

![You've got this!](http://78.media.tumblr.com/f9247799ae2fe6613f643957020101c6/tumblr_inline_n80n8u8pSz1sbdww6.gif)

