export type CoursesData = {
  name: string;
  organization: string;
  dateStart?: string;
  dateFinish?: string;
  description?: string;
};

export const coursesReact: CoursesData = {
  name: 'React (In progress)',
  organization: 'RS School',
  dateStart: '10.2023',
  dateFinish: '01.2024',
  description:
    'Class components, Functional components, Hooks, Routing, Context API, Tests, Redux, Next.js and GraphQL.',
};

export const coursesAWS: CoursesData = {
  name: 'AWS Fundamentals',
  organization: 'RS School & AWS',
  dateStart: '09.2023',
  dateFinish: '10.2023',
  description:
    'Fundamentals of Networking and AWS Cloud Essentials with Services (EC2, ELB, ASG, RDS, ElastiCache, S3).',
};

export const coursesFrontEnd: CoursesData = {
  name: 'JavaScript/Front-end',
  organization: 'RS School',
  dateStart: '02.2023',
  dateFinish: '09.2023',
  description:
    'Advanced Javascript, Networking & Security, Testing, Agile, Patterns, Principles and Tools for development.',
};

export const coursesTypeScript: CoursesData = {
  name: 'Build JavaScript applications using TypeScript',
  organization: 'Microsoft',
};

export const coursesPreFrontEnd: CoursesData = {
  name: 'JavaScript/Front-end (Pre-School)',
  organization: 'RS School',
  dateStart: '12.2022',
  dateFinish: '02.2023',
  description: 'Course for beginners in programming',
};

export const coursesCommandLine: CoursesData = {
  organization: 'Hexlet',
  name: 'Command Line Basics',
};

export const coursesGit: CoursesData = {
  organization: 'Hexlet',
  name: 'Introduction to Git',
};

export const coursesTriada: CoursesData = {
  organization: 'Code Basics',
  name: 'HTML, CSS and JavaScript',
};
