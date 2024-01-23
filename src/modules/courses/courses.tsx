import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { CoursesData } from './coursesData';

const CoursesBlock = (course: Record<Languages, CoursesData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="courses-block">
      <div className="courses-name-city-years">
        <div className="courses-name">{course[language].organization}</div>
        <div className="courses-years">
          {course[language].dateStart}-{course[language].dateFinish}
        </div>
      </div>
      <div className="courses-degree-text">
        <div className="courses-degree">{course[language].name}</div>
        <div className="courses-text">{course[language].description}</div>
      </div>
    </div>
  );
};

export default CoursesBlock;
