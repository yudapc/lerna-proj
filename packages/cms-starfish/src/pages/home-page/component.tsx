import * as React from "react";
import {
  Dropdown,
  Content,
  Footer,
  Header,
  Sider,
  Layout
} from "@bmd/components";
import { MenuSidebar } from "../../components/menu-sidebar";
import { Breadcrumb } from "../../components/breadcrumb";
import { TableSample } from "./libraries/TableSample";
import ButtonSample from "@bmd/cms-starfish/src/pages/home-page/libraries/ButtonSample";
import IconSample from "@bmd/cms-starfish/src/pages/home-page/libraries/IconSample";

export class HomePageComponent extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <Header>
          <span style={{ color: "white" }}>CMS Starfish</span>
        </Header>
        <Layout>
          <Sider>
            <MenuSidebar />
          </Sider>
          <Content>
            <div style={{ padding: 16 }}>
              <Breadcrumb />
              <h1>Home Page</h1>
              <IconSample />
              <ButtonSample />
              <div style={{ paddingTop: 16 }}>
                <Dropdown />
              </div>
              <TableSample />
            </div>
          </Content>
        </Layout>
        <Footer>Copyright Bhinneka.com 2018</Footer>
      </Layout>
    );
  }
}
export default HomePageComponent;
