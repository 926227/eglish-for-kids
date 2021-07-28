import { settings } from "../../shared/settings";

export const wrongAnswerAC = (): WrongAnswerType => {
  return {
    type: settings.actions.WRONG_ANSWER,
  };
};

export type WrongAnswerType = {
  type: string;
};
