import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import NuevoVacante from "./pages/admin/NuevaVacante";
import PanelVacantes from "./pages/admin/Panel";
import Vacantes from "./pages/Vacantes";
import VistaVacante from "./pages/view/Vacante";
import fireService from "./firebase/firebaseservice";
import AuthContext from "./context/auth/AuthContext";
import useAuth from "./hooks/useAuth";
import NotifyState from "./context/notify/notifyState";
import EditarVacante from "./pages/admin/EditarVacantes";
import Candidatos from "./pages/admin/Candidatos";

function App() {
  const usuario = useAuth();
  return (
    <AuthContext.Provider value={{ usuario }}>
      <NotifyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Registro />} />
              <Route path="admin/" element={<PanelVacantes />} />
              <Route
                path="admin/crear-publicacion"
                element={<NuevoVacante />}
              />
              <Route path="vacantes" element={<Vacantes />} />
              <Route path="vacante/:id" element={<VistaVacante />} />
              <Route path="vacante/edit/:id" element={<EditarVacante />} />
              <Route path="candidatos/:id" element={<Candidatos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotifyState>
    </AuthContext.Provider>
  );
}

export default App;
