import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

class FirebaseService {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore();
    this.auth = getAuth();
    this.provideer = new GoogleAuthProvider();
  }

  async addVacante(vacante) {
    //Obtencion de la base de datos
    const db = getFirestore();
    //Manejo de execepcion que inserta el documento en la coleccion publicaciones, al igual que storage
    //No es necesario que exista la coleccion ya que si no existe firestore la crea dinamicamente e inserta el documento
    try {
      const docRef = await addDoc(collection(db, "Vacantes"), vacante);
    } catch (e) {
      throw e;
    }
  }

  async addCandidato(candidato, candidatos) {
    //Obtencion de la base de datos
    const db = getFirestore();
    //Manejo de execepcion que inserta el documento en la coleccion publicaciones, al igual que storage
    //No es necesario que exista la coleccion ya que si no existe firestore la crea dinamicamente e inserta el documento
    try {
      const docRef = await addDoc(collection(db, "Candidatos"), candidato);
      await setDoc(
        doc(db, "Vacantes", candidato.vacanteId),
        { candidatos: candidatos + 1 },
        { merge: true }
      );
    } catch (e) {
      throw e;
    }
  }

  async editVacante(id, vacante) {
    //Obtencion de la base de datos
    console.log("Id a editar", id);
    const db = getFirestore();
    //Manejo de execepcion que inserta el documento en la coleccion publicaciones, al igual que storage
    //No es necesario que exista la coleccion ya que si no existe firestore la crea dinamicamente e inserta el documento
    try {
      await setDoc(doc(db, "Vacantes", id), vacante, { merge: true });
    } catch (e) {
      throw e;
    }
  }

  async changeStatus(id, status) {
    //Obtencion de la base de datos
    console.log("Id a editar", id);
    const db = getFirestore();
    //Manejo de execepcion que inserta el documento en la coleccion publicaciones, al igual que storage
    //No es necesario que exista la coleccion ya que si no existe firestore la crea dinamicamente e inserta el documento
    try {
      await setDoc(
        doc(db, "Vacantes", id),
        { estado: status },
        { merge: true }
      );
    } catch (e) {
      throw e;
    }
  }

  async delVacante(id) {
    console.log("Eliminando", id);
    const db = getFirestore();
    await deleteDoc(doc(db, "Vacantes", id));
  }
  async delSolicitud(id, vacanteId) {
    console.log("Eliminando", id);
    const db = getFirestore();
    await deleteDoc(doc(db, "Candidatos", id));
    const docRef = doc(db, "Vacantes", vacanteId);
    const docSnap = await getDoc(docRef);
    await setDoc(
      doc(db, "Vacantes", vacanteId),
      { candidatos: docSnap.data().candidatos - 1 },
      { merge: true }
    );
  }

  async getVacantesByUserId(id) {
    const db = getFirestore();
    const q = query(collection(db, "Vacantes"), where("creador.id", "==", id));
    try {
      const querySnapshot = await getDocs(q);
      return this.manejarSnapShot(querySnapshot);
    } catch (e) {
      console.log(e);
    }
  }

  async getVacanteById(id) {
    const db = getFirestore();
    const docRef = doc(db, "Vacantes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  }

  //Devolucion del query
  manejarSnapShot(querySnapshot) {
    const notas = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return notas;
  }
}

const fireService = new FirebaseService();

export default fireService;
