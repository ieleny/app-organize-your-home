import React, { useEffect } from "react";
import { Layout, theme } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { ADD_LIST_ROUTER } from "src/constants/routers";
import Navbar from "src/components/Navbar";
import SideBar from "src/components/SideBar";

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
      navigate(ADD_LIST_ROUTER);
    }
  }, [navigate, location]);

  return (
    <Layout>
      <SideBar />

      <Layout>
        <Navbar />
        <Content>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
              padding: "0 50px",
              minHeight: "86vh",
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Planeje financeiramente a sua construção @2023
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ManagementSystem;
