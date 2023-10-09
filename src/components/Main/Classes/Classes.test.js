import React from "react";
import { shallow } from "enzyme";
import Classes from "./Classes";

describe("Classes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Classes />);
    expect(wrapper).toMatchSnapshot();
  });
});
