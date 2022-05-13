import { useState, useEffect } from "react";
import { getCategories } from "./../helpers/getCategorias";
export const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategories().then((cat) => {
      setCategorias(cat);
    });
  }, []);
  return categorias;
};
