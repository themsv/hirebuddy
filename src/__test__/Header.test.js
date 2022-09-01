import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import { store } from "../store/store";
import configureMockStore from "redux-mock-store";
import { removeUser } from "../store/user/userSlice";

const mockStore = configureMockStore();

describe("Header", () => {
  test("it should render correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("page-header")).toBeTruthy();
  });

  test("it should render with conduct interview nav", () => {
    const storeWithUser = mockStore({
      user: {
        value: {
          email: "sample@gmail.com",
          firstName: "john",
          lastName: "Deo",
        },
      },
    });
    render(
      <BrowserRouter>
        <Provider store={storeWithUser}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Conduct an Interview/i)).toBeInTheDocument();
  });

  test("it should open a menu bar with logout option", async () => {
    const storeWithUser = mockStore({
      user: {
        value: {
          email: "sample@gmail.com",
          firstName: "john",
          lastName: "Deo",
        },
      },
    });
    render(
      <BrowserRouter>
        <Provider store={storeWithUser}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId("menu-appbar"));
    await waitFor(() => {
      expect(screen.getByRole("menuitem")).toHaveTextContent(/Logout/i);
    });
  });

  test("it should close menu items when clicked user icon twice", async () => {
    const storeWithUser = mockStore({
      user: {
        value: {
          email: "sample@gmail.com",
          firstName: "john",
          lastName: "Deo",
        },
      },
    });

    storeWithUser.dispatch = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={storeWithUser}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId("menu-appbar"));
    fireEvent.click(screen.getByRole("menuitem"));

    await waitFor(() => {
      expect(storeWithUser.dispatch).toHaveBeenCalledTimes(1);
      expect(storeWithUser.dispatch).toHaveBeenCalledWith(removeUser());
    });
  });
});
