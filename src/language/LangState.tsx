import { useReducer } from 'react';

import { LangActionType, Languages } from '../types/enums';
import { LangStateProps } from '../types/types';

import { langContext } from './langContext';
import langReducer from './langReducer';

function LangState({ children, initialState }: LangStateProps) {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: Languages.RU | Languages.EN) => {
    localStorage.setItem('language', lang);

    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };

  return <langContext.Provider value={{ state, dispatch: { setLanguage } }}>{children}</langContext.Provider>;
}

export default LangState;
