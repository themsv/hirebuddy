import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CandidateDetails from "../pages/candidate-info/CandidateDetail";
import { store } from "../store/store";

describe("CandidateDetails", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CandidateDetails />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("data-not-found")).toBeTruthy();
  });
});
