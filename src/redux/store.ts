import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { gamePlayReducer } from "./reducers/gamePlayReducer";
import { sidebarReducer } from "./reducers/sidebarReducer";
import { wordCardCategoryReducer } from "./reducers/wordCardCategoryReducer";

const reducers = combineReducers({
  sidebar: sidebarReducer,
  activeWordCardCategory: wordCardCategoryReducer,
  gameplay: gamePlayReducer,
});
const store = createStore(reducers, composeWithDevTools());
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
