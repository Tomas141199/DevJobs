import * as Yup from "yup";
export const registroSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatorio")
      .min(6, "La contraseña debe tener una longitud de 6"),
  });
};

const registroValues = {
  nombre: "",
  email: "",
  password: "",
};

export { registroValues };

export default registroSchema;
