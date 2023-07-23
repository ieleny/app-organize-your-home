import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ManagementSystem from "src/pages/Layout/ManagementSystem";
import MaterialAddListView from "src/pages/Presentation/Material/View/Add/MaterialAddView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagementSystem />}>
          <Route path="adicionar-lista" element={<MaterialAddListView />} />
          <Route path="apresentacao" element={<MaterialAddListView />} />
          <Route path="contato" element={<MaterialAddListView />} />
          <Route path="lista" element={<MaterialAddListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
