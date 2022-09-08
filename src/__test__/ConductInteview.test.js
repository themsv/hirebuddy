import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ConductInterview from "../pages/conduct-interview";
import { store } from "../store/store";

describe("Conduct Interview Component", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ConductInterview />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("step-1")).toBeTruthy();
  });
});
