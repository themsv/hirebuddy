import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import FinalFeedback from "../components/final-feedback";
import useFormControls from "../components/final-feedback/FormControls";

import { defaultState } from "../components/form-stepper";
import userEvent from "@testing-library/user-event";

const setCandidateData = jest.fn();

describe("Final Feedback Component", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FinalFeedback
            candidateData={defaultState}
            setCandidateData={setCandidateData}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("step-3")).toBeTruthy();
  });

  test("Validate relaventExperience", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FinalFeedback
            candidateData={defaultState}
            setCandidateData={setCandidateData}
          />
        </Provider>
      </BrowserRouter>
    );

    const inputEl = container.querySelector(`input[name="relaventExperience"]`);

    act(() => fireEvent.change(inputEl, { target: { value: "" } }));
    await waitFor(() => {
      expect(inputEl.value).toBe("");
      screen.getByText(/This field is required./i);
    });
    act(() => fireEvent.change(inputEl, { target: { value: "200" } }));
    await waitFor(() => {
      expect(inputEl.value).toBe("200");
      screen.getByText(/Experience must be within 0 and 99/i);
    });
  });

  test("Validate recommendedCareerStage", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FinalFeedback
            candidateData={defaultState}
            setCandidateData={setCandidateData}
          />
        </Provider>
      </BrowserRouter>
    );

    const inputEl = container.querySelector(
      `input[name="recommendedCareerStage"]`
    );
    act(() => fireEvent.change(inputEl, { target: { value: "" } }));
    await waitFor(() => {
      expect(inputEl.value).toBe("");
      screen.getByText(/This field is required./i);
    });
  });

  test("Validate outcome", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FinalFeedback
            candidateData={defaultState}
            setCandidateData={setCandidateData}
          />
        </Provider>
      </BrowserRouter>
    );

    const inputEl = container.querySelector(`input[name="outcome"]`);
    act(() => fireEvent.change(inputEl, { target: { value: "" } }));
    await waitFor(() => {
      expect(inputEl.value).toBe("");
      screen.getByText(/Please select outcome/i);
    });
  });
  test("Validate feedback", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FinalFeedback
            candidateData={defaultState}
            setCandidateData={setCandidateData}
          />
        </Provider>
      </BrowserRouter>
    );

    const inputEl = container.querySelector(`input[name="feedback"]`);
    fireEvent.change(inputEl, { target: { value: "" } });
    await waitFor(() => {
      expect(inputEl.value).toBe("");
      screen.getByText(/Please provide feedback/i);
    });
  });
});
