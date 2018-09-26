import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import "antd/dist/antd.css";

// Atom component
import { Button } from "../src/button";
import { Breadcrumb, BreadcrumbItem } from "../src/breadcrumb";
import { Icon } from "../src/icon";

// Molekul component
import { Dropdown } from "../src/dropdown";

export const Layout = ({ children }) => (
  <div style={{ padding: 15 }}>{children}</div>
);

const AtomButtonSample = (
  <Layout>
    <Button>Default</Button>
    &nbsp;&nbsp;&nbsp;
    <Button type="primary">Primary</Button>
    &nbsp;&nbsp;&nbsp;
    <Button type="danger">Danger</Button>
    &nbsp;&nbsp;&nbsp;
    <Button type="primary" loading={true}>
      Loading
    </Button>
  </Layout>
);

const AtomIcon = (
  <Layout>
    <Icon type="dashboard" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="rollback" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="retweet" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="scissor" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="delete" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="line-chart" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="lock" theme="outlined" />
    &nbsp;&nbsp;&nbsp;
    <Icon type="mail" theme="outlined" />
  </Layout>
);

const MolekulBreadcrumb = (
  <Layout>
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Component</BreadcrumbItem>
      <BreadcrumbItem>Molekul</BreadcrumbItem>
    </Breadcrumb>
  </Layout>
);

const MolekulDropdown = (
  <Layout>
    <Dropdown />
  </Layout>
);

storiesOf("Atom", module)
  .add("Buton", () => AtomButtonSample)
  .add("Icon", () => AtomIcon);

storiesOf("Molekul", module)
  .add("Dropdown ", () => MolekulDropdown)
  .add("Breadcrumb", () => MolekulBreadcrumb);
