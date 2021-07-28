import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { AnswersLine } from "./components/AnswersLine/AnswersLine";
import { Cardsfield } from "./components/Cardfield/Cardsfield";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { sidebarMenuRender } from "./components/Sidebar/sidebarMenuRender";
import CardsList from "../public/cards/mock/CardsList";
import { useAppDispatch, useAppSelector } from "./shared/hooks";
import { renderSidebarMenuAC } from "./redux/actions/renderSidebarMenuAC";
import { FinalPicture } from "./components/FinalPicture/FinalPicture";
import { hideFinalPictureAC } from "./redux/actions/hideFinalPicture";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeMenuCategory = useAppSelector(
    (state) => state.activeWordCardCategory.index
  );
  const { showFinalPicture } = useAppSelector((state) => state.gameplay);

  React.useEffect(() => {
    const menuItems = sidebarMenuRender(
      CardsList[0] as string[],
      activeMenuCategory,
      dispatch
    );
    dispatch(renderSidebarMenuAC(menuItems));
  }, [activeMenuCategory]);

  React.useEffect(() => {
    if (showFinalPicture)
      setTimeout(() => dispatch(hideFinalPictureAC()), 4000);
  }, [showFinalPicture]);

  return (
    <div id="app">
      <Header />
      <AnswersLine />
      <Sidebar />
      {!!showFinalPicture && <FinalPicture happy={showFinalPicture} />}
      {!showFinalPicture && <Cardsfield />}
      <Footer />
    </div>
  );
};

export default App;
