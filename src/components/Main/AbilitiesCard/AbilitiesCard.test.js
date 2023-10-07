import React from "react";
import { shallow } from "enzyme";
import AbilitiesCard from "./AbilitiesCard";

describe("AbilitiesCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AbilitiesCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
