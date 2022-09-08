import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "../../Theming";
import FormDialog from "../../components/technical-round/components/dialog";

describe("Dialog ", () => {
  test("it should render correctly", () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <FormDialog isOpen={true} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("topic-dialog")).toBeTruthy();
  });

  test("it should not render dialog", async () => {
    render(
      <ThemeProvider theme={themeOptions}>
        <FormDialog isOpen={true} onClose={() => console.log("closed")} />
      </ThemeProvider>
    );

    const dialog = screen.getByTestId("dialog");
    const button = screen.getAllByTestId("button")[0];
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("topic-dialog")).not.toContainElement(dialog);
    });
  });
});
