import Header from '../header';
import { render } from '@testing-library/react';

describe("header test", () => {
  render(<Header />);
  const links = Array.from(document.querySelectorAll('#link'))
  const linksContent = links.map(a => a.innerHTML)

  it("is rendering header's tag", () => {
    const header = document.querySelector("#header")
    expect(header.getAttribute('id')).toBe('header')
  })

  it.each(links)("is checking header's links path exists", (a) => {

    expect(a.getAttribute('href')).toBeTruthy()

  })

  it("is rendering header's links content", () => {
    links.forEach((a, i) => {
      expect(a.innerHTML).toBe(linksContent[i])
    })
  });
});