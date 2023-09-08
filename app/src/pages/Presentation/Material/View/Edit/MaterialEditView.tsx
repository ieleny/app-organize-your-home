import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Row,
} from "antd";

import MaterialForm from "src/pages/Presentation/Material/View/Form/MaterialForm";
import MaterialFormViewModel from "src/pages/Presentation/Material/View/Form/MaterialFormViewModel";

const { Title } = Typography;

const materialFormViewModel = new MaterialFormViewModel();

const MaterialEditListView: React.FC = () => {
  const params = useParams();
  const [hasMaterial, setHasMaterial] = useState(false);

  useEffect(() => {
    if (params?.id !== undefined) {
      const key = Number(params.id);
      const material = materialFormViewModel.searchMaterialById(key);

      if (material !== undefined) {
        setHasMaterial(true);
      }
    }
  }, [params.id]);
  
  return (
    <>
      {hasMaterial ? (
        <>
          <Row justify="center">
            <Title>Edite o seu gasto</Title>
          </Row>
          <MaterialForm />
        </>
      ) : (
        <Row justify="center">
          <Title>Ops! Parece que não existe esse valor para ser editado!</Title>
        </Row>
      )}
    </>
  );
};

export default MaterialEditListView;
