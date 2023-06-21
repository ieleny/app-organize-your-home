import React, { useState } from "react";

import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
  
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
        <div className="demo-logo" />
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navBarMenu}
        />
      </Header>
  );
    
}
      
export default Navbar;