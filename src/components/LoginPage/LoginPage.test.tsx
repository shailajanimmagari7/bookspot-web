import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import React from "react";

describe("Login page", () => {
  test("renders the login page with logo, username and pasword fields", () => {
    render(<LoginPage />);
    expect(screen.getByRole("heading",{name:/Login/i})).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name:/Submit/i })).toBeInTheDocument();
  });
  test("shows error messages when form is submitted with empty fields", async()=>{
    render(<LoginPage />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
  })
});
