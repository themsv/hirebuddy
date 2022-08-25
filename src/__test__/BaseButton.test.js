import { render, screen } from "@testing-library/react";
import BaseButton from "../components/button";

describe("BaseButton", () => {
  test("it should render correctly", () => {
    render(<BaseButton />);
    expect(screen.getByTestId("button")).toBeTruthy();
  });

  test("it should render children prop", () => {
    render(<BaseButton>HireBuddy</BaseButton>);
    expect(screen.getByText(/HireBuddy/i)).toBeInTheDocument();
  });

  test("it should render a disabled button if the prop passed is disabled", () => {
    render(<BaseButton disabled>HireBuddy</BaseButton>);
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  test("it should render a button as a Link, checks for href attribute", () => {
    render(<BaseButton href="#hirebuddy">HireBuddy</BaseButton>);
    const buttonAsLink = screen.getByRole("link", { name: /HireBuddy/i });
    expect(buttonAsLink).toHaveAttribute("href", "#hirebuddy");
  });
});
