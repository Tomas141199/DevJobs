import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [userAuth, setUserAuth] = useState({});

  const auth = getAuth();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      user ? setUserAuth(user) : setUserAuth(null);
    });
    return unsuscribe;
  }, []);

  return userAuth;
};

export default useAuth;
