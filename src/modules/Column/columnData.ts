import { Languages } from '../../types/enums';

export type ColumnData = {
  titles: {
    languages: string;
    skills: string;
  };
};

export const columnData: Record<Languages, ColumnData> = {
  [Languages.RU]: {
    titles: {
      languages: 'ЯЗЫКИ',
      skills: 'НАВЫКИ',
    },
  },
  [Languages.EN]: {
    titles: {
      languages: 'LANGUAGES',
      skills: 'SKILLS',
    },
  },
};
