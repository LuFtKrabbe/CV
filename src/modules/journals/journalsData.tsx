import imageArchitecture from '../../assets/journals/architecture.png';
import imageTransportation from '../../assets/journals/transportation.png';
import { Languages } from '../../types/enums';

export type JournalsData = {
  name: string;
  article: string;
  picture?: string;
};

export const journalsTransportation2019: Record<Languages, JournalsData> = {
  [Languages.RU]: {
    name: 'Транспортные системы и технологии',
    article: 'К вопросу создания высокоскоростной транспортной магистрали в Санкт-Петербурге',
    picture: imageTransportation,
  },
  [Languages.EN]: {
    name: 'Transportation system and technologies',
    article: 'On the issue of creating a high-speed transport route in St. Petersburg',
    picture: imageTransportation,
  },
};

export const journalsTransportation2021: Record<Languages, JournalsData> = {
  [Languages.RU]: {
    name: 'Транспортные системы и технологии',
    article:
      'Предложения по строительству эстакадных конструкций и транспортно-пересадочных узлов высокоскоростной магистрали в Санкт-Петербурге',
    picture: imageArchitecture,
  },
  [Languages.EN]: {
    name: 'Transportation system and technologies',
    article:
      'Proposals for the construction of overpass structures and transport hubs for a high-speed highway in St. Petersburg',
    picture: imageArchitecture,
  },
};

export const journalsArchitecture: Record<Languages, JournalsData> = {
  [Languages.RU]: {
    name: 'Современные проблемы архитектуры и строительства',
    article: 'Применение предварительного напряжения в эстакадных конструкциях магистрали',
    picture: imageArchitecture,
  },
  [Languages.EN]: {
    name: 'Contemporary problems of architecture and construction',
    article: 'Application of prestressing in highway overpass structures',
    picture: imageArchitecture,
  },
};

export const journalsFoundation: Record<Languages, JournalsData> = {
  [Languages.RU]: {
    name: 'Научно-практический журнал "Фундаменты"',
    article: `Защита конструкций опор ВЛ 330-750 кВ от прогрессирующего обрушения`,
    picture: imageArchitecture,
  },
  [Languages.EN]: {
    name: 'Scientific and practical journal "FOUNDATIONS"',
    article: 'Protection of 330-750 kV overhead power line tower structures from progressive collapse',
    picture: imageArchitecture,
  },
};
