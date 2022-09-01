import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
  act,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TechnicalRound from "../../components/technical-round";
import { store } from "../../store/store";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "../../Theming";
import {
  MOCKED_API_QUESTIONS,
  MOCKED_QUESTIONS,
  MOCKED_SCORE,
} from "./mockData";
import axios from "axios";
import { fetchQuestions } from "../../store/questions/questionsAction";
import userEvent from "@testing-library/user-event";

const mockStore = configureMockStore();
const mockedStore = mockStore({ questions: MOCKED_QUESTIONS });
mockedStore.dispatch = jest.fn();

jest.mock("axios");

describe("Technical Round", () => {
  test("it should render correctly", () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <BrowserRouter>
          <Provider store={store}>
            <TechnicalRound type="core-xt" score={MOCKED_SCORE} />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByTestId("step-2")).toBeTruthy();
  });

  test("it should prepopulate data with data recieved from redux store", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={themeOptions}>
          <BrowserRouter>
            <Provider store={mockedStore}>
              <TechnicalRound type="core-xt" />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId("category-list")).toBeTruthy();
      expect(screen.getByTestId("topics-list")).toBeTruthy();
    });
  });

  test("it should add the active-nav class to the selected item from category", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={themeOptions}>
          <BrowserRouter>
            <Provider store={mockedStore}>
              <TechnicalRound type="core-xt" />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );
    });

    const listbox = within(screen.getByTestId("category-list"));
    fireEvent.click(listbox.getByText(/NFR's/i));

    await waitFor(() => {
      expect(screen.getByText(/NFR's/i)).toHaveClass("active-nav");
    });
  });

  test("it should dispatch action and get data for questions", async () => {
    const mockedAxios = axios;
    let res = { data: MOCKED_API_QUESTIONS };
    mockedAxios.get.mockReturnValueOnce(res);
    render(
      <ThemeProvider theme={themeOptions}>
        <BrowserRouter>
          <Provider store={store}>
            <TechnicalRound type="core-xt" />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
    await act(async () => {
      await fetchQuestions("core-xt");
    });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
  });

  test("it should add the active-nav class to the selected item from category", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={themeOptions}>
          <BrowserRouter>
            <Provider store={mockedStore}>
              <TechnicalRound
                type="core-xt"
                onScoreChange={() => console.log("score changed")}
              />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );
    });

    const accordion = within(screen.getByTestId("step-0"));
    const item = within(accordion.getAllByTestId("questions-list-item")[0]);
    const myCustomSelect = within(item.getByTestId("custom-select"));

    await act(async () => userEvent.click(myCustomSelect.getByRole("button")));
    const listbox = within(screen.getByRole("listbox"));
    const input = listbox.getAllByRole("option")[3];
    fireEvent.click(input);
    await waitFor(() => {
      expect(accordion.getByTestId("topic-score")).toHaveTextContent(
        "Score 3.00"
      );
    });
  });
});
