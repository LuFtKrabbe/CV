export type EduData = {
  name: string;
  city: string;
  yearStart: string;
  yearFinish: string;
  degree: string;
  department: string;
  description: string;
  honor: boolean;
};

export const universityFirst: EduData = {
  name: 'SPSUACE',
  city: 'Saint Petersburg',
  yearStart: '2015',
  yearFinish: '2019',
  honor: true,
  degree: 'Bachelor of Science in Civil engineering',
  department: 'Steel and Timber constructions.',
  description: 'Graduation work is related to the design of the transportation hyperloop system made of steel.',
};

export const universitySecond: EduData = {
  name: 'SPSUACE',
  city: 'Saint Petersburg',
  yearStart: '2019',
  yearFinish: '2021',
  honor: true,
  degree: 'Master of Science in Civil engineering',
  department: 'Steel and Timber constructions.',
  description:
    'Analysis of the pre-stressed and large-span steel structures such as hyperloop and overhead power lines.',
};
