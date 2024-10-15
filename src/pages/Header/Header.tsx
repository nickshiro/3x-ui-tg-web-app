import React from "react";
import style from "./Header.module.css";

interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className={style.h1}>{children}</h1>;
};

export default Header;
