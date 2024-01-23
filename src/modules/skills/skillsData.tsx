import { Languages } from '../../types/enums';

export type SkillsData = {
  technologies: string[];
  libraries: string[];
  basics: string[];
  programs: string[];
  systems: string[];
};

export const skills: SkillsData = {
  technologies: [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'TypeScript',
    'ESLint',
    'Webpack',
    'Vite',
    'Git & GitHub',
    'VSCode',
  ],
  libraries: ['React', 'Ant Design'],
  basics: ['Node.js', 'Jest', 'BEM'],
  programs: ['Figma', 'Postman', 'Jira', 'AutoCAD', 'Paint.NET'],
  systems: ['Windows', 'Linux: Ubuntu'],
};

export const skillsText = {
  [Languages.RU]: {
    technologies: 'Технологии',
    libraries: 'Библиотеки',
    basics: 'Основы',
    programs: 'Программы',
    systems: 'ОС',
  },
  [Languages.EN]: {
    technologies: 'Technologies',
    libraries: 'Libraries',
    basics: 'Basics',
    programs: 'Programs',
    systems: 'OS',
  },
};
