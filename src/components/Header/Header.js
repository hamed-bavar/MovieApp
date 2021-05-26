import classes from "./Header.module.css";
import Search from "./../UI/Search/Search";
import useDevice from "../../hooks/useDevice";
import { Link } from "react-router-dom";
import { useAuthState ,useAuthActions} from "../../Context/Auth/authProvider";
import watchListLogo from "../../assets/icons/watchList/icons8-list-64.png";
import logoutLogo from "../../assets/icons/logoutIcon/icons8-logout-rounded-left-64.png";
const Header = () => {
  const [Device] = useDevice();
  const { token } = useAuthState();
  const {setLogOut} = useAuthActions();
  const logoutAcc = () =>{
    setLogOut();
  }
  return (
    <div className="h-24 sm:h-20 bg-purple-dark flex sm:flex-row flex-col justify-between items-center py-2 px-4 md:px-10 border-b-2 border-black z-50">
      <div className="flex justify-between">
        {!token ? (
          <Link
            to="/auth/Login"
            className={`${classes.btn} border-2 border-purple-light mr-2 mb-2 lg:-ml-3`}
          >
            SignIn
          </Link>
        ) : (
          <div className={`${classes.btn} mr-2 mb-2 lg:-ml-3`}>
            <img
              src={watchListLogo}
              alt="watchListLogo"
              className="transform scale-50 -mr-4 cursor-pointer"
            ></img>
            <img
              src={logoutLogo}
              alt="logout"
              className="transform scale-50 cursor-pointer"
              onClick={logoutAcc}
            ></img>
          </div>
        )}
        {Device !== "Mobile" && (
          <button
            className={`${classes.btn} border-2 border-purple-light  mr-2`}
          >
            GitHub
          </button>
        )}
      </div>
      {Device === "Desktop" && (
        <div className="text-2xl text-yellow-300 font-bold">MovieGalaxy</div>
      )}
      <Search />
    </div>
  );
};

export default Header;
