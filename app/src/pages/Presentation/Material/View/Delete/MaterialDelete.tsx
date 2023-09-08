import React, { Dispatch, SetStateAction } from "react";
import { Button, message, Popconfirm } from "antd";
import MaterialDeleteViewModel from "./MaterialDeleteViewModel";

const confirm = (
  materialId: number,
  setKey: Dispatch<SetStateAction<number>>
) => {
  const materialDeleteViewModel = new MaterialDeleteViewModel();
  const listQuantity = materialDeleteViewModel.listQuantity();

  materialDeleteViewModel.deleteMaterial(materialId);
  message.success("Alterado com sucesso");

  setKey(listQuantity);
};

const cancel = () => {
  message.success("Linha não deletada!");
};

interface DeleteProps {
  materialId: number;
  setKey: Dispatch<SetStateAction<number>>;
}

const Delete: React.FC<DeleteProps> = ({ materialId, setKey }) => (
  <Popconfirm
    title="Atenção!"
    description="Tem certeza que deseja deletar esse item?"
    onConfirm={() => confirm(materialId, setKey)}
    onCancel={() => cancel}
    okText="Sim"
    cancelText="Não"
  >
    <Button type="primary" danger>
      Delete
    </Button>
  </Popconfirm>
);

export default Delete;
