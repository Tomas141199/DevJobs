import { useState, useEffect } from "react";
import { getSalarios } from "./../helpers/getSalarios";

export const useSalarios = () => {
  const [salarios, setSalarios] = useState([]);

  useEffect(() => {
    getSalarios().then((sal) => {
      setSalarios(sal);
    });
  }, []);
  return salarios;
};
