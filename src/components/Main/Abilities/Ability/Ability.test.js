import React from "react";
import { shallow } from "enzyme";
import Ability from "./Ability";

describe("Ability", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ability />);
    expect(wrapper).toMatchSnapshot();
  });
});
