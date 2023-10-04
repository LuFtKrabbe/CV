import { EduData } from './eduData';

const EduBlock = (university: EduData): JSX.Element => {
  return (
    <div className="edu-container">
      <div className="edu-name-city-years">
        <div className="edu-name">{ university.name }</div>
        <div className="edu-city">{ university.city }</div>
        <div className="edu-years">{ university.yearStart }-{ university.yearFinish }</div>
      </div>
      <div className="edu-degree-text">
        <div className="edu-degree">{ university.degree }</div>
        <div className="edu-text">{ university.description }</div>
      </div>
    </div>
  );
};

export default EduBlock;
