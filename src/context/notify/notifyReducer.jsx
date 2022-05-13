import {
  MOSTRAR_NOTIFICACION,
  LIMPIAR_NOTIFICACION,
} from "./../../types/index";

const NotifyReducer = (state, action) => {
  switch (action.type) {
    case MOSTRAR_NOTIFICACION:
      return {
        notificacion: action.payload,
      };
    case LIMPIAR_NOTIFICACION:
      return {
        notificacion: null,
      };
    default:
      return state;
  }
};

export default NotifyReducer;
