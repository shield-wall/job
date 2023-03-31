import renderer from "react-test-renderer";
import Layout from "../../components/layout";

describe("layout component" ,() => {
    const MockChildren = jest.fn();
    it('is rendering properly layout component', () => {
        const page = renderer.create(
            <Layout>{< MockChildren />}</Layout>
        ).toJSON();
        expect(page).toMatchSnapshot();
    });
})