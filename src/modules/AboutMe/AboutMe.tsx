import { FC, useContext } from 'react';

import { langContext } from '../../language/langContext';

import { Languages } from '../../types/enums';
import { universityFirst, universitySecond } from '../education/eduData';
import EduBlock from '../education/education';
import WorkBlock from '../work/work';
import { workSecond, workThird } from '../work/workData';

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
          <div style={language === Languages.RU ? { lineHeight: '1.25rem' } : {}}>{aboutMeData[language].par1}</div>
          <div style={language === Languages.RU ? { lineHeight: '1.25rem' } : {}}>{aboutMeData[language].par2}</div>
          <div style={language === Languages.RU ? { lineHeight: '1.25rem' } : {}}>{aboutMeData[language].par3}</div>
          <div style={language === Languages.RU ? { lineHeight: '1.25rem' } : {}}>{aboutMeData[language].par4}</div>
        </div>
      </div>
      {/*   
      <div className={styles.projects}>
        <div className={styles.title}>{aboutMeData[language].titles.projects}</div>
        <div className={styles.container}>
          {ProjectsBlock(projectsGraphiQL)}
          {ProjectsBlock(projectsCommerce)}
          {ProjectsBlock(projectsMinesweeper)}
        </div>
      </div> 
      */}
      <div className={styles.exprerience}>
        <div className={styles.title}>{aboutMeData[language].titles.work}</div>
        <div className={styles.container}>{WorkBlock(workThird)}</div>
        <div className={styles.container}>{WorkBlock(workSecond)}</div>
      </div>
      {/*
      <div className={styles.courses}>
        <div className={styles.title}>{aboutMeData[language].titles.courses}</div>
        <div className={styles.container}>
          {CoursesBlock(coursesReact)}
          {CoursesBlock(coursesAWS)}
          {CoursesBlock(coursesFrontEnd)}
        </div>
      </div>
      */}
      <div className={styles.education}>
        <div className={styles.title}>{aboutMeData[language].titles.education}</div>
        <div className={styles.container}>
          {EduBlock(universitySecond)}
          {/* {EduBlock(universityFirst)} */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
