import React from "react";
import { shallow } from "enzyme";
import Sidetabs from "./Sidetabs";

describe("Sidetabs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Sidetabs />);
    expect(wrapper).toMatchSnapshot();
  });
});
