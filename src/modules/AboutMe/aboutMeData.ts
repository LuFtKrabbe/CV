import { Languages } from '../../types/enums';

export type AboutMeData = {
  par1: string;
  par2: string;
  par3: string;
  par4: string;
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
    par1: `Готовый к работе специалист с опытом разработки приложений и сайтов на React и Next.js. Принимал участие как в создании новых 
    проектов, так и в поддержке существующих. Имею уверенное техническое образование и аналитический склад ума. Хорошо работаю с документацией 
    и умею четко следовать пунктам, указанным в техническом задании, где во многом самостоятельно справляюсь с поставленными задачами.`,
    par2: `За время работы и курсов, смог показать себя не только участником, но и лидером команды. Выполнял задачи, связанные с 
    созданием, стилизацией и тестированием компонентов, планированием и отслеживанием рабочего процесса в соответствии с гибкой методологией 
    разработки Scrum, просмотром кода других участников и внесением замечаний и предложений.`,
    par3: `Люблю создавать проекты с нуля, принимая активное участие в развитии идеи и её реализации, а также выстраивать комфортное 
    взаимодействие между пользователем и программным интерфейсом. Имею хорошие организаторские навыки по планированию и контролю выполнения работ
    при ведении проекта.`,
    par4: `Веду собственный pet-проект и планирую развитие в сторону fullstack-разработчика, в первую очередь начиная с изучения Node.js, а затем
    и остальных необходимых инструментов для работы с серверной частью и базами данных. Являюсь автором программы, занесенной в государственный 
    реестр программ для ЭВМ, а также разрабатываю программу расчёта для опор ВЛ, составляя математическую модель и используя MS Excel с VBA
    для текущей реализации.`,
    titles: {
      about: 'О СЕБЕ',
      projects: 'ПРОЕКТЫ (ТОП-3)',
      courses: 'КУРСЫ',
      work: 'ОПЫТ РАБОТЫ',
      education: 'ОБРАЗОВАНИЕ',
    },
  },
  [Languages.EN]: {
    par1: `Ready-to-work specialist with experience in developing applications and websites on React and Next.js. I participated both in the 
    creation of new projects and supporting the existing ones. I can work well with the documentation and clearly follow the requirements 
    outlined in the technical specifications. In many cases I cope with assigned tasks by myself.`,
    par2: `During work and courses I proved myself as a good teammate and also as a team leader. My work tasks included creating, styling and 
    testing components, planning and monitoring the work progress according to the agile Scrum metodology, reviewing the code with comments 
    and suggestions.`,
    par3: `I like to create projects from scratch, taking an active part in development and the idea implementation. I like to 
    make a comfortable interfaces for easy interaction between the user and the program. I have good organizational skills in planning and 
    monitoring the execution of work during the project.`,
    par4: `I am running my own pet project and planning to develop towards a full-stack developer, first of all by studying Node.js 
    and other necessary tools for working with the server part and databases. I am the author of a program included in the state register 
    of computer programs. Also I develop a calculation program for overhead line towers, creating a mathematical model and using MS Excel 
    with VBA for the temporary implementation.`,
    titles: {
      about: 'ABOUT ME',
      projects: 'PROJECTS (TOP-3)',
      courses: 'COURSES',
      work: 'WORK EXPERIENCE',
      education: 'EDUCATION',
    },
  },
};
