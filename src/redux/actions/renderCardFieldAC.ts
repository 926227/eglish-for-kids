import { WordCardModel } from "../../models/WordCardModel";
import { settings } from "../../shared/settings";

export const renderCardField = (
  wordCard: WordCardModel
): RenderCardFieldType => {
  return {
    type: settings.actions.RENDER_CARDFIELD,
    payload: wordCard,
  };
};

export type RenderCardFieldType = {
  type: string;
  payload: WordCardModel;
};
