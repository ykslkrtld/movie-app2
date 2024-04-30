import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <AuthProvider>
      <Navbar/>
      <AppRouter />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
