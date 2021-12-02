import { Link, useLocation } from "react-router-dom";
import HomeMenu from "./homeMenu";
import DashMenu from "./dashMenu";

const Header = () => {
  const location = useLocation();
  return (
    <div className="headNav">
      <Link to="/">
        <div className="headLogo">PALP</div>
      </Link>
      <div className="Menu-Links">
        {location.pathname === "/visualization" ? (
          <DashMenu />
        ) : location.pathname === "/response" ? (
          <DashMenu />
        ) : location.pathname === "/" ? (
          !sessionStorage.getItem("credential") ? (
            <HomeMenu />
          ) : (
            <DashMenu />
          )
        ) : location.pathname === "/survey" ? (
          !sessionStorage.getItem("credential") ? (
            <HomeMenu />
          ) : (
            <DashMenu />
          )
        ) : undefined}
      </div>
    </div>
  );
};

export default Header;
