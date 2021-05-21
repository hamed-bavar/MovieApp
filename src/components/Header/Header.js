import classes from "./Header.module.css";
import Search from "./../UI/Search/Search";
import useDevice from "../../hooks/useDevice";
const Header = () => {
  const [Device] = useDevice();
  return (
    <div className="h-24 sm:h-20 bg-purple-dark flex sm:flex-row flex-col justify-between items-center py-2 px-4 md:px-10 border-b-2 border-black">
      <div className="flex justify-between">
        {
          <button className={`${classes.btn} mr-2 mb-2 lg:-ml-3`}>
            SignIn
          </button>
        }
        {Device !== "Mobile" && (
          <button className={`${classes.btn} mr-2`}>GitHub</button>
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
