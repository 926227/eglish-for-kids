import React from "react";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import style from "./Sidebar.module.css";
import { showSidebarAC } from "../../redux/actions/showSidebarAC";

export const Sidebar = (): JSX.Element => {
  const show = useAppSelector((state) => state.sidebar.showSidebarState);
  const showRef = React.useRef(show);
  showRef.current = useAppSelector((state) => state.sidebar.showSidebarState);
  const [menuItems] = useAppSelector((state) => [
    state.sidebar.menuItems,
    state.activeWordCardCategory.index,
  ]);
  const dispatch = useAppDispatch();
  const sidebarRef = React.useRef(null);
  const cx = classNames.bind(style);
  const sidebarClasses = cx({
    main: true,
    show,
  });

  function onClickOutsideSidebar(e: MouseEvent | MouseWithPathEvent) {
    const { path } = e as MouseWithPathEvent;
    const menuButton: HTMLElement = document.getElementById(
      "menuButton"
    ) as HTMLElement;
    if (
      showRef.current &&
      !path.includes(sidebarRef.current as unknown as HTMLElement) &&
      !path.includes(menuButton)
    )
      dispatch(showSidebarAC(false));
  }

  React.useEffect(() => {
    document.body.addEventListener("click", onClickOutsideSidebar);
  }, []);
  return (
    <aside ref={sidebarRef} className={sidebarClasses}>
      <ul className={style.menu}>{menuItems}</ul>
    </aside>
  );
};
