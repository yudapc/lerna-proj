import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { IconComponent } from "../component";
Enzyme.configure({ adapter: new Adapter() });

describe("IconComponent", () => {
  it("should get props type", () => {
    const wrapper = mount(<IconComponent type="poweroff" />);
    expect(wrapper.props().type).toBe("poweroff");
  });
});
