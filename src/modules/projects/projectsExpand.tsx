import { ProjectsData } from './projectsData';

const ProjectsExpandBlock = (projectsExpand: ProjectsData): JSX.Element => {
  return (
    <div className="projectsExpand-block">
      <div className="projectsExpand-imageContainer">
        <img className="projectsExpand-image" src={projectsExpand.picture}></img>
      </div>
      <div className="projectsExpand-container">
        <div className="projectsExpand-name">{projectsExpand.name}</div>
        <div className="projectsExpand-type">
          {projectsExpand.type} ·{' '}
          <a href={projectsExpand.link} className="projectsExpand-link">
            link
          </a>
        </div>
        <div className="projectsExpand-description">{projectsExpand.descriptionExpand}</div>
      </div>
    </div>
  );
};

export default ProjectsExpandBlock;
