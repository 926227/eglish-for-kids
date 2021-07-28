import { settings } from "../../shared/settings";
import { ShowSidebarActionType } from "../actions/showSidebarAC";
import { RenderSidebarMenuType } from "../actions/renderSidebarMenuAC";

const { SHOW_SIDEBAR, RENDER_SIDEBAR } = settings.actions;

const initialState = {
  showSidebarState: false,
  menuItems: [] as JSX.Element[],
};
export const sidebarReducer = (
  state = initialState,
  action: ShowSidebarActionType | RenderSidebarMenuType
): SidebarReducerType => {
  switch (action.type) {
    case SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebarState: action.payload as boolean,
      };
    }
    case RENDER_SIDEBAR: {
      return {
        ...state,
        menuItems: [...(action.payload as JSX.Element[])],
      };
    }
    default: {
      return state;
    }
  }
};

type SidebarReducerType = typeof initialState;
