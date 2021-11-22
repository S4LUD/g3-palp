import React from "react";
import Header from "./header";
import DataAnalysis from "./dAnalysis";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <DataAnalysis />
      </div>
    </>
  );
};

export default Dashboard;
