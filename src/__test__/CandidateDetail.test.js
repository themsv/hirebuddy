import { store } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import CandidateDetails from "../pages/candidate-info/CandidateDetail";

test("renders CandidateDetails component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <CandidateDetails />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByTestId("test-CandidateDetails")).toBeTruthy();
});
