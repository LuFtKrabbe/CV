import { FC, useContext } from 'react';

import { langContext } from '../../language/langContext';

import CoursesBlock from '../courses/courses';
import { coursesAWS, coursesFrontEnd, coursesNode, coursesReact } from '../courses/coursesData';
import { universityFirst, universitySecond } from '../education/eduData';
import EduBlock from '../education/education';
import ProjectsBlock from '../projects/projects';
import { projectsCommerce, projectsMinesweeper } from '../projects/projectsData';
import WorkBlock from '../work/work';
import { workFirst } from '../work/workData';

import styles from './AboutMe.module.scss';
import { aboutMeData } from './aboutMeData';

const AboutMe: FC = (): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.title}>{aboutMeData[language].titles.about}</div>
        <div className={styles.text}>
          <div>{aboutMeData[language].par1}</div>
          <div>{aboutMeData[language].par2}</div>
          <div>{aboutMeData[language].par3}</div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>{aboutMeData[language].titles.projects}</div>
        <div className={styles.container}>
          {ProjectsBlock(projectsCommerce)}
          {ProjectsBlock(projectsMinesweeper)}
        </div>
      </div>
      <div className={styles.courses}>
        <div className={styles.title}>{aboutMeData[language].titles.courses}</div>
        <div className={styles.container}>
          {CoursesBlock(coursesNode)}
          {CoursesBlock(coursesReact)}
          {CoursesBlock(coursesAWS)}
          {CoursesBlock(coursesFrontEnd)}
        </div>
      </div>
      <div className={styles.exprerience}>
        <div className={styles.title}>{aboutMeData[language].titles.work}</div>
        <div className={styles.container}>{WorkBlock(workFirst)}</div>
      </div>
      <div className={styles.education}>
        <div className={styles.title}>{aboutMeData[language].titles.education}</div>
        <div className={styles.container}>
          {EduBlock(universitySecond)}
          {EduBlock(universityFirst)}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
