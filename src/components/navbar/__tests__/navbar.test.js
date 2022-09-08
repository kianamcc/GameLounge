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

test("logo src name is correct", () => {
  render(<Navbar />);
  const navbarLogoElement = screen.getByTestId("logo");
  expect(navbarLogoElement).toBeInTheDocument();
  expect(navbarLogoElement.getAttribute("src")).toEqual("gamelounge-logo.png");
});

test("user logo src name is correct", () => {
  render(<Navbar />);
  const userLogoElement = screen.getByTestId("user");
  expect(userLogoElement).toBeInTheDocument();
  expect(userLogoElement.getAttribute("src")).toEqual("user.png");
});

test("navbar items have correct names", () => {
  render(<Navbar />);
  const navbarItemsElement = screen.getByTestId("nav-items");
  expect(navbarItemsElement).toBeInTheDocument();
  expect(navbarItemsElement).toHaveTextContent("Games");
  expect(navbarItemsElement).toHaveTextContent("About");
  expect(navbarItemsElement).toHaveTextContent("Contact");
});
