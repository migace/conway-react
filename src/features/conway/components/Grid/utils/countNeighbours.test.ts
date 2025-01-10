import { describe, expect, test } from "vitest";
import { countNeighbours } from "./countNeighbours";

describe("countNeighbours", () => {
  test("counts neighbours in the middle of the grid", () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ];
    const result = countNeighbours({ grid, x: 2, y: 2 });
    expect(result).toBe(4);
  });

  test("counts neighbours at the edge of the grid", () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ];
    const result = countNeighbours({ grid, x: 0, y: 0 });
    expect(result).toBe(2);
  });

  test("counts neighbours at a corner of the grid", () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ];
    const result = countNeighbours({ grid, x: 4, y: 4 });
    expect(result).toBe(2);
  });

  test("returns 0 when all neighbours are 0", () => {
    const grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const result = countNeighbours({ grid, x: 2, y: 2 });
    expect(result).toBe(0);
  });

  test("returns 0 for a single cell grid", () => {
    const grid = [[0]];
    const result = countNeighbours({ grid, x: 0, y: 0 });
    expect(result).toBe(0);
  });

  test("counts neighbours correctly for a 1 surrounded by 1s", () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const result = countNeighbours({ grid, x: 1, y: 1 });
    expect(result).toBe(8);
  });
});
