import React from "react";
import { RegisterPage } from "./RegisterPage";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Register Page", () => {
  test("renders the register page with username, password, and email fields ", () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );
    expect(
      screen.getByRole("heading", { name: /Register/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
  test("shows error messages when form is submitted with empty fields", async () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(
      await screen.findByText(/Username is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });
});
