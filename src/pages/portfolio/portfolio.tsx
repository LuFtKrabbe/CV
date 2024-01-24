import { FC, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { langContext } from '../../language/langContext';

import {
  projectsCommerce,
  projectsGraphiQL,
  projectsImperialDB,
  projectsKeyboard,
  projectsMinesweeper,
  projectsMomentum,
  projectsPlants,
  projectsSelectors,
  projectsShelter,
} from '../../modules/projects/projectsData';
import ProjectsExpandBlock from '../../modules/projects/projectsExpand';

import { portfolioData } from './portfolioData';

const Portfolio: FC = (): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-format">
        <div className="portfolio-content">
          <div className="portfolio-content-header">
            <div className="header-name">{portfolioData[language].title}</div>
            <NavLink to="/profile" className="header-back">
              {portfolioData[language].back}
            </NavLink>
          </div>
          <div className="portfolio-content-main">
            {ProjectsExpandBlock(projectsGraphiQL)}
            {ProjectsExpandBlock(projectsImperialDB)}
            {ProjectsExpandBlock(projectsCommerce)}
            {ProjectsExpandBlock(projectsSelectors)}
            {ProjectsExpandBlock(projectsMinesweeper)}
            {ProjectsExpandBlock(projectsKeyboard)}
            {ProjectsExpandBlock(projectsShelter)}
            {ProjectsExpandBlock(projectsMomentum)}
            {ProjectsExpandBlock(projectsPlants)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
