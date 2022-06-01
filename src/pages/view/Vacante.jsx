import { useState, useEffect, useContext } from "react";
import StaticGoogleMap from "../../components/ui/StaticGoogleMap";
import Pulse from "react-reveal/Pulse";
import { Form, Formik } from "formik";
import Field from "./../../components/form/Field";
import Button from "./../../components/form/Button";
import { solicitudSchema, solicitudValues } from "./../../validation/solicitud";
import { useParams } from "react-router-dom";
import fireService from "./../../firebase/firebaseservice";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Spin from "./../../components/spinners/Spin";
import NavCategorias from "../../components/ui/NavCategorias";
import CVUploader from "./../../components/file/FileUploader";
import { errorNotify } from "./../../helpers/notify";
import { ToastContainer } from "react-toastify";
import NotifyContext from "./../../context/notify/notifyContext";
import { useNavigate } from "react-router-dom";
import SelectCode from "../../components/form/SelectCode";
import { countryCodes } from "./../../helpers/getCountryCodes";

const VistaVacante = () => {
  const { id } = useParams();
  const [vacante, setVacante] = useState([]);
  const [loading, setLoading] = useState(false);
  const [urlFile, setUrlFile] = useState("");
  const { mostrarNotificacion } = useContext(NotifyContext);
  const navigate = useNavigate();
  const codes = countryCodes;
  console.log(codes);

  useEffect(() => {
    setLoading(true);
    const getVacante = async () => {
      const data = await fireService.getVacanteById(id);
      setVacante(data);
      setLoading(false);
    };
    getVacante();
  }, []);

  const {
    titulo,
    createdAt,
    categoria,
    salario,
    address,
    experiencia,
    urlImagen,
    mapCenter,
    skillList,
    descripcion,
    candidatos,
  } = vacante;

  const procesarSolicitud = async (values) => {
    if (urlFile === "") {
      errorNotify("El CV es obligatorio");
      return;
    }

    const candidato = {
      nombre: values.nombre,
      correo: values.email,
      telefono: `${values.code + values.tel}`,
      urlCV: urlFile,
      vacanteId: id,
      createdAt: Date.now(),
    };

    try {
      await fireService.addCandidato(candidato, candidatos);
      mostrarNotificacion(
        "Tu solicitud se ha envidado correctamente, espera una respuesta"
      );
      navigate("/");
    } catch (error) {
      errorNotify(error);
    }
  };

  return (
    <>
      <NavCategorias />
      <div className="w-10/12 container mx-auto mt-16 mb-12">
        <ToastContainer />
        {loading ? (
          <Spin />
        ) : (
          <>
            <h1 className="text-center text-blue-deep font-semibold text-2xl">
              <span className="text-primary-jade mr-2">Vacante</span>
              {titulo}
            </h1>
            <div className="mt-12 flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <div className="text-md mt-2">
                  <span className="text-primary-jade">Publicado: </span>{" "}
                  {createdAt &&
                    formatDistanceToNow(new Date(createdAt), { locale: es })}
                </div>
                <div className="text-md mt-2">
                  <span className="text-primary-jade">Categoria: </span>{" "}
                  {categoria}
                </div>
                <div className="text-md mt-2">
                  <span className="text-primary-jade">Salario: </span> {salario}
                </div>
                <div className="text-md mt-2">
                  <span className="text-primary-jade">Ubicacion: </span>{" "}
                  {address}
                </div>
                <div className="text-md mt-2">
                  <span className="text-primary-jade">Experiencia: </span>{" "}
                  {experiencia}
                </div>

                <div className="mt-12">
                  <h2 className="text-lg mb-4 block font-semibold">
                    Conocimientos y Tecnologías
                  </h2>
                  <ul className="flex flex-wrap">
                    {skillList &&
                      skillList.split(",").map((skill, index) => (
                        <li
                          key={index}
                          className="duration-300 text-sm border border-gray-500 px-10 py-1 rounded-sm mb-3 mr-4 cursor-pointer"
                        >
                          {skill}
                        </li>
                      ))}
                  </ul>
                </div>

                <img src={urlImagen} alt="imagen" className="rounded-sm my-4" />

                <div className="mt-5 mb-12">
                  <p className="text-sm">{descripcion}</p>
                </div>
                {loading ? (
                  "Cargando..."
                ) : (
                  <StaticGoogleMap mapCenter={mapCenter} />
                )}
              </div>
              <div className="flex-1 self-start">
                <div className="relative flex-1 bg-bg-primary-blue py-2 px-10 rounded-sm">
                  <Pulse>
                    <h1 className="relative z-30 text-white font-medium text-xl mt-6">
                      Ingresa todos los campos para
                      <span className="text-primary-red ml-1">
                        crear tu cuenta
                      </span>
                    </h1>
                  </Pulse>

                  <Formik
                    initialValues={solicitudValues}
                    validationSchema={solicitudSchema}
                    onSubmit={procesarSolicitud}
                  >
                    <Form className="mt-8 w-full sm:w-11/12 mx-auto">
                      <label
                        htmlFor=""
                        className="text-white font-bold text-xl mb-2 block"
                      >
                        Informacion personal
                      </label>
                      <Field
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre"
                      />

                      <Field
                        name="email"
                        type="email"
                        placeholder="Tu Correo"
                      />

                      <label
                        htmlFor=""
                        className="text-white font-bold text-xl mb-2 block"
                      >
                        Numero de contacto
                      </label>

                      <SelectCode
                        values={codes}
                        name="code"
                        label="Codigo del pais"
                      />

                      <Field
                        name="tel"
                        type="tel"
                        placeholder="Numero de contacto"
                      />
                      <div className="mb-8 h-10">
                        <label className="text-,d text-white font-semibold">
                          CV
                        </label>
                        <CVUploader setUrlFile={setUrlFile} />
                      </div>
                      {/* Submit para enviar formulario */}
                      <Button value="Aplicar" color="bg-primary-red" />
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default VistaVacante;
