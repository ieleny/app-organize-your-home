import React from "react";
import {
  Typography,
  Row,
} from "antd";

import MaterialForm from "../Form/MaterialForm";

const { Title } = Typography;

const MaterialAddListView: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <Title>Adicione seus gastos com a construção</Title>
      </Row>

      <MaterialForm />
    </>
  );
};

export default MaterialAddListView;
