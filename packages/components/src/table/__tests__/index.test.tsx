import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Column, ColumnGroup, Divider, Table, Tag } from "../index";
Enzyme.configure({ adapter: new Adapter() });

const dataSource = [
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

xdescribe("Table", () => {
  it("should get props children", () => {
    const wrapper = mount(<Table>foo</Table>);
    expect(wrapper.props().children).toBe("foo");
  });
});

xdescribe("ColumnGroup", () => {
  it("should get props children", () => {
    const wrapper = mount(<ColumnGroup>foo</ColumnGroup>);
    expect(wrapper.props().children).toBe("foo");
  });
});

xdescribe("Divider", () => {
  it("should get props children", () => {
    const wrapper = mount(<Divider>foo</Divider>);
    expect(wrapper.props().children).toBe("foo");
  });
});

xdescribe("Column", () => {
  it("should get props title", () => {
    const wrapper = mount(
      <Column title="foo" key="firstName" dataIndex="firstName" />
    );
    expect(wrapper.props().children).toContain("uniqKey");
  });
});

describe("Tag", () => {
  it("should get props children", () => {
    const wrapper = mount(<Tag>foo</Tag>);
    expect(wrapper.props().children).toBe("foo");
  });
});
