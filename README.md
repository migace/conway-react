# Conway's Game of Life (React Implementation)

## Overview

This project implements Conway's Game of Life using React. The game is a zero-player game that evolves based on its initial state and predefined rules. The grid updates every tick (~0.2s), simulating the changes in the cells' states over time.

## Features

- **Dynamic Grid Initialization**: A 50x50 grid is generated with cells randomly assigned as alive or dead.
- **Real-Time Ticking**: The grid updates every 0.2 seconds, applying the rules of the game.
- **Responsive UI**: The grid is displayed using HTML and styled with CSS for easy visualization.
- **State Management**: Utilizes React's state management for seamless updates.
- **Unit Testing**: Includes unit tests for core logic using a modern testing library.

## Rules of the Game

1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies (overcrowding).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

## Installation and Running the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

Open your browser and navigate to http://localhost:5173 to view the application.

### Tools & Technologies

- React: Frontend framework.
- CSS: Styling for the grid and cells.
- TypeScript: Used for type safety and maintainability.
