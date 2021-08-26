import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header Component", () => {
  it("It should render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".header-component");
    expect(wrapper.length).toBe(1);
  });
});
