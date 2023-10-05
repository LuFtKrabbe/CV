import { FC } from 'react';

import ContactsBlock from '../../modules/contacts/contacts';
import { contacts } from '../../modules/contacts/contactsData';
import CoursesBlock from '../../modules/courses/courses';
import { coursesPreFrontEnd, coursesFrontEnd } from '../../modules/courses/coursesData';
import { universityFirst, universitySecond } from '../../modules/education/eduData';
import EduBlock from '../../modules/education/education';
import { langFirst, langSecond } from '../../modules/language/langData';
import LangBlock from '../../modules/language/language';
import WorkBlock from '../../modules/work/work';
import { workFirst } from '../../modules/work/workData';

const Profile: FC = (): JSX.Element => {
  return (
    <div className="profile-wrapper">
      <div className="profile-format">
        <div className="profile-content">
          <div className="profile-column">
            <div className="column-photo"></div>
            <div className="column-contacts">{ContactsBlock(contacts)}</div>
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
              <div className="exprerience-container">{WorkBlock(workFirst)}</div>
            </div>
            <div className="main-courses">
              <div className="courses-header">COURSES</div>
              <div className="courses-container">
                {CoursesBlock(coursesFrontEnd)}
                {CoursesBlock(coursesPreFrontEnd)}
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
