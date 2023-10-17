import { EduData } from './eduData';

const EduBlock = (university: EduData): JSX.Element => {
  return (
    <div className="edu-block">
      <div className="edu-name-city-years">
        <div className="edu-name">{university.name}</div>
        <div className="edu-city">{university.city}</div>
        <div className="edu-years">
          {university.yearStart}-{university.yearFinish}
        </div>
      </div>
      <div className="edu-degree-descrition">
        <div className="edu-degree">
          {university.degree}
          {university.honor ? <div className="edu-honor">with honor</div> : null}
        </div>
        <div className="edu-department">Department: {university.department}</div>
        <div className="edu-description">{university.description}</div>
      </div>
    </div>
  );
};

export default EduBlock;
