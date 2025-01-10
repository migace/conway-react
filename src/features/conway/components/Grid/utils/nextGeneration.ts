import { countNeighbours } from "./countNeighbours";

export const nextGeneration = (grid: number[][]) => grid.map((row, x) =>
    row.map((cell, y) => {
      const neighbours = countNeighbours({ grid, x, y });

      if (cell && (neighbours < 2 || neighbours > 3)) {
        return 0; // Under / Overpopulation
      }
      
      if (!cell && neighbours === 3) {
        return 1; // Reproduction
      }

      return cell;
    })
  );