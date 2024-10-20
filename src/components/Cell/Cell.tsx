import React from "react";
import style from "./Cell.module.css";

interface CellProps {
  name: string;
  status: boolean;
}

const Cell: React.FC<CellProps> = ({ name, status }) => {
  return (
    <li className={style.cell}>
      <div className={style.cell__section}>
        <div className={style.cell__icon}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.32333 6.77305C3.32333 5.3356 4.48861 4.17032 5.92606 4.17032H20.2799C20.777 4.17032 21.1799 4.57326 21.1799 5.07032C21.1799 5.56737 20.777 5.97032 20.2799 5.97032H5.92606C5.48273 5.97032 5.12333 6.32972 5.12333 6.77305V17.7048H13.2552C13.7522 17.7048 14.1552 18.1077 14.1552 18.6048C14.1552 19.1018 13.7522 19.5048 13.2552 19.5048H1.71448C1.21743 19.5048 0.814484 19.1018 0.814484 18.6048C0.814484 18.1077 1.21743 17.7048 1.71448 17.7048H3.32333V6.77305ZM17.9685 10.1348C17.5252 10.1348 17.1658 10.4942 17.1658 10.9375V16.902C17.1658 17.3454 17.5252 17.7048 17.9685 17.7048H20.5843C21.0276 17.7048 21.387 17.3454 21.387 16.902V10.9375C21.387 10.4942 21.0276 10.1348 20.5843 10.1348H17.9685ZM15.3658 10.9375C15.3658 9.50004 16.5311 8.33476 17.9685 8.33476H20.5843C22.0217 8.33476 23.187 9.50004 23.187 10.9375V16.902C23.187 18.3395 22.0217 19.5048 20.5843 19.5048H17.9685C16.5311 19.5048 15.3658 18.3395 15.3658 16.902V10.9375Z"
            />
          </svg>
        </div>
        <div className={style.cell__column}>
          <h2 className={style.cell__name}>
            {name.length > 21 ? name.slice(0, 21) + "..." : name}
          </h2>
          <p
            className={
              status ? style.cell__status_true : style.cell__status_false
            }
          >
            {status ? "Онлайн" : "Офлайн"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Cell;
