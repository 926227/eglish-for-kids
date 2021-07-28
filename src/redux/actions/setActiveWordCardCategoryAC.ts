import { settings } from "../../shared/settings";

export const setActiveWordCardCategoryAC = (
  categoryIndex: number
): SetActiveWordCardCategoryType => {
  return {
    type: settings.actions.SET_ACTIVE_CATEGORY,
    payload: categoryIndex,
  };
};

export type SetActiveWordCardCategoryType = {
  type: string;
  payload: number;
};
