import React from 'react';
import Navbar from "src/components/Navbar";
import ViewMaterialList from 'src/pages/Material/View/List/MaterialListView';

import { Layout, theme } from 'antd';

const { Content, Footer } = Layout;

const Presentation: React.FC = () => {
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
            <h1>TELA DE APRESENTAÇÃO DO PROJETO</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Planeje financeiramente a sua construção @2023
        </Footer>
      </Layout>
    );
}

export default Presentation;