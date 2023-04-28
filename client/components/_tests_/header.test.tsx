import Header from "../header";
import { render } from "@testing-library/react";

describe("Header test", () => {
  it("is rendering properly header component", () => {
   const { getByTestId } = render(<Header />);
   const elementId = getByTestId('header');

   expect(elementId).toBeTruthy();
  });
});