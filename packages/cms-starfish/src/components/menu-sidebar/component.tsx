import { Icon, Menu, MenuItem, SubMenu } from "@bmd/components";
import * as React from "react";

export class MenuSidebarComponent extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
      >
        <MenuItem key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </MenuItem>
        <MenuItem key="3">
          <Icon type="inbox" />
          <span>Option 3</span>
        </MenuItem>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <MenuItem key="5">Option 5</MenuItem>
          <MenuItem key="6">Option 6</MenuItem>
          <MenuItem key="7">Option 7</MenuItem>
          <MenuItem key="8">Option 8</MenuItem>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <MenuItem key="9">Option 9</MenuItem>
          <MenuItem key="10">Option 10</MenuItem>
          <SubMenu key="sub3" title="Submenu">
            <MenuItem key="11">Option 11</MenuItem>
            <MenuItem key="12">Option 12</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    );
  }
}
export default MenuSidebarComponent;
