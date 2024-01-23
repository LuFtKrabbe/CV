import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { ProjectsData } from './projectsData';

const ProjectsBlock = (projects: Record<Languages, ProjectsData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="projects-block">
      <div className="projects-name-container">
        <div className="projects-name">{projects[language].name}</div>
      </div>
      <div className="projects-text-container">
        <div className="projects-text">{projects[language].description}</div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
