import { Languages } from '../../types/enums';

export type CoursesData = {
  name: string;
  organization: string;
  dateStart?: string;
  dateFinish?: string;
  description?: string;
};

export const coursesNode: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'Node.js (На обучении)',
    organization: 'RS School',
    dateStart: '01.2024',
    dateFinish: '03.2024',
    description: 'Основы Node.js, сетевая коммуникация, тестирование, контейнеризация, SQL, PostgreSQL, Docker and JWT.',
  },
  [Languages.EN]: {
    name: 'Node.js (In progress)',
    organization: 'RS School',
    dateStart: '01.2024',
    dateFinish: '03.2024',
    description: 'Node.js basics, Network communication, Testing, Containerization, SQL, PostgreSQL, Docker and JWT.',
  },
};

export const coursesReact: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'React',
    organization: 'RS School',
    dateStart: '10.2023',
    dateFinish: '01.2024',
    description:
      'Функциональные и классовые компоненты, хуки, навигация, тестирование, Context API, Redux, Next.js и GraphQL.',
  },
  [Languages.EN]: {
    name: 'React',
    organization: 'RS School',
    dateStart: '10.2023',
    dateFinish: '01.2024',
    description:
      'Class components, Functional components, Hooks, Routing, Context API, Tests, Redux, Next.js and GraphQL.',
  },
};

export const coursesAWS: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'Основы AWS',
    organization: 'RS School & AWS',
    dateStart: '09.2023',
    dateFinish: '10.2023',
    description: 'Основы работы сети и облачных сервисов AWS (EC2, ELB, ASG, RDS, ElastiCache, S3).',
  },
  [Languages.EN]: {
    name: 'AWS Fundamentals',
    organization: 'RS School & AWS',
    dateStart: '09.2023',
    dateFinish: '10.2023',
    description:
      'Fundamentals of Networking and AWS Cloud Essentials with Services (EC2, ELB, ASG, RDS, ElastiCache, S3).',
  },
};

export const coursesFrontEnd: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'JavaScript/Front-end',
    organization: 'RS School',
    dateStart: '02.2023',
    dateFinish: '09.2023',
    description:
      'Продвинутый уровень Javascript, сеть и безопасность, тестирование, паттерны проектирования, методология гибкой разработки, принципы разработки и инструменты.',
  },
  [Languages.EN]: {
    name: 'JavaScript/Front-end',
    organization: 'RS School',
    dateStart: '02.2023',
    dateFinish: '09.2023',
    description:
      'Advanced Javascript, Networking & Security, Testing, Agile, Patterns, Principles and Tools for development.',
  },
};

export const coursesTypeScript: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'Построение JavaScript приложений с TypeScript',
    organization: 'Microsoft',
  },
  [Languages.EN]: {
    name: 'Build JavaScript applications using TypeScript',
    organization: 'Microsoft',
  },
};

export const coursesPreFrontEnd: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    name: 'JavaScript/Front-end (Pre-School)',
    organization: 'RS School',
    dateStart: '12.2022',
    dateFinish: '02.2023',
    description: 'Course for beginners in programming',
  },
  [Languages.EN]: {
    name: 'JavaScript/Front-end (Pre-School)',
    organization: 'RS School',
    dateStart: '12.2022',
    dateFinish: '02.2023',
    description: 'Course for beginners in programming',
  },
};

export const coursesCommandLine: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    organization: 'Hexlet',
    name: 'Основы командной строки',
  },
  [Languages.EN]: {
    organization: 'Hexlet',
    name: 'Command Line Basics',
  },
};

export const coursesGit: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    organization: 'Hexlet',
    name: 'Введение в Git',
  },
  [Languages.EN]: {
    organization: 'Hexlet',
    name: 'Introduction to Git',
  },
};

export const coursesTriada: Record<Languages, CoursesData> = {
  [Languages.RU]: {
    organization: 'Code Basics',
    name: 'HTML, CSS и JavaScript',
  },
  [Languages.EN]: {
    organization: 'Code Basics',
    name: 'HTML, CSS and JavaScript',
  },
};
