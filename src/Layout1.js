import React from "react";
// import { Layout, Menu } from "antd";

import Layout from 'antd/es/layout';
import 'antd/es/layout/style/css';
import Menu from 'antd/es/menu';
import 'antd/es/menu/style/css';

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
