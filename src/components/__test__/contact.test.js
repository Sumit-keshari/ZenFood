import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("hello", () => {
  test("In contact page check button is here or not", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("In contact page check button is here or not", () => {
    render(<Contact />);
  });
  test("In contact page check button is here or not", () => {
    render(<Contact />);
  });
  test("In contact page check button is here or not", () => {
    render(<Contact />);
  });
});
