import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "./header.tsx";

describe("<Header />", () => {
  test("it renders the header correctly", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(2);
    expect(links[0]).toHaveTextContent("Home");
    expect(links[1]).toHaveTextContent("About");
  });
});
