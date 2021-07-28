import { settings } from "../../shared/settings";

export const showSidebarAC = (showState: boolean): ShowSidebarActionType => {
  return {
    type: settings.actions.SHOW_SIDEBAR,
    payload: showState,
  };
};

export type ShowSidebarActionType = {
  type: string;
  payload: boolean;
};
