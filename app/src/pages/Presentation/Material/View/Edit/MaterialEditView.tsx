import React from "react";
import {
  Typography,
  Row,
} from "antd";

import MaterialForm from "src/pages/Presentation/Material/View/Form/MaterialForm";

const { Title } = Typography;

const MaterialEditListView: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <Title>Edite o seu gasto</Title>
      </Row>

      <MaterialForm />
    </>
  );
};

export default MaterialEditListView;
