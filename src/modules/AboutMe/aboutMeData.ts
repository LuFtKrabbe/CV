import { Languages } from '../../types/enums';

export type AboutMeData = {
  par1: string;
  par2: string;
  par3: string;
  titles: {
    about: string;
    projects: string;
    courses: string;
    work: string;
    education: string;
  };
};

export const aboutMeData: Record<Languages, AboutMeData> = {
  [Languages.RU]: {
    par1: `Хорошо подготовленный и готовый к работе начинающий специалист с уверенным техническим образованием и 
    аналитическим складом ума. Хорошо работаю с документацией и умею четко следовать пунктам, указанным в техническом 
    задании, где во многом самостоятельно справляюсь с поставленными задачами.`,
    par2: `Люблю создавать проекты с нуля, принимая активное участие в развитии идеи и её реализации, а также выстраивать комфортное 
    взаимодействие между пользователем и интерфейсом. Являюсь автором программы, занесенной в государственный реестр программ
    для ЭВМ, а также разрабатываю программу расчёта для опор ВЛ, составляя математическую модель и используя MS Excel с VBA
    для текущей реализации.`,
    par3: `Горжусь командными проектами пройденных курсов, где смог быть как участником, так и проявить себя в роли лидера команды. 
    Выполнял задачи, связанные с созданием, стилизацией и тестированием компонентов, планированием и отслеживанием рабочего процесса в 
    соответствии с гибкой методологией разработки Scrum, просмотром кода других участников и внесением замечаний и предложений.`,
    titles: {
      about: 'О СЕБЕ',
      projects: 'ПРОЕКТЫ (ТОП-3)',
      courses: 'КУРСЫ',
      work: 'ОПЫТ РАБОТЫ',
      education: 'ОБРАЗОВАНИЕ',
    },
  },
  [Languages.EN]: {
    par1: `Well-trained and ready-to-work specialist with a solid technical education and an analytical mind.
    I can work well with the documentation and clearly follow the requirements outlined in the technical specifications.
    In many cases I cope with assigned tasks by myself.`,
    par2: `I like to create projects from scratch, taking an active part in development and implement the idea. I like to 
    make a comfortable interfaces for easy interaction between the user and the program. I am the author of a program 
    included in the state register of computer programs. Also I develop a calculation program for overhead line towers, 
    creating a mathematical model and using MS Excel with VBA for the temporary implementation.`,
    par3: `I'm proud of the team projects where I proved myself as a good teammate and also as a team leader. My work tasks
    included creating, styling and testing components, planning and monitoring the work progress according to the agile Scrum 
    metodology, reviewing the code with comments and suggestions. As a result, we implemented a real-life project for sales 
    which using Commercetools - cloud-based headless commerce platform and another project which is a playground for SQL queries.`,
    titles: {
      about: 'ABOUT ME',
      projects: 'PROJECTS (TOP-3)',
      courses: 'COURSES',
      work: 'WORK EXPERIENCE',
      education: 'EDUCATION',
    },
  },
};
