import React from "react";
import classNames from "classnames/bind";
import style from "./Cards.module.css";
import { settings } from "../../shared/settings";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { setActiveWordCardCategoryAC } from "../../redux/actions/setActiveWordCardCategoryAC";

export const MenuCard = (props: {
  categoryName: string;
  image: string;
  categoryIndex: number;
}): JSX.Element => {
  const { categoryName, image, categoryIndex } = props;
  const playModeOn = useAppSelector((store) => store.gameplay.playModeOn);
  const { cardsPath } = settings;
  const cx = classNames.bind(style);
  const wordCardClasses = cx({
    main: true,
    playModeOn,
  });
  const dispatch = useAppDispatch();

  return (
    <div
      className={wordCardClasses}
      onClick={() => dispatch(setActiveWordCardCategoryAC(categoryIndex))}
    >
      <div className={style.front}>
        <img
          className={style.front__img}
          src={`${cardsPath}${image}`}
          alt="Card Image"
        />
        <div className={style.wrapper}>
          <h2 className={style.title}>{categoryName}</h2>
        </div>
      </div>
    </div>
  );
};
