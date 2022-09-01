import { render, screen } from "@testing-library/react";
import Category from "../../components/technical-round/components/category";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "../../Theming";
import { MOCKED_QUESTIONS, MOCKED_SCORE } from "./mockData";

const mockStore = configureMockStore();
const mockedStore = mockStore({ questions: MOCKED_QUESTIONS });
mockedStore.dispatch = jest.fn();

const selectedCategory = MOCKED_QUESTIONS.data.areas[0];

describe("Category List", () => {
  test("it should render correctly", () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <Category
          title={MOCKED_QUESTIONS?.data?.subject}
          selected={selectedCategory}
          categoryList={MOCKED_SCORE}
        />
      </ThemeProvider>
    );
    expect(screen.getByTestId("category-list")).toBeTruthy();
  });
});
