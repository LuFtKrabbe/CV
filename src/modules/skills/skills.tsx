import { useContext } from 'react';

import { langContext } from '../../language/langContext';

import { SkillsData, skillsText } from './skillsData';

const SkillsBlock = (skills: SkillsData): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <>
      <div className="skills-tag">
        <div className="tag-header">{skillsText[language].technologies}</div>
        <div className="tag-container">
          {skills.technologies.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">{skillsText[language].libraries}</div>
        <div className="tag-container">
          {skills.libraries.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">{skillsText[language].basics}</div>
        <div className="tag-container">
          {skills.basics.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">{skillsText[language].programs}</div>
        <div className="tag-container">
          {skills.programs.map((skill, i) => (
            <div className="tag-list" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-tag">
        <div className="tag-header">{skillsText[language].systems}</div>
        <div className="tag-container">
          {skills.systems.map((skill, i) => (
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
