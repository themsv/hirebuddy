import AutoCompleteBox from "../components/autocomplete/autocomplete-dropdown";
import {
  fireEvent,
  getByRole,
  getByText,
  render,
  within,
  screen,
} from "@testing-library/react";

describe("AutoComplete", () => {
  test("it should render correctly", () => {
    render(<AutoCompleteBox />);
    expect(screen.getByTestId("autocomplete-search")).toBeTruthy();
  });

  it("it should have equal list elements as prop", async () => {
    const { debug } = render(
      <AutoCompleteBox
        usersList={[
          { key: "1", value: "Hire buddy 1" },
          { key: "2", value: "Hire buddy 2" },
          { key: "3", value: "Hire buddy 3" },
        ]}
        value={"Search Oracle ID"}
        label="Hirebuddy"
        setValue={(e) => console.log(e)}
      />
    );

    fireEvent.mouseDown(
      within(screen.getByTestId("autocomplete-search")).getByTestId(
        "ArrowDropDownIcon"
      )
    );
  });
});
