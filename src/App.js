import React, { Component } from "react";
import Loadable from "react-loadable";
import 'antd/dist/antd.css';

const Layout1 = Loadable({
  loader: () => import("./Layout1"),
  loading() {
    return <div>Loading...</div>;
  }
});
const Layout2 = Loadable({
  loader: () => import("./Layout2"),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Layout1 />
        <Layout2 />
      </div>
    );
  }
}

export default App;
