import { settings } from "../../shared/settings";

export const renderSidebarMenuAC = (
  menuItems: JSX.Element[]
): RenderSidebarMenuType => {
  return {
    type: settings.actions.RENDER_SIDEBAR,
    payload: menuItems,
  };
};

export type RenderSidebarMenuType = {
  type: string;
  payload: JSX.Element[];
};
