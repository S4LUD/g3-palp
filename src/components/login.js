import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Login = () => {
  const navigate = useNavigate();
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isPasswordError, setPasswordError] = useState(false);
  const [isError, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!isPassword) {
      setError("Don't leave the field blank.");
      setPasswordError(true);
    } else if (!isEmail) {
      setError("Don't leave the field blank.");
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setLoading(true);
      const raw = JSON.stringify({
        email: isEmail,
        password: isPassword,
      });
      const data = await fetch(
        "https://s4lud-palp-api.herokuapp.com/api/palp/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
        }
      );
      const response = await data.json();
      if (response.token) {
        sessionStorage.setItem("token", response.token);
        navigate("/credentials", { replace: true });
      } else if (response.message) {
        setError(response.message);
        setPasswordError(true);
      } else if (response.email) {
        setError(response.email);
        setPasswordError(true);
      } else {
        setError(response.error);
        setPasswordError(true);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <ReactLoading type="cubes" color="#52ABFA" height={100} width={55} />
        </div>
      ) : (
        <div className="login-container">
          <div className="login-wrapper">
            <div className="lp-title">Login</div>
            {sessionStorage.getItem("status") ? (
              <div className="session-expired">
                {sessionStorage.getItem("status")}
              </div>
            ) : undefined}
            <div className="inputs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
              >
                <path
                  fill="#767A7E"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                ></path>
              </svg>
              <input
                value={isEmail}
                onChange={(data) => setEmail(data.target.value)}
                type="email"
                placeholder="Type your email"
                autoComplete="off"
              />
            </div>
            <div className="inputs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="key"
                className="svg-inline--fa fa-key fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
              >
                <path
                  fill="#767A7E"
                  d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                ></path>
              </svg>
              <input
                value={isPassword}
                onChange={(data) => setPassword(data.target.value)}
                type="password"
                placeholder="Type your password"
                autoComplete="off"
              />
            </div>
            {isPasswordError ? (
              <div className="error">{isError}</div>
            ) : undefined}
            {/* <Link to="/forgot"> */}
            {/* <div className="forgot-password">Forgot password?</div> */}
            {/* </Link> */}
            <button onClick={handleSubmit} type="submit">
              Login
            </button>
            <div className="signup-link">
              <span>Don't have an account with us yet?</span>
              <Link to="/signup">
                <div className="signnow">Register for FREE</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
