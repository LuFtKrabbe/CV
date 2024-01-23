import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { ProjectsData } from './projectsData';

const ProjectsExpandBlock = (projectsExpand: Record<Languages, ProjectsData>): JSX.Element => {
  const {
    state: { language },
  }: { state: { language: Languages } } = useContext(langContext);

  return (
    <div className="projectsExpand-block">
      <div className="projectsExpand-imageContainer">
        <img className="projectsExpand-image" src={projectsExpand[language].picture}></img>
      </div>
      <div className="projectsExpand-container">
        <div className="projectsExpand-name">{projectsExpand[language].name}</div>
        <div className="projectsExpand-type">
          {projectsExpand[language].type}
          &nbsp;·&nbsp;
          <a href={projectsExpand[language].linkDeploy} className="projectsExpand-link">
            Deploy
          </a>
          &nbsp;·&nbsp;
          <a href={projectsExpand[language].linkRepo} className="projectsExpand-link">
            GitHub
          </a>
        </div>
        <div className="projectsExpand-description">{projectsExpand[language].descriptionExpand}</div>
      </div>
    </div>
  );
};

export default ProjectsExpandBlock;
