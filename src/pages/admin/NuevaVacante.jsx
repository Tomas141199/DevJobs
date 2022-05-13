//Form validation and schemas
import { Form, Formik } from "formik";
import Button from "../../components/form/Button";
import {
  publicacionSchema,
  publicacionValues,
} from "./../../validation/publicacion";
//Components
import FieldWithLabel from "./../../components/form/FieldWithLabel";
import Select from "./../../components/form/Select";
import { useState } from "react";
import GoogleMap from "../../components/maps/GoogleMap";
import TextField from "../../components/form/TrixEditor";
import NavAdmin from "../../components/ui/NavAdmin";
import Fade from "react-reveal/Fade";
//Form data
import ListSkills from "./../../components/form/ListSkills";
import ImageUploader from "./../../components/file/ImageUploader";
import useCollection from "./../../hooks/useCollection";
import fireService from "./../../firebase/firebaseservice";
//Notify
import { useContext } from "react";
import NotifyContext from "./../../context/notify/notifyContext";
import { errorNotify } from "./../../helpers/notify";
import { useNavigate } from "react-router-dom";
import AuthContext from "./../../context/auth/AuthContext";

const NuevoVacante = () => {
  //Notificacion
  const navigate = useNavigate();
  const { mostrarNotificacion } = useContext(NotifyContext);
  const { usuario } = useContext(AuthContext);
  //Valores para los inputs
  const categorias = useCollection("Categorias");
  const experiencias = useCollection("Experiencias");
  const salarios = useCollection("Salarios");
  //Valores para el formulario
  const [urlImagen, setUrlImagen] = useState("");
  const [skillList, setSkillList] = useState("");
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 19.0043346,
    lng: -98.20169539999999,
  });

  const handleSubmit = (values) => {
    //Extracion de los atributos para crear el objeto
    const { titulo, categoria, experiencia, salario, descripcion, empresa } =
      values;

    if (address === "") {
      errorNotify("Agrega una ubicacion");
      return;
    }

    if (urlImagen == "") {
      errorNotify("Agrega una imagen");
      return;
    }

    const vacante = {
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      titulo,
      descripcion,
      categoria,
      experiencia,
      salario,
      address,
      mapCenter,
      urlImagen,
      empresa,
      skillList,
      candidatos: 0,
      estado: true,
      createdAt: Date.now(),
    };

    try {
      fireService.addVacante(vacante);
      mostrarNotificacion(
        "Creacion exitosa!, tu publicacion ya se en cuentra en el inicio"
      );
      navigate("/");
    } catch (error) {
      errorNotify(error.code);
    }
  };

  return (
    <>
      <NavAdmin />
      <Fade big>
        <div className="w-10/12 container bg-gray-300 py-4 px-1 mx-auto mt-10">
          <h1 className="text-center text-blue-deep font-semibold text-2xl">
            Nueva <span className="text-primary-jade">Vacante</span>
          </h1>
          <Formik
            initialValues={publicacionValues}
            validationSchema={publicacionSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mt-8 w-full sm:w-11/12 mx-auto">
              <FieldWithLabel
                name="titulo"
                type="text"
                placeholder="Titulo de la vacante"
                label="Titulo"
              />
              <FieldWithLabel
                name="empresa"
                type="text"
                placeholder="Empresa que oferta"
                label="Nombre de la empresa"
              />
              <Select values={categorias} name="categoria" label="Categoria" />
              <Select
                values={experiencias}
                name="experiencia"
                label="Experiencia"
              />
              <Select values={salarios} name="salario" label="Salario" />

              <div className="mb-8 h-10">
                <label className="text-xs">Imagen vacante</label>
                <ImageUploader setUrlImagen={setUrlImagen} />
              </div>

              <ListSkills setSkillList={setSkillList} />

              <TextField />

              <label className="text-xs mt-3">Ubicacion</label>
              {/* Mapa */}
              <GoogleMap
                address={address}
                setAddress={setAddress}
                mapCenter={mapCenter}
                setMapCenter={setMapCenter}
              />

              {/* Submit para enviar formulario */}
              <Button value="Publicar" color="bg-primary-jade" />
            </Form>
          </Formik>
        </div>
      </Fade>
    </>
  );
};

export default NuevoVacante;
