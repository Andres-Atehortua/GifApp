import React from "react";
import GifGrid from "components/GifGrid";
import { shallow } from "enzyme";
import useFetchGifs from "hooks/useFetchGifs";
// Hacemos un seguimiento de la funcion
jest.mock("hooks/useFetchGifs");

describe("Pruebas para el componente <GifGrid />", () => {
  const category = "Goku";

  test("should match snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    const h3 = wrapper.find("h3").text();
    expect(h3).toBe(category);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when images are fetched useFetchGifs", () => {
    const gifs = [
      { id: 123, url: "https://localhost/cosa.jpg", title: "Titulo" },
    ];
    // Fingimos que la funcion nos regresa data
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // Comprobar si un elemento existe
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
