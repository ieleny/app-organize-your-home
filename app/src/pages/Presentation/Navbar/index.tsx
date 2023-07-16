import React, { useState } from "react";

import logo from "../../../assets/logo.svg";

import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const Navbar: React.FC = () => {
  
  const [current, setCurrent] = useState("apresentacao");

  const navBarMenu: MenuProps["items"] = 
  [
    {
      label: "Apresentação",
      key: "apresentacao",
    },
    {
      label: "Contato",
      key: "contato",
    },
  ];
  
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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