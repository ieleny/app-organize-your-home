import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ptBr from "antd/locale/pt_BR";
import "./App.css";
import ManagementSystem from "src/pages/Layout/ManagementSystem";
import MaterialAddListView from "src/pages/Presentation/Material/View/Add/MaterialAddView";
import MaterialListView from "src/pages/Presentation/Material/View/List/MaterialListView";
import MaterialEditListView from "../Presentation/Material/View/Edit/MaterialEditView";

function App() {
  return (
    <ConfigProvider locale={ptBr}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManagementSystem />}>
            <Route
              path="apresentacao"
              index
              element={
                <center>
                  <h1>APRESENTAÇÃO</h1>
                </center>
              }
            />
            <Route path="adicionar-lista" element={<MaterialAddListView />} />
            <Route path="lista" element={<MaterialListView />} />
            <Route path="editar" element={<MaterialEditListView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
