import imageCommerce from '../../assets/projects/commerce.png';
import imageGraphiQL from '../../assets/projects/graphiql.png';
import imageImperial from '../../assets/projects/imperial.png';
import imageKeyboard from '../../assets/projects/keyboard.png';
import imageMinesweeper from '../../assets/projects/minesweeper.png';
import imageMomentum from '../../assets/projects/momentum.png';
import imageNewsletter from '../../assets/projects/newsletter.png';
import imagePlants from '../../assets/projects/plants.png';
import imageRace from '../../assets/projects/race.png';
import imageSelectors from '../../assets/projects/selectors.png';
import imageShelter from '../../assets/projects/shelter.png';

import { Languages } from '../../types/enums';

export type ProjectsData = {
  name: string;
  type: string;
  linkDeploy: string;
  linkRepo: string;
  picture: string;
  description: string;
  descriptionExpand: string;
};

export const projectsPlants: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Plants',
    type: 'Landing page',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/plants/',
    linkRepo: 'https://github.com/LuFtKrabbe/plants/tree/plants-part3/plants',
    picture: imagePlants,
    description: `Страница по продаже растений и услуг по уходу за ними с адаптивной и отзывчивой версткой для мобильных и 
    настольных приложений.`,
    descriptionExpand: `Страничка по продаже растений и услуг по уходу за ними. Валидная и семантическая верстка выполнена в 
    соответствии с макетом Figma. Использован JavaScript для требуемой функциональности.`,
  },
  [Languages.EN]: {
    name: 'Plants',
    type: 'Landing page',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/plants/',
    linkRepo: 'https://github.com/LuFtKrabbe/plants/tree/plants-part3/plants',
    picture: imagePlants,
    description: `A landing page that sales plants and care services. Adaptive and responsive layout 
    for mobile and desktop devices.`,
    descriptionExpand: `Interactive web-site for plants sales and care services. Valid semantic adaptive layout is made in 
    accordance with the template from Figma, using JavaScript to implement the required functionality.`,
  },
};

export const projectsMomentum: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Momentum',
    type: 'Functional application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/momentum/',
    linkRepo: 'https://github.com/LuFtKrabbe/momentum/tree/momentum/momentum',
    picture: imageMomentum,
    description: `Приложение показывает время и приветствует пользователя. Узнайте погоду, взгляните на цитату внизу экрана и слушайте музыку.`,
    descriptionExpand: `Приложение показывает время и приветствует пользователя, который может выбрать подходящий ему фон 
    в виде картинок. Узнайте погоду, взгляните на цитату внизу экрана и слушайте музыку. Элементы настраиваемы и могут быть убраны из отображения.`,
  },
  [Languages.EN]: {
    name: 'Momentum',
    type: 'Functional application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/momentum/',
    linkRepo: 'https://github.com/LuFtKrabbe/momentum/tree/momentum/momentum',
    picture: imageMomentum,
    description: `The app shows the time and greets the user. Request the weather in the region, read a quote and listen to music!`,
    descriptionExpand: `The app shows the time and greets the user, who can also choose a suitable background from the image
    service, request the weather in the region, read a quote and listen to music. The displayed modules are configurable and 
    can be hidden. Available in Russian and English.`,
  },
};

export const projectsShelter: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Shelter',
    type: 'Two-page website',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/shelter',
    linkRepo: 'https://github.com/LuFtKrabbe/shelter/tree/shelter-part3/shelter',
    picture: imageShelter,
    description: `Двухстраничный сайт с замечательными животными. Адаптивная и отзывчивая верстка для мобильных и настольных приложений.`,
    descriptionExpand: `Двухстраничный сайт приюта с животными и информацией о них. Более комплексный проект в сравнении с Plants, реализующий 
    такие особенности как анмированная карусель, список неповторяющихся карточек на экране и выскакивающее окно.`,
  },
  [Languages.EN]: {
    name: 'Shelter',
    type: 'Two-page website',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/shelter',
    linkRepo: 'https://github.com/LuFtKrabbe/shelter/tree/shelter-part3/shelter',
    picture: imageShelter,
    description: `A simple two-page website with cute pets. Adaptive and responsive layout for mobile and desktop devices.`,
    descriptionExpand: `The shelter's page with its pets and information about them. This is more complex project than the 
    similar previous one because of implemented features: carousel, unique cards on screen at one time and pop-up window.`,
  },
};

