import fireService from "./../firebase/firebaseservice";
//Firestore
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

const useCollection = (CollectionName) => {
  const [documentos, setDocumentos] = useState([]);
  useEffect(() => {
    const getColl = async () => {
      //Consulta a firebase
      const q = query(
        collection(fireService.db, CollectionName),
        orderBy("order", "asc")
      );
      //Snapshot
      const querySnapshot = await getDocs(q);
      manejarSnapShot(querySnapshot);
    };
    getColl();
    //eslint-disable-next-line
  }, []);
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

export default useCollection;
