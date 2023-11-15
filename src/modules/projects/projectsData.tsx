import imageCommerce from '../../assets/projects/commerce.png';
import imageImperial from '../../assets/projects/imperial.png';
import imageKeyboard from '../../assets/projects/keyboard.png';
import imageMinesweeper from '../../assets/projects/minesweeper.png';
import imageMomentum from '../../assets/projects/momentum.png';
import imageNewsletter from '../../assets/projects/newsletter.png';
import imagePlants from '../../assets/projects/plants.png';
import imageRace from '../../assets/projects/race.png';
import imageSelectors from '../../assets/projects/selectors.png';
import imageShelter from '../../assets/projects/shelter.png';

export type ProjectsData = {
  name: string;
  type: string;
  linkDeploy: string;
  linkRepo: string;
  picture: string;
  description: string;
  descriptionExpand: string;
};

export const projectsPlants: ProjectsData = {
  name: 'Plants',
  type: 'Landing page',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/plants/',
  linkRepo: 'https://github.com/LuFtKrabbe/plants/tree/plants-part3/plants',
  picture: imagePlants,
  description: `A landing page that sales plants and care services. Adaptive and responsive layout 
  for mobile and desktop devices.`,
  descriptionExpand: `Interactive web-site for plants sales and care services. Valid semantic adaptive layout is made in 
  accordance with the template from Figma, using JavaScript to implement the required functionality.`,
};

export const projectsMomentum: ProjectsData = {
  name: 'Momentum',
  type: 'Functional application',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFEPRESCHOOL2022Q4/momentum/',
  linkRepo: 'https://github.com/LuFtKrabbe/momentum/tree/momentum/momentum',
  picture: imageMomentum,
  description: `A landing page that sales plants and care services. Adaptive and responsive layout for mobile and desktop devices.`,
  descriptionExpand: `The app shows the time and greets the user, who can also choose a suitable background from the image
  service, request the weather in the region, read a quote and listen to music. The displayed modules are configurable and 
  can be hidden. Available in Russian and English.`,
};

export const projectsShelter: ProjectsData = {
  name: 'Shelter',
  type: 'Two-page website',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/shelter',
  linkRepo: 'https://github.com/LuFtKrabbe/shelter/tree/shelter-part3/shelter',
  picture: imageShelter,
  description: `A simple two-page website with cute pets. Adaptive and responsive layout for mobile and desktop devices.`,
  descriptionExpand: `The shelter's page with its pets and information about them. This is more complex project than the 
  similar previous one because of implemented features: carousel, unique cards on screen at one time and pop-up window.`,
};

export const projectsKeyboard: ProjectsData = {
  name: 'Virtual Keyboard',
  type: 'Functional application',
  linkDeploy: 'https://luftkrabbe.github.io/virtual-keyboard/src/index.html',
  linkRepo: 'https://github.com/LuFtKrabbe/virtual-keyboard/tree/development',
  picture: imageKeyboard,
  description: `Virtual Keyboard with Russian and English layout, nice design and animated keys.`,
  descriptionExpand: `Virtual Keyboard with animated keystrokes and layout in Russian and English. The printed text corresponds 
  to the characters displayed on the virtual keyboard when using a mouse or a physical keyboard. All application elements 
  are generated with JavaScript.`,
};

export const projectsMinesweeper: ProjectsData = {
  name: 'Minesweeper',
  type: 'Game application',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/minesweeper/',
  linkRepo: 'https://github.com/LuFtKrabbe/minesweeper/tree/minesweeper/minesweeper',
  picture: imageMinesweeper,
  description: `The project is executed using vanilla JavaScript. Set up the game and play with Light or Dark theme.`,
  descriptionExpand: `The version of the original application with full functionality: choose the size of the field, set 
  the number of mines, watch the current values on the info board and look at the table of records. The game has sounds
  and dark and light color design.`,
};

export const projectsNewsletter: ProjectsData = {
  name: 'Newsletter',
  type: 'News application',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/migration-newip-to-ts/',
  linkRepo: 'https://github.com/LuFtKrabbe/newsletter/tree/migration-newip-to-ts/migration-newip-to-ts',
  picture: imageNewsletter,
  description: `A simple HTTP REST API for searching and retrieving news from all over the internet.`,
  descriptionExpand: `A simple HTTP REST API for searching and retrieving news from all over the internet. The project 
  with open source code needed to be typed using TypeScript. The application has a modified appearance and adaptive layout.`,
};

export const projectsSelectors: ProjectsData = {
  name: 'CSS Selectors',
  type: 'Game and study application',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/rss-css-selectors/',
  linkRepo: 'https://github.com/LuFtKrabbe/css-selectors/tree/rss-css-selectors/rss-css-selectors',
  picture: imageSelectors,
  description: `The project is executed using TypeScript and ES6+ features. Learn the CSS selectors in playing form.`,
  descriptionExpand: `A simulator for learning css selectors, which contains 10 game levels. For the user comfort, the 
  code and game entities are highlighted when hovering, the progress of the levels is shown in the panel and it is 
  possible to take a hint.`,
};

export const projectsAsyncRace: ProjectsData = {
  name: 'Asynchronous Race',
  type: 'Game SPA',
  linkDeploy: 'https://rolling-scopes-school.github.io/luftkrabbe-JSFE2023Q1/async-race/',
  linkRepo: 'https://github.com/LuFtKrabbe/async-race/tree/async-race/async-race',
  picture: imageRace,
  description: `The SPA is executed using REST architecture with local server interaction.`,
  descriptionExpand: `All actions take place in communication with the local server! Add or change cars, run each one 
  individually or arrange a race. Keep track of their movement and condition on the track and view progress in the high 
  score table. `,
};

export const projectsCommerce: ProjectsData = {
  name: 'Blocks&Beams',
  type: 'E-commerce SPA',
  linkDeploy: 'https://blocks-n-beams.netlify.app/main',
  linkRepo: 'https://github.com/LuFtKrabbe/blocks-n-beams',
  picture: imageCommerce,
  description: `Team work project is executed by 3 members. Project is created using React with functional components, 
  Ant design component library, Redux and Jest for testing. Store is ready for sales!`,
  descriptionExpand: `Trial period of the project has already expired! Team work project is executed by 3 members. 
  Project is created using React with functional components, Ant design component library, Redux and Jest for testing. 
  Store is ready for sales using commercetools as a backend.`,
};

export const projectsImperialDB: ProjectsData = {
  name: 'Imperial Database',
  type: 'Fun SPA',
  linkDeploy: 'https://imperial-db.netlify.app',
  linkRepo: 'https://github.com/LuFtKrabbe/react-learn/tree/react-tests-context',
  picture: imageImperial,
  description: `The project for practicing react skills: class and functional components and routing with Redux and Jest testing.`,
  descriptionExpand: `A simple REST API for searching planets from Star Wars Universe. Use pagnation elements to display data and 
  see detailed information about any planet.`,
};
