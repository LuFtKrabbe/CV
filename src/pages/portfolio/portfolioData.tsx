import { Languages } from '../../types/enums';

export type PortfolioData = {
  title: string;
  back: string;
  titles: {
    commercial: string,
    course: string,
  }
};

export const portfolioData: Record<Languages, PortfolioData> = {
  [Languages.RU]: {
    title: 'Портфолио',
    back: '← Назад',
    titles: {
      commercial: 'КОММЕРЧЕСКИЕ ПРОЕКТЫ',
      course: 'УЧЕБНЫЕ И КОМАНДНЫЕ ПРОЕКТЫ',
    }
  },
  [Languages.EN]: {
    title: 'Portfolio',
    back: '← Back',
    titles: {
      commercial: 'COMMERCIAL PROJECTS',
      course: 'TRAINING AND TEAM PROJECTS',
    }
  },
};
