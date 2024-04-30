import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser")) || false
  );

  useEffect(() => {
    userObserver();
  }, []);

  const signUp = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName,
        });
      })
      .then(() => {
        navigate("/login");
        toastSuccessNotify("Registered successfully");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toastSuccessNotify("Logged out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email, displayName, photoURL} = user
        setcurrentUser({email, displayName, photoURL})
        sessionStorage.setItem("currentUser", JSON.stringify({email, displayName, photoURL}))
      } else {
        // User is signed out
        setcurrentUser(false)
        sessionStorage.removeItem("currentUser")
      }
    });
  };

  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
      toastWarnNotify("Please check your mail box!");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const values = {
    signUp,
    signIn,
    forgotPassword,
    googleProvider,
    logOut,
    currentUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
