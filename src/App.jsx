import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import NuevoVacante from "./pages/admin/NuevaVacante";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="/admin/crear-publicacion" element={<NuevoVacante />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
