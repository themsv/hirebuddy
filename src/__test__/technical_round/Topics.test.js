import {
  fireEvent,
  render,
  act,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import TopicsList from "../../components/technical-round/components/topics";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "../../Theming";
import { MOCKED_QUESTIONS, MOCKED_SCORE } from "./mockData";
import userEvent from "@testing-library/user-event";

const mockStore = configureMockStore();
const mockedStore = mockStore({ questions: MOCKED_QUESTIONS });
mockedStore.dispatch = jest.fn();

const selectedCategory = MOCKED_SCORE[0];

describe("Topics List", () => {
  test("it should render correctly", () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <TopicsList selectedCategory={selectedCategory} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("topics-list")).toBeTruthy();
  });

  test("Should call onChange method", () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <TopicsList selectedCategory={selectedCategory} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getAllByRole("button")[0]).not.toHaveClass("Mui-expanded");
  });

  test("Should call onChange method", async () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <TopicsList selectedCategory={selectedCategory} />
      </ThemeProvider>
    );

    // const actions = container.getElementsByClassName("questions-actions");

    const accordion = within(screen.getByTestId("step-0"));
    const item = within(accordion.getAllByTestId("questions-list-item")[0]);

    // console.log("inside testing", item.getAllByRole("button")[1]);
    // fireEvent.mouseDown(actions.getByTestId("custom-select"));
    // fireEvent.click(item.getByText(/Theoretical Knowledge/i));
    // expect(screen.getAllByRole("button")[0]).not.toHaveClass("Mui-expanded");

    const myCustomSelect = within(item.getByTestId("custom-select"));
    const myButton = myCustomSelect.getAllByRole("button")[0];
    await act(async () => userEvent.click(myButton));

    const listbox = within(screen.getByRole("listbox"));
    // fireEvent.click(listbox.getByText(/Hire buddy 1/i));

    const selectedItem = listbox.getByText(/Theoretical Knowledge/i);
    await act(async () => userEvent.click(selectedItem));

    await waitFor(() => {
      expect(myButton).toHaveTextContent(/Theoretical Knowledge/i);
    });

    // expect(screen.getByText("Theoretical Knowledge")).toBeInTheDocument();
  });

  test("Should open dialog box when add feedback is clicked", async () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <TopicsList selectedCategory={selectedCategory} />
      </ThemeProvider>
    );
    const accordion = within(screen.getByTestId("step-0"));
    const item = within(accordion.getAllByTestId("questions-list-item")[0]);
    const myCustomSelect = item.getByTestId("add-feedback");
    await act(async () => userEvent.click(myCustomSelect));
    await waitFor(() => {
      expect(screen.getByTestId("topic-dialog")).toBeInTheDocument();
    });
  });

  test("Should open close the dialod box when feedback added", async () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <TopicsList selectedCategory={selectedCategory} />
      </ThemeProvider>
    );
    const accordion = within(screen.getByTestId("step-0"));
    const item = within(accordion.getAllByTestId("questions-list-item")[0]);
    const myCustomSelect = item.getByTestId("add-feedback");
    await act(async () => userEvent.click(myCustomSelect));
    await act(async () => {
      const input = screen.getByPlaceholderText("Enter the feedback");
      fireEvent.change(input, { target: { value: "some feedback" } });
      const button = screen.getAllByTestId("button")[1];
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(screen.getByTestId("topic-dialog")).not.toContainElement(
        screen.getByPlaceholderText("Enter the feedback")
      );
      // expect(hasInputValue(input, "123")).toBe(true)
    });
  });
});
