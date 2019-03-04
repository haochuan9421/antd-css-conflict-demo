import React from "react";
// import { Layout, Menu } from "antd";

import Layout from 'antd/es/layout';
import 'antd/es/layout/style/css';
import Menu from 'antd/es/menu';
import 'antd/es/menu/style/css';

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
