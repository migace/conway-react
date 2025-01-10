import { describe, expect, test, vi } from "vitest";
import { createRandomGrid } from "./createRandomGrid";

const MOCK_GRID_SIZE = 5;

// Mock GRID_SIZE for testing purposes
vi.mock("../../../config", () => ({
  GRID_SIZE: 5,
}));

describe("createRandomGrid", () => {
  test("generates a grid of the correct size", () => {
    const grid = createRandomGrid();
    expect(grid.length).toBe(MOCK_GRID_SIZE);
    grid.forEach((row) => {
      expect(row.length).toBe(MOCK_GRID_SIZE);
    });
  });

  test("generates a grid with values 0 or 1", () => {
    const grid = createRandomGrid();
    grid.forEach((row) => {
      row.forEach((cell) => {
        expect([0, 1]).toContain(cell);
      });
    });
  });

  test("creates a non-empty grid", () => {
    const grid = createRandomGrid();
    expect(grid.length).toBeGreaterThan(0);
    grid.forEach((row) => {
      expect(row.length).toBeGreaterThan(0);
    });
  });
});
