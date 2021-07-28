import React from "react";
import style from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.main}>
      <a
        className={style.githubImg}
        href="https://github.com/926227"
        title="Konstantin Zhilyaev"
        target="_blank"
      >
        <img width="50" height="50" src="images/github.svg" alt="github" />
      </a>
      <a
        className={style.rsschoolImg}
        href="https://rs.school/js/"
        title="RS SCHOOL"
        target="_blank"
      >
        <img src="images/rs_school_logo.svg" alt="RS SCHOOL" />
      </a>
      <h3 className={style.year}>2021</h3>
    </footer>
  );
};
