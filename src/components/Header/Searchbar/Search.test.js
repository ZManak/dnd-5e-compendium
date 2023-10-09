import React from "react";
import { shallow } from "enzyme";
import Searchbar from "./Searchbar";

describe("Searchbar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Searchbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
