import React from "react";
import { useAppSelector } from "../../shared/hooks";
import style from "./FinalPicture.module.css";

export const FinalPicture = (props: { happy: number }): JSX.Element => {
  const [answers, questions] = useAppSelector((state) => [
    state.gameplay.answersLine,
    state.gameplay.gameData,
  ]);
  const wrongAnswers = answers.length - questions.length;
  return (
    <div className={style.main}>
      {props.happy === 1 ? (
        <img src="images/happy.png" alt="smile" />
      ) : (
        <>
          <img src="images/sad.png" alt="smile" />
          <h2>Wrong answers: {wrongAnswers}</h2>
        </>
      )}
    </div>
  );
};
