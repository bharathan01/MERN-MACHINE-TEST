import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Login from "./pages/auth/Login.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import EditEmployee from "./pages/editsEmployee/EditEmployee.jsx";
import CreateEmp from "./pages/createEmployee/CreateEmp.jsx";
import AllEmp from "./pages/viewEmployee/AllEmp.jsx";
import PrivateRoute from "./utils/PrivateRoute/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
              <App />
          }
        >
          <Route index element={<HomePage />}></Route>
          <Route path="/all-Details" element={<AllEmp />}></Route>
          <Route path="/create-employee" element={<CreateEmp />}></Route>
          <Route path="/edit-employee/:id" element={<EditEmployee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
