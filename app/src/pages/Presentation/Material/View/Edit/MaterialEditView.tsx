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

import MaterialEditViewModel from "./MaterialEditViewModel";

const { Title } = Typography;

const MaterialEditListView: React.FC = () => {

  const materialEditViewModel = new MaterialEditViewModel();
  
  // TODO: Add form component

  return (
    <>
      <Row justify="center">
        <Title>Edite o seu gasto</Title>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14}>
          <Title level={4}>Adicione o nome do produto:</Title>
          <Input
            onChange={materialEditViewModel.onchangeProductName}
            size="large"
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[24, 24]}>
        <Col span={7}>
          <Title level={4}>Quantidade comprada:</Title>
          <InputNumber
            onChange={materialEditViewModel.onchangeQuantityBought}
            size="large"
            min={1}
            defaultValue={1}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={7}>
          <Title level={4}>Valor do produto (UND): </Title>
          <InputNumber<string>
            onChange={materialEditViewModel.onchangePriceUnd}
            size="large"
            defaultValue="1"
            min="0"
            step="0.01"
            stringMode
            style={{ width: "100%" }}
          />
        </Col>
      </Row>

      <Divider orientation="center"></Divider>

      <Row justify="space-around" gutter={[40, 40]} align="bottom">
        <Col>
          <Button
            type="primary"
            onClick={() => materialEditViewModel.saveMaterial()}
          >
            Editar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default MaterialEditListView;
