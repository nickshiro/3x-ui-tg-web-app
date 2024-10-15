import React from "react";
import style from "./Subtitle.module.css";

interface SubtitleProps {
  children: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p className={style.p}>{children}</p>;
};

export default Subtitle;
