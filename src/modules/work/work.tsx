import { WorkData } from './workData';

const WorkBlock = (work: WorkData): JSX.Element => {
  return (
    <div className="work-block">
      <div className="work-name-city-years">
        <div className="work-name">{work.name}</div>
        <div className="work-city">{work.city}</div>
        <div className="work-years">
          {work.yearStart}-{work.yearFinish}
        </div>
      </div>
      <div className="work-degree-text">
        <div className="work-degree">{work.position}</div>
        <div className="work-text">{work.description}</div>
      </div>
    </div>
  );
};

export default WorkBlock;
