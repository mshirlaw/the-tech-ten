import React from "react";
import { render, screen } from "@testing-library/react";

import About from "./about";

describe("About", () => {
  test("it renders the about page", () => {
    render(<About />);

    expect(screen.getByRole("heading")).toHaveTextContent("About");
  });
});
