import FormSelectMultiple from "../components/form-select-multiple";

import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";

describe("FormSelect", () => {
  test("it should render correctly", () => {
    render(<FormSelectMultiple />);
    expect(screen.getByTestId("multi-select")).toBeTruthy();
  });
  // it("should correctly when option selected", async () => {
  //   render(
  //     <FormSelectMultiple
  //       items={[
  //         { key: "1", value: "Hire buddy 1" },
  //         { key: "2", value: "Hire buddy 2" },
  //       ]}
  //       label="Hirebuddy"
  //     />
  //   );
  //   fireEvent.mouseDown(screen.getByRole("button"));
  //   const listbox = within(screen.getByRole("listbox"));
  //   fireEvent.click(listbox.getByText(/Hire buddy 1/i));
  //   await waitFor(() => {
  //     expect(screen.getByRole("button")).toHaveTextContent(/Hire buddy 1/i);
  //   });
  // });
  // test("it should have equal list elements as prop", async () => {
  //   render(
  //     <FormSelectMultiple
  //       items={[
  //         { key: "1", value: "Hire buddy 1" },
  //         { key: "2", value: "Hire buddy 2" },
  //         { key: "3", value: "Hire buddy 3" },
  //       ]}
  //       label="Hirebuddy"
  //     />
  //   );
  //   fireEvent.mouseDown(screen.getByRole("button"));
  //   const listbox = within(screen.getByRole("listbox"));

  //   expect(listbox.getAllByRole("option")).toHaveLength(3);
  // });
});
