import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttribute } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Description goes here..",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, "headline-component");
      expect(component.length).toBe(1);
    });
    it("Should render H1", () => {
      const h1 = findByTestAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a description", () => {
      const description = findByTestAttribute(wrapper, "desc");
      expect(description.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAttribute(wrapper, "headline-component");
      expect(component.length).toBe(0);
    });
  });
});
