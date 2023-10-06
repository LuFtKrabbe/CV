import { SkillsData, skills } from './skillsData';

const SkillsBlock = (skills: SkillsData): JSX.Element => {
  return (
    <>
      <div className="skills-tag">
        <div className="tag-header">Technologies:</div>
        <div className="tag-container">
          {skills.main.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">Libraries:</div>
        <div className="tag-container">
          {skills.libraries.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">Basics:</div>
        <div className="tag-container">
          {skills.basics.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">Programs:</div>
        <div className="tag-container">
          {skills.programs.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">OS:</div>
        <div className="tag-container">
          {skills.os.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsBlock;
