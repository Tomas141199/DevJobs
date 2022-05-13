//Firebase storage
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import { errorNotify } from "./../../helpers/notify";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

const ImageUploader = ({ setUrlImagen }) => {
  const [upload, setUpload] = useState(0);

  async function handleChange(file, setUrlImagen, setUpload) {
    //Archivo a subir
    const imagenfile = file;
    // Servicio de almacenamiento de archivos de firebase Storage
    const storage = getStorage();
    //Creacion del archivo de metadata, configura el tipo de archivos que se van a subir
    /** @type {any} */
    const metadata = {
      contentType: "image/*",
    };

    //Se sube el archivo y el metadata con el nombre de imagen file junto con el nombre de la caperta donde se van almacenar(articulos)
    //Esta carpeta si es que no existe storage la crea y almacena el archivo ahi, no es necesario crearla previamente
    //Ref almacena la referencia (direccion) donde se encuntra la imagen
    try {
      const storageRef = ref(storage, "publicaciones/" + imagenfile.name);
      //uploadTask permite dar seguimiento a la subida de la imagen
      const uploadTask = uploadBytesResumable(storageRef, imagenfile, metadata);

      //Seguimiento de los estados de cambio , errores y exito de la subida de la imagen
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //Obtiene el progreso de la tarea incluido el numero de bytes subidos y el total de byte que van a ser almacenados
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUpload(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          //Si es que hay un error lo muestra por consola, lo ideal seria obtener el set de error para mostrarselo al usuario
          errorNotify(error.code);
        },
        () => {
          // Si es que se subio correctamente la imagen este metodo obtiene la URL de donde se encuentra almcenada la imagen en Storage
          //Igual checar en firebase
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            //Se guarda la url en el state, solo funcionaria aqui ya que es un metodo asyncrono y funciones fuera de esta cadena de promesas
            //no obtendria el valor
            setUrlImagen(downloadURL);
            setUpload(0);
          });
        }
      );
    } catch (error) {
      errorNotify("Error al cargar la imagen intente de nuevo");
    }
  }

  return (
    <FileUploader
      multiple={false}
      handleChange={(file) => handleChange(file, setUrlImagen, setUpload)}
      maxSize={10}
      name="file"
      types={fileTypes}
    />
  );
};

export default ImageUploader;
