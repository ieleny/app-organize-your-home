import React, { useEffect } from "react";
import { Layout, theme } from "antd";
import { Outlet, useNavigate,useLocation  } from "react-router-dom";
import Navbar from "src/components/Navbar";

const { Content, Footer } = Layout;

const ManagementSystem: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName === "/") {
      navigate("/adicionar-lista");
      navigate("/lista");
    }
  }, [navigate, location]);

  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer, padding: "0 50px",  minHeight: '86vh' }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Planeje financeiramente a sua construção @2023
      </Footer>
    </Layout>
  );
};

export default ManagementSystem;
