import { GRID_SIZE } from "../../../config";

// Create a random grid of dead and alive cells
export const createRandomGrid = (): number[][] => {
  return Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => (Math.random() > 0.5 ? 1 : 0))
  );
};



