import React from "react";
import CardsList from "../../../public/cards/mock/CardsList";
import { WordCardModel } from "../../models/WordCardModel";
import { useAppSelector } from "../../shared/hooks";
import { WordCard } from "../Cards/WordCard";
import { MenuCard } from "../Cards/MenuCard";
import style from "./Cardsfield.module.css";

export const Cardsfield: React.FC = () => {
  const [cardsSet, renderCardsSet] = React.useState<JSX.Element[]>([]);
  const activeCategory = useAppSelector(
    (state) => state.activeWordCardCategory.index
  );
  React.useEffect(() => {
    if (activeCategory > 0) {
      const cards: JSX.Element[] = (
        CardsList[activeCategory] as WordCardModel[]
      ).map((item: WordCardModel, index: number) => (
        <WordCard key={index} card={{ ...item }} />
      ));
      renderCardsSet(cards);
      return;
    }

    const cards: JSX.Element[] = (CardsList[activeCategory] as string[]).map(
      (item: string, index: number) => (
        <MenuCard
          key={index}
          categoryName={item}
          image={(CardsList[index + 1] as WordCardModel[])[0].image}
          categoryIndex={index + 1}
        />
      )
    );
    renderCardsSet(cards);
  }, [activeCategory]);
  return <main className={style.main}>{cardsSet}</main>;
};
