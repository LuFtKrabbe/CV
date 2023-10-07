export type CoursesData = {
  name: string;
  dateStart: string;
  dateFinish: string;
  degree: string;
  description: string;
};

export const coursesPreFrontEnd: CoursesData = {
  name: 'RS School',
  dateStart: '12.2022',
  dateFinish: '02.2023',
  degree: 'JavaScript/Front-end (Pre-School)',
  description: 'Course for beginners in programming',
};

export const coursesFrontEnd: CoursesData = {
  name: 'RS School',
  dateStart: '02.2023',
  dateFinish: '09.2023',
  degree: 'JavaScript/Front-end',
  description: 'Course for Junior Front-end developer position',
};
