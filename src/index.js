import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProvider from "./Context/Auth/authProvider";
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export const axiosIns = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/`,
});

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
