import React from "react";
import {
  Typography,
  Row,
} from "antd";

import MaterialEditViewModel from "./MaterialEditViewModel";
import MaterialForm from "src/pages/Presentation/Material/View/Form/MaterialForm";

const { Title } = Typography;

const MaterialEditListView: React.FC = () => {

  const materialEditViewModel = new MaterialEditViewModel();

  return (
    <>
      <Row justify="center">
        <Title>Edite o seu gasto</Title>
      </Row>

      <MaterialForm materialViewModel={materialEditViewModel} />
    </>
  );
};

export default MaterialEditListView;
