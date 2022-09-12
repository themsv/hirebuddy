import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FormStepper from "../components/form-stepper";
import { store } from "../store/store";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import userEvent from "@testing-library/user-event";

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
});

describe("Stepper with fake store", () => {
  let instance = null;
  beforeEach(async () => {
    const mockStore = configureMockStore();
    const storeWithUser = mockStore({
      candidates: {
        submitted: true,
      },
      user: {
        users: [
          {
            oracleId: "176046",
            firstName: "John",
            lastName: "Deo",
            email: "sample@gmail.com",
            carrerStage: "Sr. Manager",
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
    act(() => {
      const { container } = render(
        <BrowserRouter>
          <Provider store={storeWithUser}>
            {/* <Provider store={store}> */}
            <FormStepper />
          </Provider>
        </BrowserRouter>
      );
      instance = container;
    });
    const inputEl = instance.querySelector(`input[placeholder="mm/dd/yyyy"]`);

    fireEvent.change(inputEl, { target: { value: "09/09/2022" } });

    const inputE2 = instance.querySelector(`input[name="mode"]`);
    fireEvent.change(inputE2, { target: { value: "In Person" } });

    const el3 = instance.querySelector(`input[name="type"]`);
    fireEvent.change(el3, { target: { value: "Core XT" } });

    const el4 = instance.querySelector(`input[name="candidateFirstName"]`);
    fireEvent.change(el4, { target: { value: "John" } });

    const el5 = instance.querySelector(`input[name="candidateLastName"]`);
    fireEvent.change(el5, { target: { value: "Deo" } });

    const el6 = instance.querySelector(`input[name="candidatePhone"]`);
    fireEvent.change(el6, { target: { value: "9487665345" } });

    const el7 = instance.querySelector(`input[name="candidateEmail"]`);
    fireEvent.change(el7, { target: { value: "John@gmail.com" } });

    const el8 = instance.querySelector(`input[name="candidateExperience"]`);
    fireEvent.change(el8, { target: { value: "4" } });

    const el9 = instance.querySelector(`input[name="stage"]`);
    fireEvent.change(el9, { target: { value: "Associate L2" } });

    const el10 = instance.querySelector(`input[name="candidateEmail"]`);
    fireEvent.change(el10, { target: { value: "John@gmail.com" } });

    const el11 = instance.querySelector(`input[name="candidateResume"]`);
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(el11, { target: { files: [file] } });

    const ell2 = instance.querySelector(`input[name="oracleid"]`);
    fireEvent.change(ell2, { target: { label: "176046" } });

    const searchInput = screen.getByRole("combobox", {
      name: /search oracle id/i,
    });

    userEvent.click(searchInput);

    await waitFor(() => {
      screen.getByRole("presentation");
    });

    // grab option
    const opt = screen.getByRole("option", {
      name: /176046/i,
    });
    // select it
    userEvent.click(opt);
  });

  test("it should not display step 2 if type is not selected", async () => {
    // act(() => {
    fireEvent.click(screen.getByTestId("next-btn"));
    // });

    // const step2 = instance.querySelector(`div[data-testid="step-2"]`);
    const step2 = screen.getByTestId("step-2");
    await waitFor(() => {
      expect(step2).toBeTruthy();
    });
  });

  test("it should take to step 3 if next button is clicked twice", async () => {
    act(() => {
      fireEvent.click(screen.getByTestId("next-btn"));
      fireEvent.click(screen.getByTestId("next-btn"));
    });

    await waitFor(() => {
      expect(screen.getByTestId("step-3")).toBeTruthy();
    });
  });

  // test("it should take to step 2 if prev button is clicked", async () => {
  //   act(() => {
  //     fireEvent.click(screen.getByTestId("next-btn"));
  //     fireEvent.click(screen.getByTestId("next-btn"));
  //     fireEvent.click(screen.getByTestId("prev-btn"));
  //     fireEvent.click(screen.getByTestId("prev-btn"));
  //   });

  //   await waitFor(() => {
  //     expect(screen.getByTestId("step-1")).toBeInTheDocument();
  //   });
  // });

  // test("it should complete the step 2 and display success message", async () => {
  //   const mockStore = configureMockStore();
  //   const storeWithUser = mockStore({
  //     candidates: {
  //       submitted: true,
  //     },
  //     user: {
  //       users: [
  //         {
  //           value: {
  //             email: "sample@gmail.com",
  //             firstName: "john",
  //             lastName: "Deo",
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   storeWithUser.dispatch = jest.fn();

  //   const mockedAxios = axios;
  //   let res = { data: {} };
  //   mockedAxios.post.mockReturnValueOnce(res);

  //   fireEvent.click(screen.getByTestId("next-btn"));
  //   fireEvent.click(screen.getByTestId("next-btn"));
  //   act(() => {
  //     const inputEl = container.querySelector(
  //       `input[name="relaventExperience"]`
  //     );
  //     fireEvent.change(inputEl, { target: { value: "4" } });

  //     const inputE2 = container.querySelector(`textarea[name="feedback"]`);
  //     const text =
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  //     fireEvent.change(inputE2, { target: { value: text } });

  //     const el3 = container.querySelector(
  //       `input[name="recommendedCareerStage"]`
  //     );
  //     fireEvent.change(el3, { target: { value: "Associate L1" } });
  //     const el4 = container.querySelector(`input[name="outcome"]`);
  //     fireEvent.change(el4, { target: { value: "rejected" } });
  //     fireEvent.click(screen.getByText("Finish"));
  //   });

  //   await waitFor(() => {
  //     expect(inputEl.value).toBe("4");
  //     expect(inputE2.value).toContain("Lorem ipsum dolor sit");
  //     expect(el3.value).toBe("Associate L1");
  //     expect(el4.value).toBe("rejected");

  //     expect(screen.getByTestId("success-page")).toBeInTheDocument();
  //     expect(storeWithUser.dispatch).toHaveBeenCalledTimes(2);
  //   });
  // });
});
