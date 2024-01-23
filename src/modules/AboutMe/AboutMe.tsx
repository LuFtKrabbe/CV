import { FC, useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import CoursesBlock from '../courses/courses';
import { coursesAWS, coursesFrontEnd, coursesReact } from '../courses/coursesData';
import { universityFirst, universitySecond } from '../education/eduData';
import EduBlock from '../education/education';
import ProjectsBlock from '../projects/projects';
import { projectsCommerce, projectsImperialDB, projectsMinesweeper, projectsSelectors } from '../projects/projectsData';
import WorkBlock from '../work/work';
import { workFirst } from '../work/workData';

import styles from './AboutMe.module.scss';
import { aboutMeText } from './aboutMeText';

const AboutMe: FC = (): JSX.Element => {
  const {
    state: { language },
  }: { state: { language: Languages.RU | Languages.EN } } = useContext(langContext);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.title}>{aboutMeText[language].titles.about}</div>
        <div className={styles.text}>
          <div>{aboutMeText[language].par1}</div>
          <div>{aboutMeText[language].par2}</div>
          <div>{aboutMeText[language].par3}</div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.title}>{aboutMeText[language].titles.projects}</div>
        <div className={styles.container}>
          {ProjectsBlock(projectsImperialDB)}
          {ProjectsBlock(projectsCommerce)}
          {ProjectsBlock(projectsSelectors)}
          {ProjectsBlock(projectsMinesweeper)}
        </div>
      </div>
      <div className={styles.courses}>
        <div className={styles.title}>{aboutMeText[language].titles.courses}</div>
        <div className={styles.container}>
          {CoursesBlock(coursesReact)}
          {CoursesBlock(coursesAWS)}
          {CoursesBlock(coursesFrontEnd)}
        </div>
      </div>
      <div className={styles.exprerience}>
        <div className={styles.title}>{aboutMeText[language].titles.work}</div>
        <div className={styles.container}>{WorkBlock(workFirst)}</div>
      </div>
      <div className={styles.education}>
        <div className={styles.title}>{aboutMeText[language].titles.education}</div>
        <div className={styles.container}>
          {EduBlock(universitySecond)}
          {EduBlock(universityFirst)}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
