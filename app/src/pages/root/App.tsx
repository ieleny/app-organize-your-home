import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ptBr from "antd/locale/pt_BR";
import "./App.css";

import ManagementSystem from "src/pages/Layout/ManagementSystem";
import MaterialAddListView from "src/pages/Presentation/Material/View/Add/MaterialAddView";
import MaterialListView from "src/pages/Presentation/Material/View/List/MaterialListView";
import MaterialEditListView from "../Presentation/Material/View/Edit/MaterialEditView";
import {
  LIST_ROUTER,
  ADD_LIST_ROUTER,
  PRESENTATION_ROUTER,
  EDIT_ROUTER_ID,
} from "src/constants/routers";

function App() {
  return (
    <ConfigProvider locale={ptBr}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManagementSystem />}>
            <Route
              path={PRESENTATION_ROUTER}
              index
              element={
                <center>
                  <h1>APRESENTAÇÃO</h1>
                </center>
              }
            />
            <Route path={ADD_LIST_ROUTER} element={<MaterialAddListView />} />
            <Route path={LIST_ROUTER} element={<MaterialListView />} />
            <Route path={EDIT_ROUTER_ID} element={<MaterialEditListView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
