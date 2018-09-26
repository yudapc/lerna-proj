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
    const headerTitle = "B2C";
    return (
      <Layout>
        <Header
          style={{
            backgroundColor: "#dd4b39",
            minHeight: 50,
            height: 50,
            lineHeight: 0,
            paddingTop: 25,
            paddingLeft: 80
          }}
        >
          <strong style={styles.headerTitle}>{headerTitle}</strong>
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
