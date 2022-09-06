import React from "react";
import Navbar from "../Navbar";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("navbar component renders", () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId("nav");
  expect(navbarElement).toBeInTheDocument();
});
