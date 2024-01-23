import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { WorkData } from './workData';

const WorkBlock = (work: Record<Languages, WorkData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="work-block">
      <div className="work-name-city-years">
        <div className="work-name">{work[language].name}</div>
        <div className="work-city">{work[language].city}</div>
        <div className="work-years">
          {work[language].yearStart}-{work[language].yearFinish}
        </div>
      </div>
      <div className="work-degree-text">
        <div className="work-degree">{work[language].position}</div>
        <div className="work-text">{work[language].description}</div>
      </div>
    </div>
  );
};

export default WorkBlock;
