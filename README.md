# Space Shooter

A space shooter game built using Vue 3 where the player controls a spaceship to shoot at incoming enemies.

Live Demo: [https://space-shooter-manas94guptas-projects.vercel.app/](https://space-shooter-manas94guptas-projects.vercel.app/)

## Game Mechanics

- Player: The player ship is spawned at the bottom of the screen in the center.
- Player Movement: The player can move left and right using the arrow keys and shoot using the space bar.
- Enemies: Enemies of random sizes are spawned at random locations from the top of the screen. Larger enemies move faster than smaller enemies.
- Enemy Movement: Enemies move from top to bottom of the screen.
- Scoring: The player earns 10 points for each enemy they destroy.
- Difficulty: As the player progresses through the game the enemies become faster.
- Game Over: The player starts with 3 lives. For every enemy reaching the bottom of the screen or colliding with the player, the player loses a life. If the player loses all their lives, the game is over.

## How to setup and run locally

- Clone the git repository
- Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

- Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173/cards](http://localhost:5173/cards) on your browser to see the app.

## Available Scripts

- `build` - Builds the app for production
- `lint` - Runs the linter
- `format` - Runs prettier formatting
- `type-check` - Runs typescript type checking
