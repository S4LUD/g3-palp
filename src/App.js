import React from "react";
import "./style/App.css";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Signup from "./components/signup";
import SurveyForm from "./components/survey";
import Visualization from "./components/visualization";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthToken from "./components/AuthToken";
import UsersResponse from "./components/response";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact>
            <Route path="/" element={<Homepage />} />
            <Route path="credentials" element={<AuthToken />} />
            <Route
              path="login"
              element={
                !sessionStorage.getItem("palp-user") ? (
                  <Login />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="signup"
              element={
                !sessionStorage.getItem("palp-user") ? (
                  <Signup />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="visualization"
              element={
                sessionStorage.getItem("palp-user") ? (
                  sessionStorage.getItem("credential") === "true" ? (
                    <Visualization />
                  ) : (
                    <Navigate to="/survey" />
                  )
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="survey"
              exact
              element={
                sessionStorage.getItem("credential") ? (
                  <SurveyForm />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="response"
              exact
              element={
                sessionStorage.getItem("palp-user") ? (
                  sessionStorage.getItem("credential") === "true" ? (
                    <UsersResponse />
                  ) : (
                    <Navigate to="/survey" />
                  )
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
