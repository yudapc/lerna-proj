import { Icon, Menu, MenuItem, SubMenu } from "@bmd/components";
import * as React from "react";
import { styles } from "./styles";
import { Link } from "react-router-dom";

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
        style={styles.container}
      >
        <MenuItem key="parent-menu-1">
          <Link to="/">
            <Icon type="dashboard" theme="outlined" />
            <span>Dashboard</span>
          </Link>
        </MenuItem>
        <MenuItem key="parent-menu-2">
          <Link to="/statistik">
            <Icon type="line-chart" theme="outlined" />
            <span>Statistik</span>
          </Link>
        </MenuItem>
        <MenuItem key="parent-menu-3">
          <Link to="/promo">
            <Icon type="tag" theme="outlined" />
            <span>Promo</span>
          </Link>
        </MenuItem>
        <MenuItem key="parent-menu-4">
          <Icon type="team" theme="outlined" />
          <span>Memberships</span>
        </MenuItem>
        <MenuItem key="parent-menu-5">
          <Icon type="shopping-cart" theme="outlined" />
          <span>Order</span>
        </MenuItem>
        <MenuItem key="parent-menu-6">
          <Icon type="star" theme="outlined" />
          <span>Review</span>
        </MenuItem>
        <MenuItem key="parent-menu-7">
          <Link to="/users">
            <Icon type="user" theme="outlined" />
            <span>Users</span>
          </Link>
        </MenuItem>
        <MenuItem key="parent-menu-8">
          <Icon type="safety-certificate" theme="outlined" />
          <span>Role Access</span>
        </MenuItem>
        <MenuItem key="parent-menu-9">
          <Icon type="database" theme="outlined" />
          <span>Activity Log</span>
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
