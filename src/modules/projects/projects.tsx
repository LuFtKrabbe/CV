import { ProjectsData } from './projectsData';

const ProjectsBlock = (projects: ProjectsData): JSX.Element => {
  return (
    <div className="projects-block">
      <div className="projects-name-container">
        <div className="projects-name">{projects.name}</div>
      </div>
      <div className="projects-text-container">
        <div className="projects-text">{projects.description}</div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
