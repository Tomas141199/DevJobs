import { Form, Formik } from "formik";
import Button from "../../components/form/Button";
import {
  publicacionSchema,
  publicacionValues,
} from "./../../validation/publicacion";
import FieldWithLabel from "./../../components/form/FieldWithLabel";
import Field from "./../../components/form/Field";
import Select from "./../../components/form/Select";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import GoogleMap from "../../components/maps/GoogleMap";

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];
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
  "React Hooks",
  "Redux",
  "Apollo",
  "GraphQL",
  "TypeScript",
  "PHP",
  "Laravel",
  "Symfony",
  "Python",
  "Django",
  "ORM",
  "Sequelize",
  "Mongoose",
  "SQL",
  "MVC",
  "SASS",
  "WordPress",
  "Express",
  "Deno",
  "React Native",
  "Flutter",
  "MobX",
  "C#",
  "Ruby on Rails",
];

const NuevoVacante = () => {
  const valuesAux = ["valor1", "valor2", "valor3"];
  const [file, setFile] = useState(null);
  const [urlImagen, setUrlImagen] = useState("");
  const [skillList, setSkillList] = useState("");
  const [habilidades, setHabilidades] = useState(new Set());
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 19.0043346,
    lng: -98.20169539999999,
  });
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };

  const activar = (e) => {
    if (e.target.classList.contains("bg-primary-jade")) {
      e.target.classList.remove("bg-primary-jade", "text-white");
      // Eliminar del set de habilidades
      habilidades.delete(e.target.textContent);
    } else {
      e.target.classList.add("bg-primary-jade", "text-white");
      // Agregar al set de habilidades
      habilidades.add(e.target.textContent);
    }
    console.log(habilidades);
    const stringHabilidades = Array.from(habilidades).join(",");
    // console.log(stringHabilidades);
    setSkillList(stringHabilidades);
    console.log(stringHabilidades);
  };
  return (
    <div className="container bg-light-gray py-4 px-1 mx-auto mt-10">
      <h1 className="text-center text-blue-deep font-semibold text-2xl">
        Nueva <span className="text-primary-jade">Vacante</span>
      </h1>
      <Formik
        initialValues={publicacionValues}
        validationSchema={publicacionSchema}
      >
        <Form className="mt-8 w-full sm:w-11/12 mx-auto">
          <FieldWithLabel
            name="titulo"
            type="text"
            placeholder="Titulo de la vacante"
            label="Titulo"
          />
          <Select values={valuesAux} name="categoria" label="Categoria" />
          <Select values={valuesAux} name="experiencia" label="Experiencia" />
          <Select values={valuesAux} name="salario" label="Salario" />

          <div className="mb-8 h-10">
            <label className="text-xs">Imagen vacante</label>
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              maxSize={10}
              name="file"
              types={fileTypes}
            />
          </div>

          <div>
            <label className="text-xs">Habilidades requeridas</label>
            <ul className="flex flex-wrap">
              {skills.map((skill) => (
                <li
                  onClick={activar}
                  className="duration-300  text-sm border border-gray-500 px-10 py-1 rounded-sm mb-3 mr-4 cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <label className="text-xs mt-3">Ubicacion</label>
          {/* Mapa */}
          <GoogleMap
            address={address}
            setAddress={setAddress}
            mapCenter={mapCenter}
            setMapCenter={setMapCenter}
          />

          {/* Submit para enviar formulario */}
          <Button value="Crear cuenta" color="bg-primary-red" />
        </Form>
      </Formik>
    </div>
  );
};

export default NuevoVacante;
