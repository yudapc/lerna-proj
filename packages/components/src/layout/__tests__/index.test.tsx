import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Content, Footer, Header, Layout, Sider } from "../index";
Enzyme.configure({ adapter: new Adapter() });

describe("Content", () => {
  it("should get props children", () => {
    const wrapper = mount(<Content>Foo</Content>);
    expect(wrapper.props().children).toBe("Foo");
  });
});

describe("Footer", () => {
  it("should get props children", () => {
    const wrapper = mount(<Footer>Foo</Footer>);
    expect(wrapper.props().children).toBe("Foo");
  });
});

describe("Header", () => {
  it("should get props children", () => {
    const wrapper = mount(<Header>Foo</Header>);
    expect(wrapper.props().children).toBe("Foo");
  });
});

describe("Sider", () => {
  it("should get props children", () => {
    const wrapper = mount(<Sider>Foo</Sider>);
    expect(wrapper.props().children).toBe("Foo");
  });
});

describe("Layout", () => {
  it("should get props children", () => {
    const wrapper = mount(<Layout>Foo</Layout>);
    expect(wrapper.props().children).toBe("Foo");
  });
});
