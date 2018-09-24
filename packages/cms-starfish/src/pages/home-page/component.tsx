import * as React from "react";
import {
  Button,
  Dropdown,
  Icon,
  Content,
  Footer,
  Header,
  Sider,
  Layout
} from "@bmd/components";
import { MenuSidebar } from "../../components/menu-sidebar";
import { Breadcrumb } from "../../components/breadcrumb";

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
            <Breadcrumb />
            <div style={{ padding: 16 }}>
              <h1>Home Page</h1>
              <div>
                <p>
                  <span>Sample Icon:</span>
                  &nbsp;&nbsp;
                  <Icon type="rollback" theme="outlined" />
                </p>
              </div>
              <Button type="default">Default</Button>
              &nbsp;
              <Button type="primary">Primary</Button>
              &nbsp;
              <Button type="danger">Danger</Button>
              &nbsp;
              <Button type="primary" loading={true}>
                Save
              </Button>
              &nbsp;
              <Button type="danger" icon="poweroff">
                Power Off
              </Button>
              &nbsp; &nbsp;&nbsp;&nbsp;
              <div style={{ paddingTop: 16 }}>
                <Dropdown />
              </div>
            </div>
          </Content>
        </Layout>
        <Footer>Copyright Bhinneka.com 2018</Footer>
      </Layout>
    );
  }
}
export default HomePageComponent;
