import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  LIST_ROUTER,
  ADD_LIST_ROUTER,
} from "src/constants/routers";
import logo from "src/assets/logo.svg";

const { Sider } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>("");
  const navbarColor = "dark";

  const navBarMenu: MenuProps["items"] = [
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

    if (atualLink === '/') {
      setCurrent(ADD_LIST_ROUTER);
    } else {
      setCurrent(atualLink);
    }

  }, [setCurrent]);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ backgroundColor: navbarColor }}
    >
      <div>
        <img src={logo} alt="logo atomico do react" />
      </div>

      <Menu
        style={{ minWidth: 0, flex: "auto", backgroundColor: navbarColor }}
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={navBarMenu}
      />
    </Sider>
  );
};

export default Navbar;
