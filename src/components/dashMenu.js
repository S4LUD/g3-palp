import { Link } from "react-router-dom";

const DashMenu = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Link to="/survey">
        <div className="Links">Survey Form</div>
      </Link>
      <div onClick={() => handleLogout()} className="Links">
        Log out
      </div>
    </>
  );
};

export default DashMenu;
