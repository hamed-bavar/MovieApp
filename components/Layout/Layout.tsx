import React from "react";
import { LayoutProps } from "../../types/types";
import Header from "./Header/Header";
import classes from "./layout.module.scss";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
