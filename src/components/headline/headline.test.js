import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttribute, checkProps } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test Description",
        tempArr: [
          {
            fName: "Test fname",
            lName: "Test lName",
            email: "joebloggs@gmail.com",
            age: 24,
            onlineStatus: true,
          },
        ],
      };
      const propsErr = checkProps(Headline.propTypes, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

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
