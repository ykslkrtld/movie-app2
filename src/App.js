import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
    <AuthProvider>
      <Navbar/>
      <AppRouter />
      <ToastContainer />
    </AuthProvider>
    </div>
  );
};

export default App;
