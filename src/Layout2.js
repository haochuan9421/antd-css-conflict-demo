import React from "react";
import { Layout, Menu } from "antd";

class Layout2 extends React.Component {
  render() {
    return (
      <Layout.Header>
        <Menu mode="horizontal">
          <Menu.Item key="alipay">
            <a href="https://ant.design">ant design2</a>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default Layout2;
