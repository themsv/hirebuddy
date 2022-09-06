import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FormStepper from "../components/form-stepper";
import { store } from "../store/store";
import configureMockStore from "redux-mock-store";
import { removeUser } from "../store/user/userSlice";

const mockStore = configureMockStore();

describe("Stepper", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("stepper")).toBeTruthy();
  });

  test("it should not display step 2 if type is not selected", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("category-list")).not.toBeInTheDocument();
    });
  });

  test("it should take to step 3 if next button is clicked twice", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    fireEvent.click(screen.getByTestId("next-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("step-3")).toBeTruthy();
    });
  });

  test("it should take to step 2 if prev button is clicked", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    fireEvent.click(screen.getByTestId("next-btn"));
    fireEvent.click(screen.getByTestId("prev-btn"));
    fireEvent.click(screen.getByTestId("prev-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("step-1")).toBeInTheDocument();
    });
  });

  test("it should take to step 2 if prev button is clicked", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    fireEvent.click(screen.getByTestId("next-btn"));

    const inputEl = container.querySelector(`input[name="relaventExperience"]`);
    inputEl.value = "4";

    const inputE2 = container.querySelector(`textarea[name="feedback"]`);
    inputEl.value =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    container.querySelector(`input[name="recommendedCareerStage"]`).value =
      "Associate L1";

    container.querySelector(`input[name="outcome"]`).value = "rejected";
    fireEvent.click(screen.getByText("Finish"));

    await waitFor(() => {
      //   expect(inputEl.value).toBe("4");
      expect(screen.getByText("Finish")).toHaveClass("Mui-disabled");
      //   expect(screen.getByTestId("success-page")).toBeInTheDocument();
    });
  });
});
