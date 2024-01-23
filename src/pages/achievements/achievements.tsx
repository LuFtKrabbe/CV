import { FC, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import imageAwsBadgeCloudPract from '../../assets/certificates/aws-badge-cloud-practitioner.png';
import imageAwsBadgeWellArch from '../../assets/certificates/aws-badge-well-architect.png';
import imageEnglishBadge from '../../assets/certificates/english-min.png';
import { langContext } from '../../language/langContext';
import CertificatesBlock from '../../modules/certificates/certificates';
import {
  certificatesFrontEndPreschool,
  certificatesTypeScript,
  certificatesFrontEnd,
  certificatesEnglish,
  certificatesAWS,
} from '../../modules/certificates/certificatesData';
import {
  coursesFrontEnd,
  coursesTypeScript,
  coursesPreFrontEnd,
  coursesCommandLine,
  coursesGit,
  coursesTriada,
  coursesAWS,
  coursesReact,
} from '../../modules/courses/coursesData';
import JournalsBlock from '../../modules/journals/journals';
import {
  journalsArchitecture,
  journalsFoundation,
  journalsTransportation2019,
  journalsTransportation2021,
} from '../../modules/journals/journalsData';

import { achievementsData } from './achievementsData';

const Achievements: FC = (): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="achievements-wrapper">
      <div className="achievements-format">
        <div className="achievements-content">
          <div className="achievements-content-header">
            <div className="header-name">{achievementsData[language].title}</div>
            <NavLink to="/profile" className="header-back">
              {achievementsData[language].back}
            </NavLink>
          </div>
          <div className="achievements-content-main">
            <div className="achievements-science-header">{achievementsData[language].science.title}</div>
            <div className="achievements-science-text">
              <div>{achievementsData[language].science.description.par1}</div>
              <div>{achievementsData[language].science.description.par2}</div>
              <div className="achievements-science-articles">
                <div className="articles-list">
                  {JournalsBlock(journalsTransportation2019)}
                  {JournalsBlock(journalsArchitecture)}
                  {JournalsBlock(journalsTransportation2021)}
                  {JournalsBlock(journalsFoundation)}
                </div>
                <div className="articles-journals">
                  <img className="articles-image" src={journalsTransportation2019[language].picture}></img>
                  <img className="articles-image" src={journalsArchitecture[language].picture}></img>
                </div>
              </div>
            </div>
            <div className="achievements-courses-header">{achievementsData[language].activities.titles}</div>
            <div className="achievements-courses-container">
              <div className="achievements-courses-text">
                <div className="courses-name">{achievementsData[language].activities.completed}:</div>
                <li>
                  <span>{coursesReact[language].organization}:</span> {coursesReact[language].name};
                </li>
                <li>
                  <span>{coursesAWS[language].organization}:</span> {coursesAWS[language].name};
                </li>
                <li>
                  <span>{coursesFrontEnd[language].organization}:</span> {coursesFrontEnd[language].name};
                </li>
                <li>
                  <span>{coursesTypeScript[language].organization}:</span> {coursesTypeScript[language].name};
                </li>
                <li>
                  <span>{coursesPreFrontEnd[language].organization}:</span> {coursesPreFrontEnd[language].name};
                </li>
                <li>
                  <span>{coursesCommandLine[language].organization}:</span> {coursesCommandLine[language].name};
                </li>
                <li>
                  <span>{coursesGit[language].organization}:</span> {coursesGit[language].name}.
                </li>
                <li>
                  <span>{coursesTriada[language].organization}:</span> {coursesTriada[language].name}.
                </li>
              </div>
              <div className="achievements-activities">
                <div className="activities-name">{achievementsData[language].activities.codewars}:</div>
                <img src="https://www.codewars.com/users/LuFtKrabbe/badges/large" className="activities-codewars"></img>
                <div className="activities-name">{achievementsData[language].activities.english}:</div>
                <div>{achievementsData[language].activities.englishDescription}</div>
                <img src={imageEnglishBadge} className="activities-english"></img>
                <div className="activities-name">{achievementsData[language].activities.awsBadges}:</div>
                <div className="activities-aws">
                  <img src={imageAwsBadgeWellArch} className="activities-aws-badge"></img>
                  <img src={imageAwsBadgeCloudPract} className="activities-aws-badge"></img>
                </div>
              </div>
            </div>
            <div className="achievements-certificate-header">{achievementsData[language].titles.certificates}</div>
            <div className="achievements-certificate-main">
              {CertificatesBlock(certificatesFrontEndPreschool)}
              {CertificatesBlock(certificatesFrontEnd)}
              {CertificatesBlock(certificatesAWS)}
            </div>
            <div className="achievements-certificate-main">
              {CertificatesBlock(certificatesTypeScript)}
              {CertificatesBlock(certificatesEnglish)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
