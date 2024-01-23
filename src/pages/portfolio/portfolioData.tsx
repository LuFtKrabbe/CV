import { Languages } from '../../types/enums';

export type PortfolioData = {
  title: string;
  back: string;
};

export const portfolioData: Record<Languages, PortfolioData> = {
  [Languages.RU]: {
    title: 'Портфолио',
    back: '← Назад',
  },
  [Languages.EN]: {
    title: 'Portfolio',
    back: '← Back',
  },
};
