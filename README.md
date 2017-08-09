## Wolfgang

[Wolfgang][wolfgang] is a violin-specific adaptation of Guitar Hero, named after the famous composer Wolfgang Amadeus Mozart. In the original Guitar Hero, players press the buttons and the strum tab on the guitar controller according to the pattern shown on the screen. In Wolfgang, the strumming is replaced by bowing, and emphasis is placed on holding down the bow stroke for the duration of the note.

## Features
![Start Screen][start]

- Players see a calming start screen before they choose to play the game.

![In Game][game]

- Each note of the song is represented by "blocks" which fall down in sync with the music
- Players can press the correct "string" (for the 4 strings on the violin) key as well as the "bow" key to play, for a variable duration
- The Player's current score is accumulated at the top.
- Player can restart the game at anytime, if they so choose (pressing R)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- Webpack to bundle and serve up the various scripts,
- `Howler.js` for audio,
- `HTML5 Canvas` for DOM manipulation and rendering, as well as the visuals

### Bonus features

Some future implementations for this game include:

- [ ] Add options for faster speed, pause, mute
- [ ] Add options for different songs

[start]: ./docs/start.png
[game]: ./docs/game.png
[wolfgang]: https://keius.github.io/Wolfgang/#/
