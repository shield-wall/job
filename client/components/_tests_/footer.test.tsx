import Footer from "../footer";
import { render } from '@testing-library/react';

describe("footer test", () => {
    it('is redendring properly footer component ', () => {
        const { getByTestId } = render(<Footer />);
        const elementId = getByTestId('footer');
        
        expect(elementId).toBeTruthy();
    });
});