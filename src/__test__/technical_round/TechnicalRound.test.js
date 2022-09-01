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
import { MOCKED_QUESTIONS, MOCKED_SCORE } from "./mockData";

const mockStore = configureMockStore();
const mockedStore = mockStore({ questions: MOCKED_QUESTIONS });
mockedStore.dispatch = jest.fn();

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

  // test("it should add the active-nav class to the selected item from category", async () => {
  //   await act(async () => {
  //     render(
  //       <ThemeProvider theme={themeOptions}>
  //         <BrowserRouter>
  //           <Provider store={mockedStore}>
  //             <TechnicalRound type="core-xt" />
  //           </Provider>
  //         </BrowserRouter>
  //       </ThemeProvider>
  //     );
  //   });

  //   const topics = within(screen.getByTestId("topics-list"));
  //   // fireEvent.click(listbox.getByText(/NFR's/i));

  //   fireEvent.mouseDown(topics.getAllByRole("button")[1]);
  //   // const listbox = within(topics.getByRole("listbox"));
  //   fireEvent.click(topics.getAllByTestId("menuitem")[1]);

  //   await waitFor(() => {
  //     expect(topics.getByRole("button")).toHaveTextContent(
  //       /Theoretical Knowledge/i
  //     );
  //   });
});
