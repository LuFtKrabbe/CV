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
    par1: `Подготовленный и готовый к работе начинающий специалист. Имею хорошее техническое образование и 
    аналитический склад ума, позволяющий самостоятельно справлятся с поставленными задачами. Хорошо работаю
    с документацией и умею четко следовать пунктам указанным в техническом задании.`,
    par2: `Люблю создавать проекты с нуля, развивая идею и уделяя внимание деталям для комфортного взаимодействия 
    пользователя с интерфейсом.`,
    par3: `Горжусь финальным проектом пройденного основного курса, где смог проявить себя как лидер команды. Моими
    главными задачами являлись: планирование и отслеживание рабочего процесса в соответствии с гибкой методологией 
    разработки Scrum, просмотр кода других участников и его одобрение с внесением изменений в проект. Результатом 
    работы стал проект, использующий облачную площадку Commercetools для продажи товаров.`,
    titles: {
      about: 'О СЕБЕ',
      projects: 'ПРОЕКТЫ (ТОП-3)',
      courses: 'КУРСЫ',
      work: 'ОПЫТ РАБОТЫ',
      education: 'ОБРАЗОВАНИЕ',
    },
  },
  [Languages.EN]: {
    par1: `I'm well-trained and ready-to-work specialist with a solid technical education and an analytical mind
    that helps me to handle with assigned tasks. I work well with the documentation and clearly follow the
    requirements outlined in the technical specifications.`,
    par2: `I love to create projects from scratch developing an idea and paying attention to the details for user
    comfort and good product interaction.`,
    par3: `I'm proud of the final project where I proved myself as a team leader. My main responsibilities
    included planning and monitoring the work progress according to the agile Scrum metodology, reviewing
    the code and finally approving and merging pull requests. As a result, our team implemented a
    real-life project using Commercetools - cloud-based headless commerce platform.`,
    titles: {
      about: 'ABOUT ME',
      projects: 'PROJECTS (TOP-3)',
      courses: 'COURSES',
      work: 'WORK EXPERIENCE',
      education: 'EDUCATION',
    },
  },
};