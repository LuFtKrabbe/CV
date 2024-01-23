import { Languages } from '../types/enums';

const getInitialState = (): {
  language: Languages.RU | Languages.EN;
} => {
  const localStorageLang = localStorage.getItem('language');
  if (localStorageLang === Languages.RU || localStorageLang === Languages.EN) {
    return {
      language: localStorageLang,
    };
  }
  return {
    language: Languages.RU,
  };
};

export default getInitialState;
