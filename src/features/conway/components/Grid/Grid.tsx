import { useCallback, useEffect, useRef, useState } from "react";
import { createRandomGrid } from "./utils/createRandomGrid";
import { nextGeneration } from "./utils/nextGeneration";

interface IGridProps {
  gridSize: number;
  cellSize: number;
  interval: number;
}

export const Grid = ({ gridSize, cellSize, interval }: IGridProps) => {
  const [grid, setGrid] = useState<number[][]>(createRandomGrid);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number>(interval);

  const runSimulation = useCallback(() => {
    setGrid((prevGrid) => nextGeneration(prevGrid));
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(runSimulation, interval);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [running, runSimulation, interval]);

  const toggleRunning = () => {
    setRunning((running) => !running);
  };

  return (
    <div>
      <button style={{ margin: "24px" }} onClick={toggleRunning}>
        {running ? "Stop" : "Start"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
        }}
      >
        {grid.map((row, x) =>
          row.map((cell, y) => (
            <div
              key={`${x}-${y}`}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: cell ? "black" : "white",
                border: "1px solid #ddd",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};
