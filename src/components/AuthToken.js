import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthToken() {
  const navigate = useNavigate();

  useEffect(() => {
    const AbortCont = new AbortController();
    setTimeout(() => {
      fetch("https://s4lud-palp-api.herokuapp.com/api/palp/verify", {
        signal: AbortCont.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Session Expired");
          }
          return res.json();
        })
        .then((data) => {
          sessionStorage.setItem("palp-user", true);
          sessionStorage.setItem("id", data._id);
          sessionStorage.setItem("credential", data.credential);
          navigate("/", { replace: true });
        })
        .catch((err) => {
          if (err) {
            sessionStorage.clear();
            navigate("/login", { replace: true });
          }
        });
    }, 1000);
    return () => AbortCont.abort();
  }, [navigate]);

  return (
    <>
      <div className="Logo">
        <div className="title">PALP</div>
      </div>
    </>
  );
}
