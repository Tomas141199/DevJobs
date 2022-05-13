import * as Yup from "yup";
export const publicacionSchema = () => {
  return Yup.object({
    titulo: Yup.string().required("El nombre es obligatorio"),
    empresa: Yup.string().required("La empresa es obligatorio"),
    categoria: Yup.string().required("La categoria es obligatoria"),
    experiencia: Yup.string().required("La experiencia es obligatoria"),
    salario: Yup.string().required("El salario es obligatorio"),
    descripcion: Yup.string()
      .required("El cuerpo de la noticia es obligatorio")
      .min(50, "Almenos 50 caracteres"),
  });
};

const publicacionValues = {
  titulo: "",
  empresa: "",
  categoria: "",
  experiencia: "",
  salario: "",
  descripcion: "",
};

export { publicacionValues };

export default publicacionSchema;
