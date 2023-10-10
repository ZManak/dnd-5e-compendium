import React from "react";
import { shallow } from "enzyme";
import E404 from "./E404";

describe("E404", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<E404 />);
    expect(wrapper).toMatchSnapshot();
  });
});
