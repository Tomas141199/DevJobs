import * as Yup from "yup";
export const solicitudSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
  });
};

const solicitudValues = {
  nombre: "",
  email: "",
};

export { solicitudValues };

export default solicitudSchema;
