import React from "react";
import { render, screen } from "@testing-library/react"
import Header from "../../components/Header";

describe("Header", () => {
  it("should have a title as  Near-Me-Toilet", () => {
    render(<Header />);
    expect(screen.getByText("Near-Me-Toilet")).toBeInTheDocument();
  });
});