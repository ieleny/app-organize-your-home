import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ManagementSystem from "src/pages/Layout/ManagementSystem";
import MaterialAddListView from "src/pages/Presentation/Material/View/Add/MaterialAddView";
import MaterialListView from "src/pages/Presentation/Material/View/List/MaterialListView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagementSystem />}>
          <Route path="apresentacao" index element={<MaterialAddListView />} />
          <Route path="adicionar-lista" element={<MaterialAddListView />} />
          <Route path="contato" element={<MaterialAddListView />} />
          <Route path="lista" element={<MaterialListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
