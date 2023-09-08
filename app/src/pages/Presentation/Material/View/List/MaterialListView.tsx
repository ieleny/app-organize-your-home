import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Table, Row, Col, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

import { EDIT_ROUTER } from "src/constants/routers";
import MaterialListViewModel from "./MaterialListViewModel";
import { IMaterial } from "src/interface/IMaterial";
import Delete from "src/pages/Presentation/Material/View/Delete/MaterialDelete";

const { Title } = Typography;

const MaterialListView: React.FC = () => {

  const materialListViewModel = new MaterialListViewModel();
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  const columns: ColumnsType<IMaterial> = [
    {
      title: "Nome material",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantidade comprada",
      dataIndex: "quantityBought",
      key: "quantityBought",
    },
    {
      title: "Preço da unidade",
      dataIndex: "priceUnd",
      key: "priceUnd",
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => actionEdit(record.key)}>
            Editar
          </Button>
          <Delete materialId={record.key} setKey={setKey} />
        </Space>
      ),
    },
  ];

  const actionEdit = (materialId: number) => {
    navigate(`${EDIT_ROUTER}/${materialId}`);
  };

  return (
    <>
      <Row justify="center">
        <Title>Lista dos seus gastos</Title>
      </Row>

      <Row justify="center" key={key}>
        <Col span={14}>
          <Table
            dataSource={materialListViewModel.listMaterial()}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default MaterialListView;