export const projectsKeyboard: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Virtual Keyboard',
    type: 'Functional application',
    linkDeploy: 'https://luftkrabbe.github.io/virtual-keyboard/src/index.html',
    linkRepo: 'https://github.com/LuFtKrabbe/virtual-keyboard/tree/development',
    picture: imageKeyboard,
    description: `Виртуальная клавиатура с анимированными клавишами и раскладкой на русском и английском языках.`,
    descriptionExpand: `Виртуальная клавиатура с анимированными клавишами и раскладкой на русском и английском языках. Набираемый 
    текст соответствует языку показанной раскладки. Вводите символы с клавиатуры или используйте мышь. Все элементы создаются
    при помощи JavaScript.`,
  },
  [Languages.EN]: {
    name: 'Virtual Keyboard',
    type: 'Functional application',
    linkDeploy: 'https://luftkrabbe.github.io/virtual-keyboard/src/index.html',
    linkRepo: 'https://github.com/LuFtKrabbe/virtual-keyboard/tree/development',
    picture: imageKeyboard,
    description: `Virtual Keyboard with Russian and English layout, nice design and animated keys.`,
    descriptionExpand: `Virtual Keyboard with animated keystrokes and layout in Russian and English. The printed text corresponds 
    to the characters displayed on the virtual keyboard when using a mouse or a physical keyboard. All application elements 
    are generated with JavaScript.`,
  },
};

export const projectsMinesweeper: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Minesweeper',
    type: 'Game application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/minesweeper/',
    linkRepo: 'https://github.com/LuFtKrabbe/minesweeper/tree/minesweeper/minesweeper',
    picture: imageMinesweeper,
    description: `Проект, написанный на стандартном JavaScript. Задайте оформление, настройки и сыграйте.`,
    descriptionExpand: `Версия оригинального приложения с полным функционалом: выбирайте размер поля, устаналивайте
    количество мин, следите за текущими игровыми показателями на информационном табло и смотрите таблицу рекордов.`,
  },
  [Languages.EN]: {
    name: 'Minesweeper',
    type: 'Game application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/minesweeper/',
    linkRepo: 'https://github.com/LuFtKrabbe/minesweeper/tree/minesweeper/minesweeper',
    picture: imageMinesweeper,
    description: `The project is executed using vanilla JavaScript. Set up the game and play with Light or Dark theme.`,
    descriptionExpand: `The version of the original application with full functionality: choose the size of the field, set 
    the number of mines, watch the current values on the info board and look at the table of records. The game has sounds
    and dark and light color design.`,
  },
};

export const projectsNewsletter: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Newsletter',
    type: 'News application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/migration-newip-to-ts/',
    linkRepo: 'https://github.com/LuFtKrabbe/newsletter/tree/migration-newip-to-ts/migration-newip-to-ts',
    picture: imageNewsletter,
    description: `Простой обозреватель для поиска и чтения новостей со всего интернета, использующий архитектуру REST.`,
    descriptionExpand: `Простой обозреватель для поиска и чтения новостей со всего интернета, использующий архитектуру REST. Проект 
    с открытым исходным кодом требовал типизации с помощью TypeScript, а также стилизации интерфейса, включая адаптивную вёрстку.`,
  },
  [Languages.EN]: {
    name: 'Newsletter',
    type: 'News application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/migration-newip-to-ts/',
    linkRepo: 'https://github.com/LuFtKrabbe/newsletter/tree/migration-newip-to-ts/migration-newip-to-ts',
    picture: imageNewsletter,
    description: `A simple HTTP REST API for searching and retrieving news from all over the internet.`,
    descriptionExpand: `A simple HTTP REST API for searching and retrieving news from all over the internet. The project 
    with open source code needed to be typed using TypeScript. The application has a modified appearance and adaptive layout.`,
  },
};

export const projectsSelectors: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'CSS Selectors',
    type: 'Game and study application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/rss-css-selectors/',
    linkRepo: 'https://github.com/LuFtKrabbe/css-selectors/tree/rss-css-selectors/rss-css-selectors',
    picture: imageSelectors,
    description: `Проект выполнен с использованием TypeScript и особенностей ES6+. Учите CSS селекторы в игровой форме!`,
    descriptionExpand: `Игровое приложение для изучения CSS селекторов, состоящее из 10 уровней нарастающей сложности. 
    Для удобства пользователя выполнена подсветка элементов при наведении на них, показан прогресс уровней на панели
    и возможность взять подсказку.`,
  },
  [Languages.EN]: {
    name: 'CSS Selectors',
    type: 'Game and study application',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/rss-css-selectors/',
    linkRepo: 'https://github.com/LuFtKrabbe/css-selectors/tree/rss-css-selectors/rss-css-selectors',
    picture: imageSelectors,
    description: `The project is executed using TypeScript and ES6+ features. Learn the CSS selectors in playing form.`,
    descriptionExpand: `A simulator for learning css selectors, which contains 10 game levels. For the user comfort, the 
    code and game entities are highlighted when hovering, the progress of the levels is shown in the panel and it is 
    possible to take a hint.`,
  },
};

