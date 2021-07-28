import React from "react";
import classNames from "classnames/bind";
import style from "./Cards.module.css";
import { WordCardModel } from "../../models/WordCardModel";
import { settings } from "../../shared/settings";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { correctAnswerAC } from "../../redux/actions/correctAnswerAC";
import { wrongAnswerAC } from "../../redux/actions/wrongAnswerAC";

export const WordCard = (props: { card: WordCardModel }): JSX.Element => {
  const { word, translation, image, audioSrc } = props.card;
  const { cardsPath } = settings;
  const [flipToBack, flipWordCard] = React.useState(false);
  const [inactive, makeCardInactive] = React.useState(false);
  const { playModeOn, gameStart, gameData, questionCardIndex } = useAppSelector(
    (store) => store.gameplay
  );
  const dispatch = useAppDispatch();
  const cx = classNames.bind(style);
  const wordCardClasses = cx({
    main: true,
    playModeOn,
    flipToBack,
    inactive,
  });
  const audio = new Audio();
  audio.src = `${cardsPath}${audioSrc}`;
  const correctSound = new Audio();
  correctSound.src = "sound/correct.mp3";
  const errorSound = new Audio();
  errorSound.src = "sound/error.mp3";

  React.useEffect(() => {
    makeCardInactive(false);
  }, [gameStart]);

  const checkCorrectAnswer = (): void => {
    if (gameData[questionCardIndex].word === word) {
      correctSound.currentTime = 0;
      correctSound.play();
      makeCardInactive(true);
      setTimeout(() => dispatch(correctAnswerAC()), 700);
    } else {
      errorSound.currentTime = 0;
      errorSound.play();
      dispatch(wrongAnswerAC());
    }
  };

  const onThisWordCardClick = (): void => {
    if (!playModeOn) {
      audio.currentTime = 0;
      audio.play();
      return;
    }
    if (!gameStart) return;
    checkCorrectAnswer();
  };

  return (
    <div
      className={wordCardClasses}
      onClick={flipToBack ? () => {} : onThisWordCardClick}
    >
      {inactive && <div className={style.inactiveCover}></div>}
      <div className={style.front}>
        <img
          className={style.front__img}
          src={`${cardsPath}${image}`}
          alt="Card Image"
        />
        <div className={style.wrapper}>
          {!playModeOn && (
            <>
              <h2 className={style.title}>{word}</h2>
              <img
                className={style.rotate}
                src="images/rotation.png"
                alt="rotate"
                onClick={() => flipWordCard(!flipToBack)}
              />
            </>
          )}
        </div>
      </div>
      {!playModeOn && (
        <div
          className={style.back}
          onMouseLeave={() => flipWordCard(!flipToBack)}
        >
          <img
            className={style.back__img}
            src={`${cardsPath}${image}`}
            alt="Card Img"
          />
          <h2 className={style.title}>{translation}</h2>
        </div>
      )}
    </div>
  );
};
