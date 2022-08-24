import { calculateWinner } from "./winner";

describe("calculateWinner", () => {
  it("returns the winner when there is a winning line", () => {
    // setup
    const squares = ["X", "X", "X", null, null, null, null, null, null];

    // act
    const result = calculateWinner(squares);

    // assert
    expect(result).toBe("X");
  });

  it("returns null when there isn't a winning line", () => {
    // setup
    const squares = ["X", "X", "O", null, null, null, null, null, null];

    // act
    const result = calculateWinner(squares);

    // assert
    expect(result).toBeNull();
  });

  // ...
});
