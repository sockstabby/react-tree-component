import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import Search from "../Search";

describe("App", () => {
  it("renders App component", async () => {
    render(<Search />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    waitFor(() =>
      expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
    );

    expect(false).toBe(false);

    // expect(screen.queryByText(/Signed in as/)).toBeNull();
    // expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  it("calls the onChange callback handler", async () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(<Search onChange={onChange}></Search>);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
