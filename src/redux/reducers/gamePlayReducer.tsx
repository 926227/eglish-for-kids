import { WordCardModel } from "../../models/WordCardModel";
import { settings } from "../../shared/settings";
import { CorrectAnswerType } from "../actions/correctAnswerAC";
import { GameStartType } from "../actions/gameStartAC";
import { PlayModeOnType } from "../actions/playModeOnAC";
import { RepeatWordType } from "../actions/repeatWordAC";

const initialState = {
  playModeOn: false,
  gameStart: false,
  gameData: [] as WordCardModel[],
  questionCardIndex: 0,
  answersLine: [] as number[],
  showFinalPicture: settings.showFinalPicture.no,
};

const question = new Audio();
const tadaSound = new Audio();
tadaSound.src = "sound/tada.mp3";

const sayWord = (audioSrc: string) => {
  question.src = settings.cardsPath + audioSrc;
  question.currentTime = 0;
  question.play();
};

const playTada = (): void => {
  tadaSound.currentTime = 0;
  tadaSound.play();
};

const shuffle = (array: []) => {
  array.sort(() => Math.random() - 0.5);
};

const calculateGameResult = (answersLine: number[]): number => {
  const gameResult = answersLine.reduce((sum, current) => sum + current, 0);
  if (gameResult === answersLine.length) return settings.showFinalPicture.happy;
  return settings.showFinalPicture.sad;
};

const {
  PLAY_MODE_ON,
  GAME_START,
  SET_ACTIVE_CATEGORY,
  CORRECT_ANSWER,
  REPEAT_WORD,
  WRONG_ANSWER,
  HIDE_FINAL_PICTURE,
} = settings.actions;

export const gamePlayReducer = (
  state = initialState,
  action: PlayModeOnType | GameStartType | CorrectAnswerType | RepeatWordType
): typeof initialState => {
  switch (action.type) {
    case PLAY_MODE_ON: {
      const data = action as PlayModeOnType;
      return {
        ...state,
        playModeOn: data.payload,
        gameStart: false,
      };
    }
    case GAME_START: {
      const data: GameStartType = action as GameStartType;
      const gameData = data.payload.gameData.slice();
      shuffle(gameData as []);
      sayWord(gameData[state.questionCardIndex].audioSrc);
      return {
        ...state,
        gameData,
        gameStart: data.payload.on,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        gameStart: false,
        gameData: [] as WordCardModel[],
        questionCardIndex: 0,
        answersLine: [],
      };
    }
    case CORRECT_ANSWER: {
      const questionCardIndex = state.questionCardIndex + 1;
      const answersLine = state.answersLine.slice();
      answersLine.push(1);
      if (questionCardIndex >= state.gameData.length) {
        const result = calculateGameResult(answersLine);
        playTada();
        return {
          ...state,
          answersLine,
          showFinalPicture: result,
        };
      }
      sayWord(state.gameData[questionCardIndex].audioSrc);
      return {
        ...state,
        questionCardIndex,
        answersLine,
      };
    }
    case WRONG_ANSWER: {
      const answersLine = state.answersLine.slice();
      answersLine.push(0);
      return {
        ...state,
        answersLine,
      };
    }
    case REPEAT_WORD: {
      const { questionCardIndex } = state;
      sayWord(state.gameData[questionCardIndex].audioSrc);
      return state;
    }
    case HIDE_FINAL_PICTURE: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
