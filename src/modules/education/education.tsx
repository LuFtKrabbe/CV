import { useContext } from 'react';

import { langContext } from '../../language/langContext';

import { Languages } from '../../types/enums';

import { EduData } from './eduData';

const EduBlock = (university: Record<Languages, EduData>): JSX.Element => {
  const {
    state: { language },
  }: { state: { language: Languages } } = useContext(langContext);

  return (
    <div className="edu-block">
      <div className="edu-name-city-years">
        <div className="edu-name">{university[language].name}</div>
        <div className="edu-city">{university[language].city}</div>
        <div className="edu-years">
          {university[language].yearStart}-{university[language].yearFinish}
        </div>
      </div>
      <div className="edu-degree-descrition">
        <div className="edu-degree">
          {university[language].degree}
          {university[language].honor ? <div className="edu-honor">{university[language].honorText}</div> : null}
        </div>
        <div className="edu-department">{university[language].department}</div>
        <div className="edu-description">{university[language].description}</div>
      </div>
    </div>
  );
};

export default EduBlock;
