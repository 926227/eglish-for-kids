import { settings } from "../../shared/settings";
import { RenderCardFieldType } from "../actions/renderCardFieldAC";

const initialState = {
  wordCards: [] as JSX.Element[],
};

export const cardFieldReducer = (
  state = initialState,
  action: RenderCardFieldType
): typeof initialState => {
  const { RENDER_CARDFIELD } = settings.actions;
  switch (action.type) {
    case RENDER_CARDFIELD: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
