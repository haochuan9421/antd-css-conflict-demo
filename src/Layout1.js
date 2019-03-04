import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

class Layout1 extends React.Component {
  render() {
    return (
      <Header>
        <Menu mode="horizontal">
          <Menu.Item key="alipay">
            <a href="https://ant.design">ant design1</a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Layout1;
