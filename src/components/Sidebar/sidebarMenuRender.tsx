import React from "react";
import { setActiveWordCardCategoryAC } from "../../redux/actions/setActiveWordCardCategoryAC";
import style from "./Sidebar.module.css";

export const sidebarMenuRender = (
  menuItems: string[],
  activeCategory: number,
  dispatch: React.Dispatch<any>
): JSX.Element[] => {
  const items = menuItems.slice();
  items.unshift("Main Page");

  return items.map((item, index): JSX.Element => {
    return (
      <li
        className={activeCategory === index ? style.active : ""}
        key={`sidebar_${index}`}
        onClick={() => dispatch(setActiveWordCardCategoryAC(index))}
      >
        {item}
      </li>
    );
  });
};
