import React from "react";
import classes from "./Header.module.scss";
import { headerConstants as consts } from "../../../constants/headerConstants";
import { useDevice } from "../../../hooks/useDevice";
import Search from "../Search/Search";
import { useRouter } from "next/router";
const Header: React.FC = () => {
  const device = useDevice();
  const router = useRouter();
  const goToWatchlist = () => {
    router.push("/WatchList");
  };
  const goToMainPage = () => {
    router.push("/popular/1");
  };
  return (
    <div className={classes.header}>
      <nav className={classes.container}>
        <header>
          <div className={classes.group}>
            <button className={classes.btn} onClick={goToWatchlist}>
              {consts.WATCH_LIST}
            </button>
            {device && device.width >= 770 && (
              <a className={classes.btn} href="https://github.com/hamed-bavar/MovieApp">
                {consts.GITHUB}
              </a>
            )}
          </div>
          <div>
            {device && device.width >= 770 && (
              <div className={classes.title} onClick={goToMainPage}>
                {consts.HEADER_TITLE}
              </div>
            )}
          </div>
          <Search />
        </header>
      </nav>
    </div>
  );
};

export default Header;
