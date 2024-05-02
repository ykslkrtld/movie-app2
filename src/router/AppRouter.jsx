import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import Series from "../pages/Series";
import SerieDetail from "../pages/SerieDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/series" element={<Series />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details/:id" element={<PrivateRouter />}>
        <Route path="" element={<MovieDetail />} />
      </Route>
      <Route path="/series/details/:id" element={<PrivateRouter />}>
        <Route path="" element={<SerieDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
