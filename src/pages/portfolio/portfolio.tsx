import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import {
  projectsAsyncRace,
  projectsCommerce,
  projectsImperialDB,
  projectsKeyboard,
  projectsMinesweeper,
  projectsMomentum,
  projectsNewsletter,
  projectsPlants,
  projectsSelectors,
  projectsShelter,
} from '../../modules/projects/projectsData';
import ProjectsExpandBlock from '../../modules/projects/projectsExpand';

const Portfolio: FC = (): JSX.Element => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-format">
        <div className="portfolio-content">
          <div className="portfolio-content-header">
            <div className="header-name">Portfolio</div>
            <NavLink to="/profile" className="header-back">
              ← Back
            </NavLink>
          </div>
          <div className="portfolio-content-main">
            {ProjectsExpandBlock(projectsImperialDB)}
            {ProjectsExpandBlock(projectsCommerce)}
            {ProjectsExpandBlock(projectsAsyncRace)}
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
