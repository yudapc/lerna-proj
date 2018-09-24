import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Menu, MenuItem, SubMenu } from "../index";
Enzyme.configure({ adapter: new Adapter() });

describe("MenuItem", () => {
  it("should get props children", () => {
    const wrapper = mount(
      <Menu>
        <MenuItem>
          <span>menu item</span>
        </MenuItem>
      </Menu>
    );
    expect(wrapper.props().children).not.toBeNull();
  });
});

describe("SubMenu", () => {
  it("should get props children", () => {
    const wrapper = mount(
      <Menu>
        <SubMenu>
          <MenuItem>
            <span>Foo</span>
          </MenuItem>
        </SubMenu>
      </Menu>
    );
    expect(wrapper.props().children).not.toBeNull();
  });
});
