import React from "react";
import { shallow } from "enzyme";
import Random from "./Random";

describe("Random", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Random />);
    expect(wrapper).toMatchSnapshot();
  });
});
