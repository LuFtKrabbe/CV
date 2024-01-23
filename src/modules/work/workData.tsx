import { Languages } from '../../types/enums';

export type WorkData = {
  name: string;
  city: string;
  yearStart: string;
  yearFinish: string;
  position: string;
  description: string;
};

export const workFirst: Record<Languages, WorkData> = {
  [Languages.RU]: {
    name: 'ООО "ЭРКОН"',
    city: 'Санкт-Петербург',
    yearStart: '2019',
    yearFinish: '2021',
    position: 'Инженер-конструктор',
    description: `Расчёты стальных и железобетонных несущих конструкций: 
    промышленные здания, стальные галереи и опоры воздушных линий электропередачи.`,
  },
  [Languages.EN]: {
    name: 'LLC "ERKON"',
    city: 'Saint Petersburg',
    yearStart: '2019',
    yearFinish: '2021',
    position: 'Constructor engineer',
    description: `Calculations of steel and reinforced concrete load-bearing structures: 
    industrial buildings, steel galleries and towers of power lines.`,
  },
};
