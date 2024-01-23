import { ReactNode } from 'react';

import { LangActionType, Languages } from './enums';

export interface LanguageState {
  language: Languages;
}

export interface LangStateProps {
  children: ReactNode;
  initialState: {
    language: Languages;
  };
}

export interface SetLangAction {
  type: LangActionType;
  payload: Languages;
}

export interface ContextProps {
  state: LanguageState;
  dispatch: {
    setLanguage: (lang: Languages) => void;
  };
}
