import { Link } from "react-router-dom";

const DashMenu = () => {
  return (
    <>
      <Link to="/survey">
        <div className="Links">Survey Form</div>
      </Link>
      <div className="Links">Data Visualization</div>
      <Link to="/">
        <div className="Links">Log out</div>
      </Link>
    </>
  );
};

export default DashMenu;
