# LightsOut-game

A classic Lights Out puzzle game built with React and Vite, challenging players to extinguish all lights on the board by clicking tiles.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/lightsOut-game.git`
2. **Navigate to the project directory:** `cd lightsOut-game`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Game Mechanics

The game follows the classic Lights Out rules:

* The player clicks on tiles to toggle their state (on/off).
* Clicking a tile also toggles the state of its horizontally and vertically adjacent tiles (one step away).
* The goal is to turn off all lights on the board.
* The game starts automatically with a randomly lit board.  Board sizes range from 2x2 to 7x7.
* Upon winning the game, a message appears notifying the player of their success.


## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.1
* CSS

## State Management

The game state (the board's light configuration) is managed using the `useState` hook. The board is represented internally as a 2D array.

## Deployment

The application is deployed on Netlify: https://funchosa-lights-out-game.netlify.app

## Future Enhancements

* Implement a scoring system (e.g., awarding points based on the number of moves or time taken).


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.