import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FormStepper from "../components/form-stepper";
import { store } from "../store/store";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import { submitCandidate } from "../store/candidate/candidate.action";

jest.mock("axios");

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
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("next-btn"));
    const step1 = container.querySelector(`div[data-testid="step-1"]`);
    await waitFor(() => {
      expect(step1).not.toBeTruthy();
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

  test("it should complete the step 2 and display success message", async () => {
    const mockStore = configureMockStore();
    const storeWithUser = mockStore({
      candidates: {
        submitted: true,
      },
      user: {
        users: [
          {
            value: {
              email: "sample@gmail.com",
              firstName: "john",
              lastName: "Deo",
            },
          },
        ],
      },
    });
    storeWithUser.dispatch = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <Provider store={storeWithUser}>
          <FormStepper />
        </Provider>
      </BrowserRouter>
    );

    const mockedAxios = axios;
    let res = { data: {} };
    mockedAxios.post.mockReturnValueOnce(res);

    fireEvent.click(screen.getByTestId("next-btn"));
    fireEvent.click(screen.getByTestId("next-btn"));
    const inputEl = container.querySelector(`input[name="relaventExperience"]`);
    fireEvent.change(inputEl, { target: { value: "4" } });

    const inputE2 = container.querySelector(`textarea[name="feedback"]`);
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    fireEvent.change(inputE2, { target: { value: text } });

    const el3 = container.querySelector(`input[name="recommendedCareerStage"]`);
    fireEvent.change(el3, { target: { value: "Associate L1" } });
    const el4 = container.querySelector(`input[name="outcome"]`);
    fireEvent.change(el4, { target: { value: "rejected" } });
    fireEvent.click(screen.getByText("Finish"));

    await waitFor(() => {
      expect(inputEl.value).toBe("4");
      expect(inputE2.value).toContain("Lorem ipsum dolor sit");
      expect(el3.value).toBe("Associate L1");
      expect(el4.value).toBe("rejected");

      expect(screen.getByTestId("success-page")).toBeInTheDocument();
      expect(storeWithUser.dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
