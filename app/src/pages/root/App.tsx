import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ManagementSystem from "src/pages/Layout/ManagementSystem";
import ViewMaterialList from "src/pages/Presentation/Material/View/List/MaterialListView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagementSystem />}>
          <Route path="/adicionar-lista" element={<ViewMaterialList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
