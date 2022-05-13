import useClickOutside from "./../../hooks/useClickOutside";
import arrow from "../../assets/down-filled-triangular-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const UserCard = ({ usuario }) => {
  const { activeClass, wrapperRef, toggleClass } = useClickOutside();
  const navigate = useNavigate();
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      ref={wrapperRef}
      className=" relative flex cursor-pointer items-center gap-1"
    >
      <img
        src={
          usuario.photoURL ??
          "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        }
        className="rounded-full w-6"
        alt="user pic"
      />
      <button onClick={toggleClass}>
        <img
          src={arrow}
          className={`w-3 duration-200 ease-in ${
            activeClass ? "rotate-180" : ""
          }`}
          alt="user pic"
        />
      </button>
      <div
        className={`origin-top duration-300 px-2 py-1 absolute divide-y-2 -bottom-32 -left-10 w-24 bg-white rounded-sm shadow-xl z-50 ${
          activeClass ? "scale-y-100" : "scale-y-0 "
        }`}
      >
        <div>{usuario.displayName}</div>
        <Link
          onClick={toggleClass}
          to="/"
          className="block rounded-sm px-1 w-full duration-300 hover:bg-slate-100 shadow-none"
        >
          Inicio
        </Link>
        <Link
          onClick={toggleClass}
          to="/admin"
          className="block rounded-sm px-1 w-full duration-300 hover:bg-slate-100 shadow-none"
        >
          Panel
        </Link>
        <Link
          onClick={toggleClass}
          to="/admin/crear-publicacion"
          className="block rounded-sm px-1 w-full duration-300 hover:bg-slate-100 shadow-none"
        >
          Publicar
        </Link>
        <button
          onClick={logOut}
          className="block text-red-400 rounded-sm px-1 w-full duration-300 hover:bg-slate-100 shadow-none"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default UserCard;
