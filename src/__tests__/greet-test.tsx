/**
 * Greet should render the text hello and if a name is passed into the component. It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "../components/geet/Greet";

// with describe we can group tests together
describe.only("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested describe", () => {
    test("render with a name", () => {
      render(<Greet name="Akash" />);
      const textElement = screen.getByText("Hello Akash");
      expect(textElement).toBeInTheDocument();
    });
  });
});
