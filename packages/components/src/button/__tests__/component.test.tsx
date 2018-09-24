import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { ButtonComponent } from "../component";
Enzyme.configure({ adapter: new Adapter() });

describe("ButtonComponent", () => {
  it("should get props children", () => {
    const wrapper = mount(<ButtonComponent>Foo</ButtonComponent>);
    expect(wrapper.props().children).toBe("Foo");
  });
  it("should get props icon", () => {
    const wrapper = mount(
      <ButtonComponent icon="rollback">Foo</ButtonComponent>
    );
    expect(wrapper.props().icon).toBe("rollback");
  });
  describe("props loading", () => {
    it("should loading true", () => {
      const wrapper = mount(
        <ButtonComponent loading={true}>Foo</ButtonComponent>
      );
      expect(wrapper.props().loading).toBe(true);
    });
    it("should loading false", () => {
      const wrapper = mount(<ButtonComponent>Foo</ButtonComponent>);
      expect(wrapper.props().loading).toBe(undefined);
    });
  });
});
