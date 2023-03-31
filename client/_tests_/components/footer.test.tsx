import renderer from "react-test-renderer";
import Footer from "../../components/footer";

describe("footer test", () =>{
    it('is redendring properly footer component ', () => {
        const tree = renderer.create(
            <Footer />
        ).toJSON()
        expect(tree).toMatchSnapshot();
    });
})