export const projectsAsyncRace: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Asynchronous Race',
    type: 'Game SPA',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/async-race/',
    linkRepo: 'https://github.com/LuFtKrabbe/async-race/tree/async-race/async-race',
    picture: imageRace,
    description: `SPA проект, использующий архитектуру REST для запросов на локальный сервер.`,
    descriptionExpand: `Проект взаимодейтсвует с локальным сервером! Добавляйте и изменяйте машинки, запускайте по одной
    или устройте гонку. Следите за их передвижением и состоянием на трассе и отслеживайте прогресс в таблице рекордов.`,
  },
  [Languages.EN]: {
    name: 'Asynchronous Race',
    type: 'Game SPA',
    linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/async-race/',
    linkRepo: 'https://github.com/LuFtKrabbe/async-race/tree/async-race/async-race',
    picture: imageRace,
    description: `The SPA is executed using REST architecture with local server interaction.`,
    descriptionExpand: `All actions take place in communication with the local server! Add or change cars, run each one 
    individually or arrange a race. Keep track of their movement and condition on the track and view progress in the high 
    score table. `,
  },
};

export const projectsCommerce: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Blocks&Beams',
    type: 'E-commerce SPA',
    linkDeploy: 'https://blocks-n-beams.netlify.app/main',
    linkRepo: 'https://github.com/LuFtKrabbe/blocks-n-beams',
    picture: imageCommerce,
    description: `Командный проект по продаже строительных материалов, созданный на React с Redux, библиотекой компонентов 
    Ant design и тестированием на Jest.`,
    descriptionExpand: `Пробный период серверной площадки истёк. Выполненный командой из 3 участников проект, 
    созданный на React с функциональными компонетами, библиотекой Ant design, применением Redux и тестированием на Jest. 
    В качестве сервера использована площадка Commercetools.`,
  },
  [Languages.EN]: {
    name: 'Blocks&Beams',
    type: 'E-commerce SPA',
    linkDeploy: 'https://blocks-n-beams.netlify.app/main',
    linkRepo: 'https://github.com/LuFtKrabbe/blocks-n-beams',
    picture: imageCommerce,
    description: `Team work e-commerce project is created using React with functional components, Ant design component library, 
    Redux state manager and Jest for testing.`,
    descriptionExpand: `Trial period of the project has already expired! Team work project is executed by 3 members using React 
    with functional components, Ant design component library, Redux state manager and Jest for testing. 
    The store is based on commercetools as a backend.`,
  },
};

export const projectsImperialDB: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'Imperial Database',
    type: 'SPA',
    linkDeploy: 'https://imperial-db.netlify.app',
    linkRepo: 'https://github.com/LuFtKrabbe/react-learn/tree/react-tests-context',
    picture: imageImperial,
    description: `React-проект для тренировки навыков и изучения особенностей. Включает компоненты классов, функциональные компоненты, 
    навигацию, использования Redux и тестирование с Jest.`,
    descriptionExpand: `Простой REST API для поиска планет из вселенной Звёздных Войн. Используйте пагинацию для желаемого отображения 
    информации и просматривайте детальную информацию о любой планете!`,
  },
  [Languages.EN]: {
    name: 'Imperial Database',
    type: 'SPA for SW fans',
    linkDeploy: 'https://imperial-db.netlify.app',
    linkRepo: 'https://github.com/LuFtKrabbe/react-learn/tree/react-tests-context',
    picture: imageImperial,
    description: `The project for practicing react skills: class and functional components and routing with Redux and Jest testing.`,
    descriptionExpand: `A simple REST API for searching planets from Star Wars Universe. Use pagination elements to display data and 
    see detailed information about any planet.`,
  },
};

export const projectsGraphiQL: Record<Languages, ProjectsData> = {
  [Languages.RU]: {
    name: 'GraphiQL',
    type: 'Playground SPA',
    linkDeploy: 'https://graphi-buqlya.netlify.app',
    linkRepo: 'https://github.com/LuFtKrabbe/GraphiQL',
    picture: imageGraphiQL,
    description: `Командный проект по созданию игровой площадкой для выполнения GraphQL запросов к любому заданному 
    пользователем и доступному GraphQL API.`,
    descriptionExpand: `Приложение поддерживает любой доступный GraphQL API для создания запросов, включает в себя
    авторизацию и аутентификацию пользователей. Возможности: подсветка синтаксиса, обозреватель документации, 
    корректировка запроса, два языка и адаптивный дизайн.`,
  },
  [Languages.EN]: {
    name: 'GraphiQL',
    type: 'Playground SPA',
    linkDeploy: 'https://graphi-buqlya.netlify.app',
    linkRepo: 'https://github.com/LuFtKrabbe/GraphiQL',
    picture: imageGraphiQL,
    description: `Team work project is a playground for GraphQL requests which supports any open user-specified GraphQL API.`,
    descriptionExpand: `This App supports any open user-specified GraphQL API and includes the authorization and 
    authentication capabilities, ensuring access only for authorized users. Features: syntax highlighting, 
    documentation explorer, text prettifying for queries, two languages and responsive design.`,
  },
};
