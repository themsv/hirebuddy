import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import CustomSelect from "../components/custom-dropdown";

describe("CustomSelect", () => {
  test("it should render correctly", () => {
    render(<CustomSelect />);
    expect(screen.getByTestId("custom-select")).toBeTruthy();
  });

  it("should correctly select when option selected", async () => {
    render(
      <CustomSelect
        items={[
          { key: "1", value: "Hire buddy 1", iconColor: "#000" },
          { key: "2", value: "Hire buddy 2", iconColor: "#000" },
          { key: "3", value: "Hire buddy 3", iconColor: "#000" },
        ]}
        label="Hirebuddy"
        onChange={(e) => console.log(e)}
      />
    );
    fireEvent.mouseDown(screen.getByRole("button"));
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(/Hire buddy 1/i));
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(/Hire buddy 1/i);
    });
  });

  test("it should have equal list elements as prop", async () => {
    render(
      <CustomSelect
        items={[
          { key: "1", value: "Hire buddy 1", iconColor: "#000" },
          { key: "2", value: "Hire buddy 2", iconColor: "#000" },
          { key: "3", value: "Hire buddy 3", iconColor: "#000" },
        ]}
        label="Hirebuddy"
      />
    );
    fireEvent.mouseDown(screen.getByRole("button"));
    const listbox = within(screen.getByRole("listbox"));

    expect(listbox.getAllByRole("option")).toHaveLength(3);
  });

  test("it should select the option if value prop is passed", async () => {
    render(
      <CustomSelect
        items={[
          { key: "1", value: "Hire buddy 1", iconColor: "#000" },
          { key: "2", value: "Hire buddy 2", iconColor: "#000" },
          { key: "3", value: "Hire buddy 3", iconColor: "#000" },
        ]}
        value="2"
        label="Hirebuddy"
      />
    );
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(/Hire buddy 2/i);
    });
  });
});
