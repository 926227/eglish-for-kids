import { WordCardModel } from "../../models/WordCardModel";
import { settings } from "../../shared/settings";

export const gameStartAC = (
  on: boolean,
  gameData: WordCardModel[]
): GameStartType => {
  return {
    type: settings.actions.GAME_START,
    payload: { on, gameData },
  };
};

export type GameStartType = {
  type: string;
  payload: { on: boolean; gameData: WordCardModel[] };
};
