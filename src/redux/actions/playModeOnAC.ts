import { settings } from "../../shared/settings";

export const playModeOnAC = (on: boolean): PlayModeOnType => {
  return {
    type: settings.actions.PLAY_MODE_ON,
    payload: on,
  };
};

export type PlayModeOnType = {
  type: string;
  payload: boolean;
};
