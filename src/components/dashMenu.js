import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const DashMenu = () => {
  const [isDropDown, setDropDown] = useState(false);
  const [isData, setisData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const AbortCont = new AbortController();
      await fetch(
        `https://s4lud-palp-api.herokuapp.com/api/palp/userdata/${sessionStorage.getItem(
          "id"
        )}`,
        {
          signal: AbortCont.signal,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error();
          }
          return res.json();
        })
        .then((data) => {
          return setisData(data);
        })
        .catch((err) => {});
      return () => AbortCont.abort();
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <>
      <div className="userbadge-container">
        <Link to="/survey">
          <div className="Links">Survey Form</div>
        </Link>
        {sessionStorage.getItem("credential") === "true" ? (
          <>
            <Link to="/response">
              <div className="Links">Response</div>
            </Link>
            <Link to="/visualization">
              <div className="Links">Visualization</div>
            </Link>
          </>
        ) : undefined}
        <div
          className="user-details"
          onClick={() => setDropDown(isDropDown ? false : true)}
        >
          <div className="user-icon">
            <FaUserCircle size={18} />
          </div>
          {isData.username}
        </div>
      </div>
      {isDropDown ? (
        <div className="userbadge-options">
          <div className="userbadge-name">
            <div className="userbadge-email">
              <div className="title">Email</div>
              <div className="content">{isData.email}</div>
            </div>
            <div
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              className="userbadgeButton ubb"
            >
              Log out
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default DashMenu;
