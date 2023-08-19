import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Typography } from "antd";

import logo from "src/assets/logo.svg";
import {
  LIST_ROUTER,
  ADD_LIST_ROUTER,
  PRESENTATION_ROUTER,
} from "src/constants/routers";

const { Title } = Typography;
const { Header } = Layout;

const Navbar: React.FC = () => {
  
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>("");

  const navBarMenu: MenuProps["items"] = [
    {
      label: "Apresentação",
      key: PRESENTATION_ROUTER,
    },
    {
      label: "Inserir",
      key: ADD_LIST_ROUTER,
    },
    {
      label: "Listar",
      key: LIST_ROUTER,
    },
  ];
  
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  useEffect(() => {
    const atualLink = window.location.pathname;

    if (atualLink !== undefined) {
      setCurrent(atualLink);
    } else {
      setCurrent(PRESENTATION_ROUTER);
    }
  }, [setCurrent]);

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div>
        <img src={logo} alt="logo menu" />
      </div>

      <Menu
        style={{ minWidth: 0, flex: "auto" }}
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={navBarMenu}
      />

      <div
        style={{ display: "flex", justifyContent: "flex-end"}}
      >
        <Title
          style={{ color: "white" }}
          level={3}
        >
          Login
        </Title>
      </div>
    </Header>
  );
    
}
      
export default Navbar;