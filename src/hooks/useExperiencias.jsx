import { useState, useEffect } from "react";
import { getExperience } from "./../helpers/getExperiencia";
export const useExperiencia = () => {
  const [experiencias, setExp] = useState([]);

  useEffect(() => {
    getExperience().then((ex) => {
      setExp(ex);
    });
  }, []);
  return experiencias;
};
