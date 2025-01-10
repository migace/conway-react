import { GRID_SIZE } from "../../../config";

interface ICountNeighboursProps {
    grid: number[][];
    x: number;
    y: number;
}

export const countNeighbours = ({ grid, x, y }: ICountNeighboursProps) => {
    const directions = [-1, 0, 1];
    let count = 0;  
  
    directions.forEach((dx) => {
      directions.forEach((dy) => {
        if (dx === 0 && dy === 0) {
          return;
        }
  
        const newX = x + dx;
        const newY = y + dy;
  
        if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
          count += grid[newX][newY];
        }
      });
    });
  
    return count;
  };