import { Languages } from '../../types/enums';

export type AchievementsData = {
  title: string;
  back: string;
};

export const achievementsData: Record<Languages, AchievementsData> = {
  [Languages.RU]: {
    title: 'Достижения',
    back: '← Назад',
  },
  [Languages.EN]: {
    title: 'Achievements',
    back: '← Back',
  },
};
