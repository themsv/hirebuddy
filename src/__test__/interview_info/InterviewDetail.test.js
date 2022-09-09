import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
  act,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import FormStepper from "../../components/form-stepper";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { MOCKED_USERS } from "../technical_round/mockData";
import userEvent from "@testing-library/user-event";
const mockStore = configureMockStore();
const mockedStore = mockStore({ questions: MOCKED_USERS });
mockedStore.dispatch = jest.fn();

jest.mock("axios");

describe("Interview Detail", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("step-1")).toBeTruthy();
  });

  test("it should render error message if any of form inputs are empty", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormStepper />
          </Provider>
        </BrowserRouter>
      );
    });

    fireEvent.click(screen.getByTestId("next-btn"));
    await waitFor(() => {
      expect(screen.getByText(/enter date/i)).toBeInTheDocument();
      expect(screen.getByText(/enter mode/i)).toBeInTheDocument();
      expect(screen.getByText(/enter type/i)).toBeInTheDocument();
    });
  });

  test("it should prepulate data once auto complete is selected", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormStepper />
          </Provider>
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByRole("combobox", {
      name: /search oracle id/i,
    });
    const view = screen.getByTestId("autocomplete-search");

    act(() => userEvent.click(within(view).getByTestId("ArrowDropDownIcon")));
    act(() => fireEvent.change(searchInput, { target: { value: 176053 } }));
    await waitFor(() => {
      expect(searchInput.value).toBe("176053");
    });
  });
});
