import { FC, useState, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { langContext } from '../../language/langContext';

import {
  projectsAsyncRace,
  projectsCandle,
  projectsCommerce,
  projectsConvex,
  projectsGraphiQL,
  projectsImperialDB,
  projectsKeyboard,
  projectsMachinery,
  projectsMinesweeper,
  projectsMomentum,
  projectsNewsletter,
  projectsPlants,
  projectsSelectors,
  projectsShelter,
} from '../../modules/projects/projectsData';
import ProjectsExpandBlock from '../../modules/projects/projectsExpand';

import { portfolioData } from './portfolioData';

const Portfolio: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const {
    state: { language },
  } = useContext(langContext);

  const projectPack: JSX.Element =
    page === 1 ? (
      <>
        <div className="portfolio-content-section-title">{portfolioData[language].titles.commercial}</div>
        <ProjectsExpandBlock project={projectsConvex}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsCandle}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsMachinery}></ProjectsExpandBlock>
        <div className="portfolio-content-section-title">{portfolioData[language].titles.course}</div>
        <ProjectsExpandBlock project={projectsGraphiQL}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsImperialDB}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsCommerce}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsMinesweeper}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsMomentum}></ProjectsExpandBlock>
      </>
    ) : (
      <>
        <div className="portfolio-content-section-title">{portfolioData[language].titles.course}</div>
        <ProjectsExpandBlock project={projectsSelectors}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsAsyncRace}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsNewsletter}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsKeyboard}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsShelter}></ProjectsExpandBlock>
        <ProjectsExpandBlock project={projectsPlants}></ProjectsExpandBlock>
      </>
    );

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
          <div className="portfolio-content-main">{projectPack}</div>
          <div className="portfolio-content-pagination">
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
