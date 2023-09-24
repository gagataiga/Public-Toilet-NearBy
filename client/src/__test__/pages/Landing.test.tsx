import React from "react";
import { render, screen } from "@testing-library/react"
import Landing from "../../pages/Landing";

describe("Landing page", () => {
  test("should have a text as 'Toilet Is Right There'", () => {
    const { getByText } = render(<Landing />);

    expect(getByText("Toilet Is Right There")).toBeInTheDocument();
  });

  test("", () => { 
    
  });
});