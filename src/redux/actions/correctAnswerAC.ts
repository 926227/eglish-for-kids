import { settings } from "../../shared/settings";

export const correctAnswerAC = (): CorrectAnswerType => {
  return {
    type: settings.actions.CORRECT_ANSWER,
  };
};

export type CorrectAnswerType = {
  type: string;
};
