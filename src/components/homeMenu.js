import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <>
      <Link to="/login">
        <div className="Links">Login</div>
      </Link>
      <Link to="/signup">
        <div className="Links">Sign up</div>
      </Link>
      <div className="Links">About</div>
    </>
  );
};

export default HomeMenu;
