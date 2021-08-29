import React from "react";
import { findByTestAttribute, checkProps } from "./../../Utils/";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("Should render a button", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
