import { Languages } from '../../types/enums';

export type EduData = {
  name: string;
  city: string;
  yearStart: string;
  yearFinish: string;
  degree: string;
  department: string;
  description: string;
  honor: boolean;
  honorText: string;
};

export const universityFirst: Record<Languages, EduData> = {
  [Languages.RU]: {
    name: 'СПбГАСУ',
    city: 'Санкт-Петербург',
    yearStart: '2015',
    yearFinish: '2019',
    honor: true,
    honorText: 'с отличием',
    degree: 'Бакалавриат',
    department: 'Кафедра металлических и деревянных конструкций.',
    description: 'Проектирование высокоскоростной транспортной системы вокруг Санкт-Петербурга.',
  },
  [Languages.EN]: {
    name: 'SPSUACE',
    city: 'Saint Petersburg',
    yearStart: '2015',
    yearFinish: '2019',
    honor: true,
    honorText: 'with honor',
    degree: 'Bachelor of Science in Civil engineering',
    department: 'Department: Steel and Timber constructions.',
    description: 'Graduation work is related to the design of the transportation hyperloop system made of steel.',
  },
};

export const universitySecond: Record<Languages, EduData> = {
  [Languages.RU]: {
    name: 'СПбГАСУ',
    city: 'Санкт-Петербург',
    yearStart: '2019',
    yearFinish: '2021',
    honor: true,
    honorText: 'с отличием',
    degree: 'Магистратура',
    department: 'Кафедра металлических и деревянных конструкций.',
    description: 'Анализ работы предварительно-напряженных высотных и большепролетных сооружений.',
  },
  [Languages.EN]: {
    name: 'SPSUACE',
    city: 'Saint Petersburg',
    yearStart: '2019',
    yearFinish: '2021',
    honor: true,
    honorText: 'with honor',
    degree: 'Master of Science in Civil engineering',
    department: 'Department: Steel and Timber constructions.',
    description:
      'Analysis of the pre-stressed and large-span steel structures such as hyperloop and overhead power lines.',
  },
};
