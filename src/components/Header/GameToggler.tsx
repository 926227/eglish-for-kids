import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { playModeOnAC } from "../../redux/actions/playModeOnAC";

export const GameToggler = (): JSX.Element => {
  const playMode = useAppSelector((store) => store.gameplay.playModeOn);
  const dispatch = useAppDispatch();
  const cx = classNames.bind(style);
  const togglerClasses = cx({
    gameToggler: true,
    playMode,
  });

  return (
    <div
      className={togglerClasses}
      onClick={() => dispatch(playModeOnAC(!playMode))}
    >
      <span className={style.title}>{playMode ? "play" : "train"}</span>
      <div className={style.ball}></div>
    </div>
  );
};
