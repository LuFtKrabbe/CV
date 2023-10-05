import { CoursesData } from './coursesData';

const CoursesBlock = (course: CoursesData): JSX.Element => {
  return (
    <div className="courses-block">
      <div className="courses-name-city-years">
        <div className="courses-name">{course.name}</div>
        <div className="courses-years">
          {course.dateStart}-{course.dateFinish}
        </div>
      </div>
      <div className="courses-degree-text">
        <div className="courses-degree">{course.degree}</div>
        <div className="courses-text">{course.description}</div>
      </div>
    </div>
  );
};

export default CoursesBlock;
