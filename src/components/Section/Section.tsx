import React from "react";
import style from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  header?: string;
}

const Section: React.FC<SectionProps> = ({ children, header }) => {
  return (
    <section className={style.section}>
      {header && <h2 className={style.section__header}>{header}</h2>}
      <ul className={style.section__content}>{children}</ul>
    </section>
  );
};

export default Section;
