import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { BasicComponent } from "../component";
Enzyme.configure({ adapter: new Adapter() });

describe("<BasicComponent />", () => {
  it("should get props children", () => {
    const wrapper = mount(<BasicComponent>Foo</BasicComponent>);
    expect(wrapper.props().children).toBe("Foo");
  });
});
