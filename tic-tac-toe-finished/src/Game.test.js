import { Square } from "./Game";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Square", () => {
  const value = "X";
  const onClick = jest.fn();

  it("renders the value", () => {
    // setup
    const value = "X";

    // act
    render(<Square value={value} onClick={onClick} />);

    // assert
    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("calls the onClick callback", () => {
    // setup
    const onClick = jest.fn();

    // act
    render(<Square value={value} onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));

    // assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
