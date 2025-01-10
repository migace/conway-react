import { Grid } from "./components/Grid";
import { CELL_SIZE, GRID_SIZE, TICKS_INTERVAL } from "./config";

export const Conway = () => {
  return (
    <>
      <h1>Game of Life</h1>
      <Grid
        gridSize={GRID_SIZE}
        cellSize={CELL_SIZE}
        interval={TICKS_INTERVAL}
      />
    </>
  );
};
