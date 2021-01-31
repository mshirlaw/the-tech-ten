import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./index";

describe("Home", () => {
  test("it correctly renders the home page", () => {
    render(<Home />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hello world!");
  });
});
