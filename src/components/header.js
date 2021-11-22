import { Link, useLocation } from "react-router-dom";
import HomeMenu from "./homeMenu";
import DashMenu from "./dashMenu";

const Header = () => {
  let location = useLocation();
  return (
    <div className="headNav">
      <Link to="/">
        <div className="headLogo">PALP</div>
      </Link>
      <div className="Menu-Links">
        {location.pathname === "/dashboard" ? (
          <DashMenu />
        ) : location.pathname === "/" ? (
          <HomeMenu />
        ) : undefined}
      </div>
    </div>
  );
};

export default Header;
