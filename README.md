# Mortal Kombat - Fast Food edition

This is a two player fighter game basis on the original Mortal Kombat game. Players will get to choose their favorite fast food chain and pit them against each other. The players will then take turns pressing the space bar for a duration of 5 seconds each turn. Whichever player has the highest number of key presses for that round does damage to their oppenent.

The HTML contains google fonts and images created by midjourney AI.
The CSS uses flexbox and mostly toggles the hidden class for prompt within the game
The Javascript contains arrays, for of loops to cycle through character selection, eventlisteners for mouseover, mouseout, and click events. Seperate functions were created for the timer option to start and stop and record keypresses for the spacebar. Functions to check the players health was created along with end game functions to determine what happens when players health reach 0.

Overall the game does still contain some glitches:
When player 1 hovers over a character the name does not disappear
Player 1 directions prompt appears after game logic ends and you still have to click the button to see the final results
