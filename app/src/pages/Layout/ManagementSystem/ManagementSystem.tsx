import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";

const { Content, Footer } = Layout;

const ManagementSystem: React.FC = () => {
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
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Planeje financeiramente a sua construção @2023
      </Footer>
    </Layout>
  );
};

export default ManagementSystem;
