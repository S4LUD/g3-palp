import React, { useState, useEffect } from "react";
import Header from "./header";
import Visualization from "./visualization";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import jwt from "jsonwebtoken";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isToken, setToken] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(true);
      try {
        const verified = jwt.verify(
          sessionStorage.getItem("token"),
          process.env.REACT_APP_TOKEN_SECRET
        );
        verified._id ? navigate("/dashboard") : navigate("/login");
      } catch (error) {
        navigate("/login");
      }
    } else if (!sessionStorage.getItem("token")) {
      setToken(true);
      try {
        const verified = jwt.verify(
          sessionStorage.getItem("token"),
          process.env.REACT_APP_TOKEN_SECRET
        );
        verified._id ? navigate("/dashboard") : navigate("/login");
      } catch (error) {
        navigate("/login");
      }
    }
    setToken(false);
  }, [navigate]);

  return (
    <div>
      {isToken ? (
        <div className="loadings">
          <ReactLoading type="cubes" color="#52ABFA" height={100} width={55} />
        </div>
      ) : (
        <>
          <Header />
          <div className="dashboard-container">
            <Visualization />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
