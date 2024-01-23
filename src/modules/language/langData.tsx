import { Languages } from '../../types/enums';

export type LangData = {
  name: string;
  lvl: string;
  percent: string;
};

export const langFirst: Record<Languages, LangData> = {
  [Languages.RU]: {
    name: 'Английский',
    lvl: 'C1',
    percent: '80%',
  },
  [Languages.EN]: {
    name: 'English',
    lvl: 'C1',
    percent: '80%',
  },
};

export const langSecond: Record<Languages, LangData> = {
  [Languages.RU]: {
    name: 'Немецкий',
    lvl: 'A1',
    percent: '10%',
  },
  [Languages.EN]: {
    name: 'German',
    lvl: 'A1',
    percent: '10%',
  },
};
