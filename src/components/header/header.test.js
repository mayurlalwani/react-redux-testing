import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttribute } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "header-component");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAttribute(component, "logo-img");
    expect(logo.length).toBe(1);
  });
});
