import { Languages } from '../../types/enums';

export type HeaderData = {
  name: string;
  profession: string;
  links: {
    portfolio: string;
    achievements: string;
  };
};

export const headerData: Record<Languages, HeaderData> = {
  [Languages.RU]: {
    name: 'Александр Филимонов',
    profession: 'Junior фронтенд-разработчик',
    links: {
      portfolio: 'Портфолио',
      achievements: 'Достижения',
    },
  },
  [Languages.EN]: {
    name: 'Alexander Filimonov',
    profession: 'Junior frontend-developer',
    links: {
      portfolio: 'Portfolio',
      achievements: 'Achievements',
    },
  },
};
