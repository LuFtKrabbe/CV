import { FC } from 'react';

import EduBlock from '../../modules/education/education';
import { universityFirst, universitySecond } from '../../modules/education/eduData';
import WorkBlock from '../../modules/work/work';
import { workFirst } from '../../modules/work/workData';
import LangBlock from '../../modules/language/language';
import { langFirst, langSecond } from '../../modules/language/langData';

const Profile: FC = (): JSX.Element => {
  return (
    <div className="profile-wrapper">
      <div className="profile-format">
        <div className="profile-content">
          <div className="profile-column">
            <div className="column-photo"></div>
            <div className="column-contacts">
              <div className="contacts-telephone">Phone</div>
              <div className="contacts-mail">Mail</div>
              <div className="contacts-location">Location</div>
            </div>
            <div className="column-languages">
              <div className="languages-header">LANGUAGES</div>
              <div className="languages-container">
                {LangBlock(langFirst)}
                {LangBlock(langSecond)}
              </div>
            </div>
            <div className="column-skills">
              <div className="skills-header">SKILLS</div>
              <div className="skills-text">HTML, CSS, JS</div>
            </div>
          </div>
          <div className="profile-main">
            <div className="main-header">
              <div className="header-name">Alexander Filimonov</div>
              <div className="header-profession">Frontend-developer</div>
            </div>
            <div className="main-about">
              <div className="about-header">ABOUT ME</div>
              <div className="about-text">I was born since living Dinosaurs</div>
            </div>
            <div className="main-exprerience">
              <div className="exprerience-header">WORK EXPERIENCE</div>
              <div className="exprerience-container">
                {WorkBlock(workFirst)}
              </div>
            </div>
            <div className="main-education">
              <div className="education-header">EDUCATION</div>
              <div className="education-container">
                {EduBlock(universitySecond)}
                {EduBlock(universityFirst)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
