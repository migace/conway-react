import { describe, expect, test } from "vitest";
import { nextGeneration } from "./nextGeneration";

describe("nextGeneration", () => {
  test("handles underpopulation (cell dies with fewer than 2 neighbours)", () => {
    const grid = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const result = nextGeneration(grid);
    expect(result[1][1]).toBe(0);
  });

  test("handles overpopulation (cell dies with more than 3 neighbours)", () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const result = nextGeneration(grid);
    expect(result[1][1]).toBe(0);
  });

  test("handles reproduction (dead cell becomes alive with exactly 3 neighbours)", () => {
    const grid = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ];
    const result = nextGeneration(grid);
    expect(result[1][1]).toBe(1);
  });

  test("handles stable configurations (cells remain unchanged if conditions are met)", () => {
    const grid = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const result = nextGeneration(grid);
    expect(result).toEqual(grid);
  });
});
