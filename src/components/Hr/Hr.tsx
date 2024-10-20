import React from "react";
import style from "./Hr.module.css";

interface HrProps {
  margin?: "64" | "80";
}

const Hr: React.FC<HrProps> = ({ margin = "64" }) => {
  return <hr className={style.hr} style={{ marginLeft: `${margin}px` }} />;
};

export default Hr;
