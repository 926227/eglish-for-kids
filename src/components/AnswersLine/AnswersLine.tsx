import React from "react";
import { useAppSelector } from "../../shared/hooks";
import style from "./AnswersLine.module.css";

export const AnswersLine = (): JSX.Element => {
  const line = useAppSelector((state) => state.gameplay.answersLine).slice();
  const lineStars = line.map((item, index) =>
    item ? (
      <img
        className={style.star}
        key={index}
        src="images/star-correct.svg"
        alt="star"
      ></img>
    ) : (
      <img
        className={style.star}
        key={index}
        src="images/star-wrong.svg"
        alt="star"
      ></img>
    )
  );
  return <div className={style.main}>{lineStars}</div>;
};
