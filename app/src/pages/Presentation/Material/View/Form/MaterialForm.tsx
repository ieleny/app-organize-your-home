import React from "react";
import {
  Typography,
  Row,
  Input,
  Col,
  InputNumber,
  Button,
  notification,
  Divider,
} from "antd";

import MaterialFormViewModel from "./MaterialFormViewModel";
import IStrategy from "src/strategy/IStrategy";

const { Title } = Typography;

type MaterialFormProps = {
  materialViewModel: IStrategy;
};

const MaterialForm: React.FC<MaterialFormProps> = ({ materialViewModel }) => {
  const materialFormViewModel = new MaterialFormViewModel();

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = () => {
    materialFormViewModel.saveMaterial(materialViewModel);

    api["success"]({
      message: "A sua lista de materias foram salvas com sucesso!",
      description:
        "Para verificar sua lista, acesse no navbar a opção 'Listar'",
    });
  };

  return (
    <>
      {contextHolder}

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14}>
          <Title level={4}>Nome do produto:</Title>
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

export default MaterialForm;
