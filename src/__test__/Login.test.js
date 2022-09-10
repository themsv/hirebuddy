import Login from "../components/login/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const mockedStore = mockStore({
  email: "testemail@publicssapient.com",
  otp: "12345",
});
mockedStore.dispatch = jest.fn();

describe("Login", () => {
  test("renders Login component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("loginPage")).toBeTruthy();
  });

  test("Email input should change", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const emailEl = container.querySelector(`input[name="email"]`);
    const testValue = "test";
    fireEvent.change(emailEl, { target: { value: testValue } });
    await waitFor(() => {
      expect(emailEl.value).toBe(testValue);
    });
  });

  test("Password input should change", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const otpEl = container.querySelector(`input[name="otp"]`);
    const testValue = "test";
    fireEvent.change(otpEl, { target: { value: testValue } });
    await waitFor(() => {
      expect(otpEl.value).toBe(testValue);
    });
  });

  test("Login button click", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByTestId("button");
    const emailEl = container.querySelector(`input[name="email"]`);
    const otpEl = container.querySelector(`input[name="otp"]`);
    fireEvent.change(emailEl, {
      target: { value: "johndoe@publissapient.com" },
    });
    fireEvent.change(otpEl, { target: { value: "12347" } });
    await fireEvent.click(loginBtn);
    await waitFor(() => expect(screen.getByText(/Invalid Credentials/i)));
  });
});
