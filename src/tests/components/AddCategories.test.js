import React from "react";
import { shallow } from "enzyme";
import AddCategory from "components/AddCategories";

describe("Pruebas al componente <AddCategories />", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render correctly the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the input text", () => {
    const input = wrapper.find("input[type='text']");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    const inputAfter = wrapper.find("input[type='text']").prop("value");

    expect(inputAfter).toBe(value);
  });

  test("should not post info when submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clear the input value", () => {
    const value = "Hola mundo";
    const input = wrapper.find("input[type='text']");
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();
    // Esto es para comprobar que se ha llamado con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
