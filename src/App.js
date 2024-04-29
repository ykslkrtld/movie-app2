import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Navbar/>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
