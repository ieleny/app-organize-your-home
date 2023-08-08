import React from "react";
import {
  Typography,
  Row,
  Input,
  Col,
  Button,
  InputNumber,
  Divider,
} from "antd";

import MaterialFormViewModel from "./MaterialFormViewModel";

const { Title } = Typography;

const MaterialForm: React.FC = () => {
  const materialFormViewModel = new MaterialFormViewModel();

  return (
    <>
      <Row justify="center">
        <Title>Edite o seu gasto</Title>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14}>
          <Title level={4}>Adicione o nome do produto:</Title>
          <Input
            onChange={materialFormViewModel.onchangeProductName}
            size="large"
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[24, 24]}>
        <Col span={7}>
          <Title level={4}>Quantidade comprada:</Title>
          <InputNumber
            onChange={materialFormViewModel.onchangeQuantityBought}
            size="large"
            min={1}
            defaultValue={1}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={7}>
          <Title level={4}>Valor do produto (UND): </Title>
          <InputNumber<string>
            onChange={materialFormViewModel.onchangePriceUnd}
            size="large"
            defaultValue="1"
            min="0"
            step="0.01"
            stringMode
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default MaterialForm;
