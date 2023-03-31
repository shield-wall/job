import renderer from "react-test-renderer";
import Header from "../header";

describe("Header test", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(
      <Header  />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});