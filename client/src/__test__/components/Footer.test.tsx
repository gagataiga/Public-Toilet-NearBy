import React from "react";
import { render, screen } from "@testing-library/react"
import Footer from "../../components/Footer";

describe("Footer", () => {
  it("should have a copy right", () => {
    render(<Footer />);
    expect(screen.getByText("2023 Near-Me-Toilet. All rights reserved.")).toBeInTheDocument();
  });
});
