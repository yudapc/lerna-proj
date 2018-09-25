import * as React from "react";
import { Content, Footer, Header, Sider, Layout } from "@bmd/components";
import { MenuSidebar } from "../components/menu-sidebar";
import { Breadcrumb } from "../components/breadcrumb";
import { styles } from "./styles";

interface Iprops {
  children?: any;
}

export class LayoutCms extends React.Component<Iprops, any> {
  render() {
    const { children } = this.props;
    const headerTitle = "CMS Starfish";
    return (
      <Layout>
        <Header>
          <span style={styles.headerTitle}>{headerTitle}</span>
        </Header>
        <Layout>
          <Sider>
            <MenuSidebar />
          </Sider>
          <Content>
            <div style={styles.container}>{children}</div>
          </Content>
        </Layout>
        <Footer>Copyright Bhinneka.com 2018</Footer>
      </Layout>
    );
  }
}
export default LayoutCms;
