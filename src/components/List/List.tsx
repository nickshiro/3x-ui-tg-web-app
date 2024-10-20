import React from "react";
import style from "./List.module.css";

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <div className={style.list}>{children}</div>;
};

export default List;
