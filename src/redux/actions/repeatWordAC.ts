import { settings } from "../../shared/settings";

export const repeatWordAC = (): RepeatWordType => {
  return {
    type: settings.actions.REPEAT_WORD,
  };
};

export type RepeatWordType = {
  type: string;
};
