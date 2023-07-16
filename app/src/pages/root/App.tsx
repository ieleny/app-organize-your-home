import { Layout, theme } from "antd";
import Navbar from "src/components/Navbar";
import Routes from "src/pages/Routes";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Routes />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Planeje financeiramente a sua construção @2023
      </Footer>
    </Layout>
  );
}

export default App;
