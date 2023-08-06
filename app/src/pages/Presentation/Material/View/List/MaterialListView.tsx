import React from "react";
import { Typography, Table, Row, Col } from "antd";

import MaterialListViewModel from "./MaterialListViewModel";

const { Title } = Typography;

const MaterialListView: React.FC = () => {

  const materialListViewModel = new MaterialListViewModel();

  console.log(materialListViewModel.listMaterial());

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  return (
    <>
      <Row justify="center">
        <Title>Lista do seus gastos</Title>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14} style={{ padding: "40px 0" }}>
          <Table
            dataSource={materialListViewModel.listMaterial()}
            columns={materialListViewModel.columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default MaterialListView;
