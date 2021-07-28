import { settings } from "../../shared/settings";

export const hideFinalPictureAC = (): HideFinalPictureType => {
  return {
    type: settings.actions.HIDE_FINAL_PICTURE,
  };
};

export type HideFinalPictureType = {
  type: string;
};
