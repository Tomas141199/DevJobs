import slide from "../../assets/image-slide-1.jpg";
import { useState } from "react";
import StaticGoogleMap from "../../components/ui/StaticGoogleMap";
import Pulse from "react-reveal/Pulse";
import { Form, Formik } from "formik";
import Field from "./../../components/form/Field";
import Button from "./../../components/form/Button";
import { solicitudSchema, solicitudValues } from "./../../validation/solicitud";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];
const skills = [
  "HTML5",
  "CSS3",
  "CSSGrid",
  "Flexbox",
  "JavaScript",
  "jQuery",
  "Node",
  "Angular",
  "VueJS",
  "ReactJS",
];

const VistaVacante = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 19.0043346,
    lng: -98.20169539999999,
  });
  return (
    <div className="w-10/12 container mx-auto mt-16">
      <h1 className="text-center text-blue-deep font-semibold text-2xl">
        <span className="text-primary-jade mr-2">Vacante</span>
        Facebook
      </h1>
      <div className="mt-12 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <div className="text-md mt-2">
            <span className="text-primary-jade">Publicado: </span> hace 3 meses
          </div>
          <div className="text-md mt-2">
            <span className="text-primary-jade">Categoria: </span> Front-end
          </div>
          <div className="text-md mt-2">
            <span className="text-primary-jade">Salario: </span> 122USD
          </div>
          <div className="text-md mt-2">
            <span className="text-primary-jade">Ubicacion: </span> Mexico
          </div>
          <div className="text-md mt-2">
            <span className="text-primary-jade">Experiencia: </span> 2 anios
          </div>

          <div className="mt-12">
            <h2 className="text-lg mb-4 block font-semibold">
              Conocimientos y Tecnologías
            </h2>
            <ul className="flex flex-wrap">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="duration-300 text-sm border border-gray-500 px-10 py-1 rounded-sm mb-3 mr-4 cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <img src={slide} alt="imagen" className="rounded-sm my-4" />

          <div className="mt-5 mb-12">
            <p className="text-sm">
              Ea enim nulla quis do fugiat elit cillum proident in incididunt
              esse. Est mollit cupidatat non magna cupidatat adipisicing
              pariatur ullamco officia non officia sunt amet cillum. Esse in ex
              quis in sit nisi aliqua non veniam in eiusmod amet laboris
              ullamco. Ad quis nostrud aute dolore velit ad quis adipisicing do
              minim cupidatat. Ea enim nulla quis do fugiat elit cillum proident
              in incididunt esse. Est mollit cupidatat non magna cupidatat
              adipisicing pariatur ullamco officia non officia sunt amet cillum.
              Esse in ex quis in sit nisi aliqua non veniam in eiusmod amet
              laboris ullamco. Ad quis nostrud aute dolore velit ad quis
              adipisicing do minim cupidatat.
            </p>
          </div>
          <StaticGoogleMap mapCenter={mapCenter} />
        </div>
        <div className="flex-1 self-start">
          <div className="relative flex-1 bg-bg-primary-blue py-2 px-10 rounded-sm">
            <Pulse>
              <h1 className="relative z-30 text-white font-medium text-xl mt-6">
                Ingresa todos los campos para
                <span className="text-primary-red ml-1">crear tu cuenta</span>
              </h1>
            </Pulse>

            <Formik
              initialValues={solicitudValues}
              validationSchema={solicitudSchema}
            >
              <Form className="mt-8 w-full sm:w-11/12 mx-auto">
                <Field name="nombre" type="text" placeholder="Tu nombre" />
                <Field name="email" type="email" placeholder="Tu Correo" />
                <div className="mb-8 h-10">
                  <label className="text-,d text-white font-semibold">CV</label>
                  <FileUploader
                    multiple={false}
                    maxSize={10}
                    name="file"
                    types={fileTypes}
                  />
                </div>
                {/* Submit para enviar formulario */}
                <Button value="Aplicar" color="bg-primary-red" />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaVacante;
