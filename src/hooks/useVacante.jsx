//Firestore
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireService from "./../firebase/firebaseservice";

const useVacante = (categoria) => {
  const [documentos, setDocumentos] = useState([]);
  useEffect(() => {
    const getColl = async () => {
      //Consulta a firebase
      let q;
      if (categoria) {
        q = query(
          collection(fireService.db, "Vacantes"),
          where("categoria", "==", categoria),
          where("estado", "==", true)
        );
      } else {
        q = query(
          collection(fireService.db, "Vacantes"),
          where("estado", "==", true)
        );
      }

      //Snapshot
      const querySnapshot = await getDocs(q);
      manejarSnapShot(querySnapshot);
    };
    getColl();
    //eslint-disable-next-line
  }, [categoria]);
  function manejarSnapShot(querySnapshot) {
    const docs = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setDocumentos(docs);
  }
  return documentos;
};

export default useVacante;
