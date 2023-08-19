import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Typography } from "antd";

import logo from "src/assets/logo.svg";

const { Title } = Typography;
const { Header } = Layout;

const Navbar: React.FC = () => {
  
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>("");

  const navBarMenu: MenuProps["items"] = [
    {
      label: "Apresentação",
      key: "/apresentacao",
    },
    {
      label: "Inserir",
      key: "/adicionar-lista",
    },
    {
      label: "Listar",
      key: "/lista",
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
      setCurrent("/apresentacao");
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