export type CoursesData = {
  name: string;
  organization: string;
  dateStart?: string;
  dateFinish?: string;
  description?: string;
};

export const coursesFrontEnd: CoursesData = {
  name: 'JavaScript/Front-end',
  organization: 'RS School',
  dateStart: '02.2023',
  dateFinish: '09.2023',
  description: 'Course for Junior Front-end developer position',
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
