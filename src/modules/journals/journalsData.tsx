import imageArchitecture from '../../assets/journals/architecture.png';
import imageTransportation from '../../assets/journals/transportation.png';

export type JournalsData = {
  name: string;
  article: string;
  picture?: string;
};

export const journalsTransportation2019: JournalsData = {
  name: 'Transportation system and technologies',
  article: 'On the issue of creating a high-speed transport route in St. Petersburg',
  picture: imageTransportation,
};

export const journalsTransportation2021: JournalsData = {
  name: 'Transportation system and technologies',
  article:
    'Proposals for the construction of overpass structures and transport hubs for a high-speed highway in St. Petersburg',
  picture: imageArchitecture,
};

export const journalsArchitecture: JournalsData = {
  name: 'Contemporary problems of architecture and construction',
  article: 'Application of prestressing in higway overpass structures',
  picture: imageArchitecture,
};

export const journalsFoundation: JournalsData = {
  name: 'Scientific and practical journal "FOUNDATIONS"',
  article: 'Protection of 330-750 kV overhead power line tower structures from progressive collapse',
  picture: imageArchitecture,
};
