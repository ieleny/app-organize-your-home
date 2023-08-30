import React from "react";
import { Button, message, Popconfirm } from "antd";
import MaterialDeleteViewModel from "./MaterialDeleteViewModel";

const confirm = (materialId: number) => {
  
  const materialDeleteViewModel = new MaterialDeleteViewModel(); 

  materialDeleteViewModel.deleteMaterial(materialId);
  message.success("Alterado com sucesso");
};

const cancel = () => {
  message.success("Linha não deletada!");
};

interface DeleteProps {
  materialId: number;
}

const Delete: React.FC<DeleteProps> = ({materialId} ) => (
  <Popconfirm
    title="Atenção!"
    description="Tem certeza que deseja deletar esse item?"
    onConfirm={() => confirm(materialId)}
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
