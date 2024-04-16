import { Languages } from '../../types/enums';

export type WorkData = {
  name: string;
  city: string;
  workDates: string;
  position: string;
  description: string[];
  list?: string[];
  list2?: string[];
};

export const workFirst: Record<Languages, WorkData> = {
  [Languages.RU]: {
    name: 'ООО "ЭРКОН"',
    city: 'Санкт-Петербург',
    workDates: '2019 - 2021',
    position: 'Инженер-конструктор',
    description: [
      `Расчёты стальных и железобетонных несущих конструкций: 
    промышленные здания, стальные галереи и опоры воздушных линий электропередачи.`,
    ],
  },
  [Languages.EN]: {
    name: 'LLC "ERKON"',
    city: 'Saint Petersburg',
    workDates: '2019 - 2021',
    position: 'Constructor engineer',
    description: [
      `Calculations of steel and reinforced concrete load-bearing structures: 
    industrial buildings, steel galleries and towers of power lines.`,
    ],
  },
};

export const workSecond: Record<Languages, WorkData> = {
  [Languages.RU]: {
    name: 'ВУНЦ ВМФ "ВМА"',
    city: 'Санкт-Петербург',
    workDates: '12.2021 – 12.2022',
    position: 'Старший оператор',
    description: [
      `В рамках выполняемого НИР разрабатывал программу, являющуюся электронным учебным пособием по общекорабельным 
      системам подводной лодки. Проект выполнен с помощью HTML, CSS и стандартного JS.`,
      `По результатам проведенных работ получено свидетельство о государственной регистрации программ для ЭВМ.`,
    ],
    list: [
      `Предложил идею создания программы и организовал выполнение работ;`,
      `Разработал графический интерфейс и выполнил техническую часть проекта.`,
    ],
  },
  [Languages.EN]: {
    name: 'Naval Academy',
    city: 'Saint Petersburg',
    workDates: '12.2021 – 12.2022',
    position: 'Senior operator',
    description: [
      `As a part of the research work I developed a program that is an electronic textbook of general ship systems 
      of a submarine. The project is made using HTML, CSS and standard JS.`,
      `Based on the results of the work, a certificate of state registration of computer programs was obtained.`,
    ],
    list: [
      `Suggested the idea of creating a program and organized the working process;`,
      `Developed a graphical interface and completed the technical part of the project.`,
    ],
  },
};

export const workThird: Record<Languages, WorkData> = {
  [Languages.RU]: {
    name: 'ООО "Электронная сеть"',
    city: 'Нижний Тагил',
    workDates: '12.2022 – по н.в.',
    position: 'Web-разработчик',
    description: [
      `Поддержка и развитие основного сайта компании, участие в создании и корректировке ТЗ 
      для запланированной обновленной версии сайта:`,
    ],
    list: [
      `Работа с CMS: создание блоков новостей, корректировка тарифов и другого контента;`,
      `Администрирование сайта и настройка доступа пользователям;`,
      `Выполнение SEO-оптимизации.`,
    ],
  },
  [Languages.EN]: {
    name: 'LLC "Electronic network"',
    city: 'Nizhny Tagil',
    workDates: '12.2022 – present',
    position: 'Web-developer',
    description: [
      `Maintained and developed the main website of the company, participated in the creation and adjustment 
      of technical specifications for the planned updated version of the site:`,
    ],
    list: [
      `Work with CMS: news blocks creating, tariffs adjusting and other content;`,
      `Site administration and user access settings;`,
      `Performing SEO optimizations.`,
    ],
  },
};

export const workFourth: Record<Languages, WorkData> = {
  [Languages.RU]: {
    name: 'Фриланс',
    city: 'Санкт-Петербург',
    workDates: '03.2023 – по н.в.',
    position: 'Frontend-разработчик',
    description: [
      `Выполняю полный цикл разработки сайтов для компаний и ИП: разработка и согласование ТЗ, 
      разработка макета и проработка контента, верстка и программирование функционала, а также 
      размещение на хостинге со сдачей готового проекта:`,
    ],
    list: [
      `Разработал на Next.js Landing-page для компании по производству машиностроительных деталей в г. Рязань;`,
      `Перенёс на Next.js сайт с сервиса Tilda на отдельный хостинг с доработкой функционала.`,
    ],
  },
  [Languages.EN]: {
    name: 'Freelance',
    city: 'Saint Petersburg',
    workDates: '03.2023 – present',
    position: 'Frontend-developer',
    description: [
      `Performing a full cycle of website development for other companies and individual entrepreneurs: 
      development and approval of technical specifications, layout and content development, 
      programming of functionality, hosting and finished project delivery:`,
    ],
    list: [
      `Developed on Next.js Landing-page for a company producing mechanical engineering parts in Ryazan;`,
      `Migrated to Next.js the site from the Tilda service to a separate hosting withh additional functionality.`,
    ],
  },
};
