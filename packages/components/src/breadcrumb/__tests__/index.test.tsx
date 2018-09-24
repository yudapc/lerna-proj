import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Breadcrumb, BreadcrumbItem } from "../index";
Enzyme.configure({ adapter: new Adapter() });

describe("Breadcrumb", () => {
  it("should get props children", () => {
    const wrapper = mount(
      <Breadcrumb>
        <BreadcrumbItem>Foo</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(wrapper.props().children).not.toBeNull();
  });
});
