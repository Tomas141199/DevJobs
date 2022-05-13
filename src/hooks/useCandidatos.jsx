//Firestore
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireService from "./../firebase/firebaseservice";

const useCandidatos = (id) => {
  const [loading, setLoading] = useState(false);
  const [documentos, setDocumentos] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getColl = async () => {
      //Consulta a firebase
      const q = query(
        collection(fireService.db, "Candidatos"),
        where("vacanteId", "==", id)
      );
      //Snapshot
      const querySnapshot = await getDocs(q);
      manejarSnapShot(querySnapshot);
      setLoading(false);
    };
    getColl();
    //eslint-disable-next-line
  }, [id]);
  function manejarSnapShot(querySnapshot) {
    const docs = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setDocumentos(docs);
  }
  return {
    documentos,
    loading,
  };
};

export default useCandidatos;
