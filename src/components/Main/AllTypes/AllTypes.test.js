import React from "react";
import { shallow } from "enzyme";
import AllTypes from "./AllTypes";

describe("AllTypes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AllTypes />);
    expect(wrapper).toMatchSnapshot();
  });
});
