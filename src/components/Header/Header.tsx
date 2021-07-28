import React from "react";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { GameToggler } from "./GameToggler";
import { GameButton } from "./GameButton";
import style from "./Header.module.css";
import { showSidebarAC } from "../../redux/actions/showSidebarAC";

export const Header = (): JSX.Element => {
  const playMode = useAppSelector((store) => store.gameplay.playModeOn);
  const activeCategory = useAppSelector(
    (store) => store.activeWordCardCategory.index
  );
  const dispatch = useAppDispatch();
  const showSidebar = useAppSelector((state) => {
    return state.sidebar.showSidebarState;
  });

  const cx = classNames.bind(style);
  const menuButtonClasses = cx({
    menuButton: true,
    closeType: showSidebar,
  });
  return (
    <header className={style.main}>
      <button
        id="menuButton"
        className={menuButtonClasses}
        onClick={() => dispatch(showSidebarAC(!showSidebar))}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {playMode && activeCategory > 0 && <GameButton />}
      <GameToggler />
    </header>
  );
};
