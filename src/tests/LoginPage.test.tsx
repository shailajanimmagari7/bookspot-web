import { cleanup, render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import React from "react";

describe("Login page", () => {
  afterEach(() => {
    cleanup();
  });
  test("renders the login page with logo, username and pasword fields", () => {
    render(<LoginPage />);

    expect(screen.getByTestId("App-Logo")).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
