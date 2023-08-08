import React from "react";
import {
  Typography,
  Row,
  Input,
  Col,
  Button,
  InputNumber,
  Divider,
  notification,
} from "antd";

import MaterialAddViewModel from "./MaterialAddViewModel";

const { Title } = Typography;

const MaterialAddListView: React.FC = () => {
  const materialAddViewModel = new MaterialAddViewModel();
  const [api, contextHolder] = notification.useNotification();
  
  const openNotificationWithIcon = () => {

    materialAddViewModel.saveMaterial();

    api["success"]({
      message: "A sua lista de materias foram salvas com sucesso!",
      description:
        "Para verificar sua lista, acesse no navbar a opção 'Listar'",
    });
  };

  // TODO: Add form component

  return (
    <>
      {contextHolder}

      <Row justify="center">
        <Title>Adicione seus gastos com a construção</Title>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14}>
          <Title level={4}>Adicione o nome do produto:</Title>
          <Input
            onChange={materialAddViewModel.onchangeProductName}
            size="large"
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[24, 24]}>
        <Col span={7}>
          <Title level={4}>Quantidade comprada:</Title>
          <InputNumber
            onChange={materialAddViewModel.onchangeQuantityBought}
            size="large"
            min={1}
            defaultValue={1}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={7}>
          <Title level={4}>Valor do produto (UND): </Title>
          <InputNumber<string>
            onChange={materialAddViewModel.onchangePriceUnd}
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
          <Button type="primary" onClick={() => openNotificationWithIcon()}>
            Salvar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default MaterialAddListView;
