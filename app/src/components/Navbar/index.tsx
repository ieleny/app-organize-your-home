import React from "react";
import { Layout, Typography } from "antd";

const { Title } = Typography;

const { Header } = Layout;

const Navbar: React.FC = () => {

  return (
    <Header style={{ backgroundColor: "#072f63" }}>
      <div>
        <Title
          style={{
            color: "white",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "15px",
          }}
          level={2}
        >
          Planeje os custos da obra
        </Title>
      </div>
    </Header>
  );
    
}
      
export default Navbar;