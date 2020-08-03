import React from "react";
import GifGridItem from "components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas al componente <GifGridItem />", () => {
  const title = "Soy el titulo";
  const url = "https://localhost/algo.jpg";
  let wrapper = shallow(<GifGridItem title={title} url={url} />);
  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });
  test("should render correctly the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should have a p tag with the title", () => {
    const pText = wrapper.find("p").text().trim();

    expect(pText).toBe(title);
  });

  test("should have an img with src and alt properties", () => {
    const { src, alt } = wrapper.find("img").props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should have class animate__backInRight in the div className", () => {
    const div = wrapper.find("div").hasClass("animate__backInRight");
    expect(div).toBeTruthy();
  });
});
