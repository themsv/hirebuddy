import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import FinalFeedback from "../components/final-feedback";

import { defaultState } from "../components/form-stepper";

const setCandidateData = jest.fn();

describe("Final Feedback", () => {
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

  test("relaventExperience validation on empty", async () => {
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

    const inputExp = screen.getByLabelText(/Relevant Experience/i);
    expect(inputExp).toBeInTheDocument();
    await fireEvent.change(inputExp, { target: { value: "20" } });
    await fireEvent.change(inputExp, { target: { value: "" } });
    await waitFor(() => {
      screen.getByText(/This field is required./i);
    });
  });
  test("relaventExperience validation on 99>value<0", async () => {
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

    const inputExp = screen.getByLabelText(/Relevant Experience/i);
    expect(inputExp).toBeInTheDocument();
    await fireEvent.change(inputExp, { target: { value: "1000" } });
    await waitFor(() => {
      screen.getByText(/Experience must be within 0 and 99/i);
    });
  });

  test("feedback on empty", async () => {
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

    const inputExp = screen.getByLabelText(/Feedback/i);
    expect(inputExp).toBeInTheDocument();
    await fireEvent.change(inputExp, { target: { value: "ABC" } });
    await fireEvent.change(inputExp, { target: { value: "" } });
    await waitFor(() => {
      screen.getByText(/Please provide feedback/i);
    });
  });
  test("feedback must of min 50chars", async () => {
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

    const inputExp = screen.getByLabelText(/Feedback/i);
    expect(inputExp).toBeInTheDocument();
    await fireEvent.change(inputExp, { target: { value: "Hello World!" } });
    await waitFor(() => {
      screen.getByText(/Feedback must be minimum of 50 characters/i);
    });
  });

  test.only("Check Recommended Career Stage options are loaded correctly", () => {
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
    const inputExp = screen.getByLabelText(/Recommended Career Stage/i);
    console.log(inputExp);
    expect(inputExp).toBeInTheDocument();
    fireEvent.change(inputExp, { target: { value: "Junior Associate" } });
  });
});
