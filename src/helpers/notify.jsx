import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

export const errorNotify = (message) => {
  toast.error(message, {
    position: "top-center",
    toastId: customId,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export const infoNotify = (message) => {
  toast.info(message, {
    position: "top-center",
    toastId: customId,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
