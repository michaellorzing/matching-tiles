This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React: The Gathering

# Overview

Test your memory! Each time you click a card, the cards displayed will shuffle. Don't click the same one twice, and your score will increase. Forget which one you click and select it a second time, you lose!

# Technologies used

HTML
CSS
JavaScript
React.js

# Brief Explantion

The card selections are stored in an object of arrays. The .map method iterates through the array of objects and returns single instances of the cards. The ID associated with each card is captured and passed through a function that pushes the user's selected ID to an array stored in state. The indexOf method is then employed to check if the currently selected id exists in the array in state.

# Try it yourself

https://michaellorzing.github.io/matching-tiles/
