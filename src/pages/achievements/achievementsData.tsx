import { Languages } from '../../types/enums';

export type AchievementsData = {
  title: string;
  back: string;
  science: {
    title: string;
    description: {
      par1: string;
      par2: string;
    };
  };
  activities: {
    titles: string;
    completed: string;
    codewars: string;
    english: string;
    englishDescription: string;
    awsBadges: string;
  };
  titles: {
    certificates: string;
  };
};

export const achievementsData: Record<Languages, AchievementsData> = {
  [Languages.RU]: {
    title: 'Достижения',
    back: '← Назад',
    science: {
      title: 'НАУКА',
      description: {
        par1: `С выпускного курса программы бакалавриата вместе со своим научным руководителем Сенькиным Н.А. публикую 
        статьи, посвященные транспортным системам и воздушным линиям электропередачи. Статьи транспортной сферы 
        связаны с вопросами создания высокоскоростной системы вокруг Петербурга и в направлениях от него, где я в основном
        занимался расчетом несущих конструкций. Для воздушных линий электропередачи рассматриваются вопросы защиты
        стальных опор от вандализма и их последующего прогрессирующего обрушения как одной опоры, так и всей линии.`,
        par2: `Принял участие в 12 научных конференциях и являюсь автором и соавтором 11 статей, включающих 
        уровень публикации ВАК и Scopus.`,
      },
    },
    activities: {
      titles: 'КУРСЫ И ДЕЯТЕЛЬНОСТЬ',
      completed: 'Завершенные курсы',
      codewars: 'Codewars',
      english: 'Английский',
      englishDescription: 'В чтении и аудировании в соответствии с CEFR',
      awsBadges: 'AWS Значки',
    },
    titles: {
      certificates: 'СЕРТИФИКАТЫ',
    },
  },
  [Languages.EN]: {
    title: 'Achievements',
    back: '← Back',
    science: {
      title: 'SCIENCE',
      description: {
        par1: ` Since the end of my bachelor degree program my scientific advisor N.A. Senkin and I have been publishing
        articles dedicated to transportaion systems and overhead power lines. In terms of transport, the
        articles are related to the design and implementation of a high-speed highway, where I mainly deal with
        structural calculations. For power lines, issues include reducing accident rates and protecting them
        from vandals and other adverse factors that can lead to the collapse of a transmission tower or even a
        number of them.`,
        par2: `I took part in 12 scientific conferences and as author and co-author I have written 11 articles with
        publications in VAK and Scopus levels.`,
      },
    },
    activities: {
      titles: 'COURSES & ACTIVITIES',
      completed: 'Completed courses',
      codewars: 'Codewars',
      english: 'English',
      englishDescription: 'In reading and listening according to CEFR',
      awsBadges: 'AWS Badges',
    },
    titles: {
      certificates: 'CERTIFICATES',
    },
  },
};
