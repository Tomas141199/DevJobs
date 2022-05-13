import { useReducer } from "react";
import NotifyContext from "./notifyContext";
import NotifyReducer from "./notifyReducer";
import {
  MOSTRAR_NOTIFICACION,
  LIMPIAR_NOTIFICACION,
} from "./../../types/index";

const NotifyState = ({ children }) => {
  //State inicial
  const initialState = {
    notificacion: null,
  };

  //Reducer
  const [state, dispatch] = useReducer(NotifyReducer, initialState);

  //muestra alerta a usuarios nuevos
  const mostrarNotificacion = (mensaje) => {
    dispatch({
      type: MOSTRAR_NOTIFICACION,
      payload: { mensaje },
    });
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_NOTIFICACION,
      });
    }, 2000);
  };

  const limpiarNotificacion = () => {
    dispatch({
      type: LIMPIAR_NOTIFICACION,
    });
  };

  return (
    <NotifyContext.Provider
      value={{
        notificacion: state.notificacion,
        mostrarNotificacion,
        limpiarNotificacion,
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};

export default NotifyState;
