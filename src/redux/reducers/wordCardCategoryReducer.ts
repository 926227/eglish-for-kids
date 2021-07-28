import { settings } from "../../shared/settings";
import { SetActiveWordCardCategoryType } from "../actions/setActiveWordCardCategoryAC";

const initialState = {
  index: 0,
};

const { SET_ACTIVE_CATEGORY, HIDE_FINAL_PICTURE } = settings.actions;

export const wordCardCategoryReducer = (
  state = initialState,
  action: SetActiveWordCardCategoryType
): typeof initialState => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY: {
      return { ...state, index: action.payload };
    }
    case HIDE_FINAL_PICTURE: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};
