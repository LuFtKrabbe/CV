import { useContext, useState } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import PopUp from '../PopUp/PopUp';

import { ProjectsData } from './projectsData';

const ProjectsExpandBlock = ({ project }: { project: Record<Languages, ProjectsData> }): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenFalseCb = (arg = false): void => setIsOpen(arg);

  return (
    <div className="projectsExpand-block">
      <div className="projectsExpand-imageContainer">
        <img
          className="projectsExpand-image"
          src={project[language].picture}
          onClick={() => setIsOpen(!isOpen)}
          alt={project[language].altTitle}
          title={project[language].altTitle}
        ></img>
      </div>
      <div className="projectsExpand-container">
        <div className="projectsExpand-name">{project[language].name}</div>
        <div className="projectsExpand-type">
          {project[language].type}
          &nbsp;·&nbsp;
          <a href={project[language].linkDeploy} className="projectsExpand-link">
            Deploy
          </a>
          {project[language].linkRepo ? (
            <>
              &nbsp;·&nbsp;
              <a href={project[language].linkRepo} className="projectsExpand-link">
                GitHub
              </a>
            </>
          ) : (
            ''
          )}
        </div>
        <div className="projectsExpand-description">{project[language].descriptionExpand}</div>
      </div>
      {isOpen ? <PopUp imgPath={project[language].picture} setIsOpenFalseCb={setIsOpenFalseCb} /> : <div />}
    </div>
  );
};

export default ProjectsExpandBlock;
