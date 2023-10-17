import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import CertificatesBlock from '../../modules/certificates/certificates';
import {
  certificatesFrontEndPreschool,
  certificatesTypeScript,
  certificatesFrontEnd,
  certificatesEnglish,
} from '../../modules/certificates/certificatesData';
import {
  coursesFrontEnd,
  coursesTypeScript,
  coursesPreFrontEnd,
  coursesCommandLine,
  coursesGit,
  coursesTriada,
} from '../../modules/courses/coursesData';
import JournalsBlock from '../../modules/journals/journals';
import {
  journalsArchitecture,
  journalsFoundation,
  journalsTransportation2019,
  journalsTransportation2021,
} from '../../modules/journals/journalsData';
import imageEnglishBadge from '../../assets/certificates/english-min.png';

const Achievements: FC = (): JSX.Element => {
  return (
    <div className="achievements-wrapper">
      <div className="achievements-format">
        <div className="achievements-content">
          <div className="achievements-content-header">
            <div className="header-name">Achievements</div>
            <NavLink to="/profile" className="header-back">
              ← Back
            </NavLink>
          </div>
          <div className="achievements-content-main">
            <div className="achievements-science-header">SCIENCE</div>
            <div className="achievements-science-text">
              <div>
                Since the end of my bachelor degree program my scientific advisor and I have been publishing articles
                dedicated to transportaion systems and overhead power lines.
              </div>
              <div>
                I took part in 12 scientific conferences and as author and co-author I have written 11 articles with
                publications in VAK and Scopus levels.
              </div>
              <div className="achievements-science-articles">
                <div className="articles-list">
                  {JournalsBlock(journalsTransportation2019)}
                  {JournalsBlock(journalsArchitecture)}
                  {JournalsBlock(journalsTransportation2021)}
                  {JournalsBlock(journalsFoundation)}
                </div>
                <div className="articles-journals">
                  <img className="articles-image" src={journalsTransportation2019.picture}></img>
                  <img className="articles-image" src={journalsArchitecture.picture}></img>
                </div>
              </div>
            </div>
            <div className="achievements-courses-header">COURSES & ACTIVITIES</div>
            <div className="achievements-courses-container">
              <div className="achievements-courses-text">
                <div className="courses-name">Completed courses:</div>
                <li>
                  <span>{coursesFrontEnd.organization}:</span> {coursesFrontEnd.name};
                </li>
                <li>
                  <span>{coursesTypeScript.organization}:</span> {coursesTypeScript.name};
                </li>
                <li>
                  <span>{coursesPreFrontEnd.organization}:</span> {coursesPreFrontEnd.name};
                </li>
                <li>
                  <span>{coursesCommandLine.organization}:</span> {coursesCommandLine.name};
                </li>
                <li>
                  <span>{coursesGit.organization}:</span> {coursesGit.name}.
                </li>
                <li>
                  <span>{coursesTriada.organization}:</span> {coursesTriada.name}.
                </li>
              </div>
              <div className="achievements-activities">
                <div className="activities-name">Codewars:</div>
                <img src="https://www.codewars.com/users/LuFtKrabbe/badges/large" className="activities-codewars"></img>
                <div className="activities-name">English:</div>
                <div>In reading and listening according to CEFR</div>
                <img src={imageEnglishBadge} className="activities-english"></img>
              </div>
            </div>
            <div className="achievements-certificate-header">CERTIFICATES</div>
            <div className="achievements-certificate-main">
              {CertificatesBlock(certificatesFrontEndPreschool)}
              {CertificatesBlock(certificatesTypeScript)}
              {CertificatesBlock(certificatesEnglish)}
              {CertificatesBlock(certificatesFrontEnd)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
