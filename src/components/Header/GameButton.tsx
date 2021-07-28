import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import style from "./Header.module.css";
import { gameStartAC } from "../../redux/actions/gameStartAC";
import CardsList from "../../../public/cards/mock/CardsList";
import { WordCardModel } from "../../models/WordCardModel";
import { repeatWordAC } from "../../redux/actions/repeatWordAC";

export const GameButton = (): JSX.Element => {
  const [gameStart, activeCategoryIndex] = useAppSelector((store) => [
    store.gameplay.gameStart,
    store.activeWordCardCategory.index,
  ]);
  const gameData: WordCardModel[] = CardsList[
    activeCategoryIndex
  ] as WordCardModel[];
  const dispatch = useAppDispatch();
  return (
    <button
      className={style.gameButton}
      onClick={() =>
        gameStart
          ? dispatch(repeatWordAC())
          : dispatch(gameStartAC(true, gameData))
      }
    >
      {gameStart ? <img src="images/repeat.svg" alt="repeat" /> : "play"}
    </button>
  );
};
