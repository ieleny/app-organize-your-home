/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef } from "react";
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
import { useParams } from "react-router-dom";

const { Title } = Typography;

const materialFormViewModel = new MaterialFormViewModel();
  
const MaterialForm: React.FC = () => {
  const params = useParams();
  
  const [api, contextHolder] = notification.useNotification();

  const inputProductName = useRef<any>();
  const inputQuantityBought = useRef<any>();
  const inputPriceUnd = useRef<any>();

  const fillFields = useCallback(() => {
    const key = Number(params.id);
    const material = materialFormViewModel.searchMaterialById(key);

    if (material) {
      inputProductName.current.input.value = material?.productName;
      inputQuantityBought.current.value = material?.quantityBought;
      inputPriceUnd.current.value = material?.priceUnd;
    } 
  }, [params.id]);

  useEffect(() => {
    if (params?.id !== undefined) {
      fillFields();
    }
  }, [fillFields, params.id]);

  const saveRequest = () => {
    const key = params.id !== undefined ? Number(params.id) : undefined;

    try {
      materialFormViewModel.saveRequest(key);
      openNotificationWithIcon();
    } catch (error) {
      console.warn(error);
    }
  };

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "A sua lista de materias foram salvas com sucesso!",
      description:"Para verificar sua lista, acesse no navbar a opção 'Listar'",
    });
  };

  return (
    <>
      {contextHolder}

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14}>
          <Title level={4}>Nome do produto:</Title>
          <Input
            ref={inputProductName}
            name="productName"
            onChange={materialFormViewModel.onchangeProductName}
            size="large"
          />
        </Col>
      </Row>

      <Row justify="center" gutter={[24, 24]}>
        <Col span={7}>
          <Title level={4}>Quantidade comprada:</Title>
          <InputNumber
            ref={inputQuantityBought}
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
            ref={inputPriceUnd}
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
          <Button type="primary" onClick={() => saveRequest()}>
            Salvar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default MaterialForm;
