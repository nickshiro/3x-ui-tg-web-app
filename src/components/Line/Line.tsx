import React from "react";
import style from "./Line.module.css";

interface LineProps {
  icon: React.ReactNode;
  header: string;
  link?: boolean;
  subtitle?: string;
  onClick?: () => void;
}

const Line: React.FC<LineProps> = ({
  header,
  subtitle,
  icon,
  onClick,
  link,
}) => {
  return (
    <li className={!link ? style.line : style.link} onClick={onClick}>
      <div className={style.icon}>{icon}</div>
      <div className={style.column}>
        <h2 className={style.header}>{header}</h2>
        <p className={style.subtitle}>{subtitle}</p>
      </div>
    </li>
  );
};

export default Line;
