import Footer from "../footer";
import { render } from '@testing-library/react';

describe("footer test", () => {
    render(<Footer />);
    const links = Array.from(document.querySelectorAll('#link'))
    const linksContent = links.map(a => a.innerHTML)

    it("is rendering footer's tag", () => {
        const footer = document.querySelector("#footer")
        expect(footer.getAttribute('id')).toBe('footer')
    })

    it.each(links)("is checking footer's links path exists", (a) => {

        expect(a.getAttribute('href')).toBeTruthy()

    })

    it("is rendering footer's links content", () => {
        links.forEach((a, i) => {
            expect(a.innerHTML).toBe(linksContent[i])
        })
    });
});