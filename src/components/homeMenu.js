import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <>
      <Link to="/login">
        <div className="new-Links">Login</div>
      </Link>
      <div className="seperator">or</div>
      <Link to="/signup">
        <div className="n-Links">Sign up</div>
      </Link>
      {/* <div className="Links">About</div> */}
    </>
  );
};

export default HomeMenu;
