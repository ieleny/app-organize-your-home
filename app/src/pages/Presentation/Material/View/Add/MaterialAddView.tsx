import React from "react";
import {
  Typography,
  Row,
  Divider,
} from "antd";

import MaterialAddViewModel from "./MaterialAddViewModel";
import MaterialForm from "../Form/MaterialForm";

const { Title } = Typography;

const MaterialAddListView: React.FC = () => {
  const materialAddViewModel = new MaterialAddViewModel();

  return (
    <>
      <Row justify="center">
        <Title>Adicione seus gastos com a construção</Title>
      </Row>

      <MaterialForm materialViewModel={materialAddViewModel} />

      <Divider orientation="center"></Divider>
    </>
  );
};

export default MaterialAddListView;
