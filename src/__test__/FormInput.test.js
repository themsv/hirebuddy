import { fireEvent, render, screen } from "@testing-library/react";
import FormInput from "../components/form-input";

describe("FormInput", () => {
  test("it should render correctly", () => {
    render(<FormInput />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  test("should set size to small if passed prop is small", () => {
    render(<FormInput size="small" />);
    expect(screen.getByRole("textbox").className).toMatch(/small/i);
  });

  test("It should output entered value in input", () => {
    render(<FormInput />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "HireBuddy" } });
    expect(input.value).toBe("HireBuddy");
  });

  test("It should accept only number if the type is number", () => {
    render(<FormInput type="number" />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "HireBuddy" } });
    expect(input.value).toBe("");
  });
});
