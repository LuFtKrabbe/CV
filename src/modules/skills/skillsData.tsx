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
    'Jest',
    'Vitest',
    'Git & GitHub',
  ],
  libraries: ['React', 'Ant Design', 'Redux', 'Redux Toolkit', 'Yup'],
  basics: ['Node.js', 'Next.js', 'BEM'],
  programs: ['VSCode', 'Figma', 'Postman', 'Jira', 'AutoCAD', 'Paint.NET'],
  systems: ['Windows', 'Linux: Ubuntu'],
};

export const skillsText = {
  [Languages.RU]: {
    technologies: 'Технологии и фреймворки',
    libraries: 'Библиотеки',
    basics: 'Основы',
    programs: 'Программы',
    systems: 'ОС',
  },
  [Languages.EN]: {
    technologies: 'Technologies & Frameworks',
    libraries: 'Libraries',
    basics: 'Basics',
    programs: 'Programs',
    systems: 'OS',
  },
};
