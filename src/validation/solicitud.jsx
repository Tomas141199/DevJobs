import * as Yup from "yup";
export const solicitudSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    tel: Yup.string()
      .required("El Numero de contacto es obligatorio")
      .min(10, "El numero debe ser de 10 digitos")
      .max(10, "El numero no debe ser de mas 10 digitos"),
  });
};

const solicitudValues = {
  nombre: "",
  email: "",
  tel: "",
};

export { solicitudValues };

export default solicitudSchema;
