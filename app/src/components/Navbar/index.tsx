import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Typography } from "antd";

import logo from "src/assets/logo.svg";

const { Title } = Typography;
const { Header } = Layout;

const Navbar: React.FC = () => {
  
  const [current, setCurrent] = useState("apresentacao");

  const navBarMenu: MenuProps["items"] = [
    {
      label: "Apresentação",
      key: "apresentacao",
    },
    {
      label: "Contato",
      key: "contato",
    },
    {
      label: "Inserir",
      key: "adicionar-lista",
    },
    {
      label: "Listar",
      key: "list",
    },
  ];
  
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    redirect(`/${e.key}`);
  };

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