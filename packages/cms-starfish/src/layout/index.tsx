import * as React from "react";
import { Content, Footer, Header, Sider, Layout } from "bmdcomponents";
import { MenuSidebar } from "../components/menu-sidebar";
import { Breadcrumb } from "../components/breadcrumb";
import "./styles.css";

interface Iprops {
  children?: any;
}

export class LayoutCms extends React.Component<Iprops, any> {
  render() {
    const { children } = this.props;
    const headerTitle = "B2C";
    return (
      <Layout className="bt-cms">
        <Header className="bt-cms-header">
          <strong>{headerTitle}</strong>
        </Header>
        <Layout>
          <Sider className="bt-cms-sidebar"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <MenuSidebar />
          </Sider>
          <Layout>
            <Content className="bt-cms-content">
              <Breadcrumb />
              {children}
            </Content>
            <Footer className="bt-cms-footer">Copyright Bhinneka.com 2018</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default LayoutCms;
