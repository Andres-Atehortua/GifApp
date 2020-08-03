import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "GifExpertApp";

describe("Pruebas al componente <GifExpertApp />", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["Goku", "Marvel"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
