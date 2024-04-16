import { FC, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { langContext } from '../../language/langContext';

import {
  projectsCandle,
  projectsCommerce,
  projectsConvex,
  projectsGraphiQL,
  projectsImperialDB,
  projectsKeyboard,
  projectsMachinery,
  projectsMinesweeper,
  projectsMomentum,
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
            <div className="portfolio-content-section-title">{portfolioData[language].titles.commercial}</div>
            {ProjectsExpandBlock(projectsConvex)}
            {ProjectsExpandBlock(projectsCandle)}
            {ProjectsExpandBlock(projectsMachinery)}
            <div className="portfolio-content-section-title">{portfolioData[language].titles.course}</div>
            {ProjectsExpandBlock(projectsGraphiQL)}
            {ProjectsExpandBlock(projectsImperialDB)}
            {ProjectsExpandBlock(projectsCommerce)}
            {ProjectsExpandBlock(projectsMinesweeper)}
            {ProjectsExpandBlock(projectsKeyboard)}
            {ProjectsExpandBlock(projectsMomentum)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
