import { FC, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import imageMe from '../../assets/me.png';
import LangSwitcher from '../../language/LangSwitcher/LangSwitcher';
import { langContext } from '../../language/langContext';
import ContactsBlock from '../../modules/contacts/contacts';
import { contacts } from '../../modules/contacts/contactsData';
import CoursesBlock from '../../modules/courses/courses';
import { coursesFrontEnd, coursesAWS, coursesReact } from '../../modules/courses/coursesData';
import { universityFirst, universitySecond } from '../../modules/education/eduData';
import EduBlock from '../../modules/education/education';
import { langFirst, langSecond } from '../../modules/language/langData';
import LangBlock from '../../modules/language/language';
import ProjectsBlock from '../../modules/projects/projects';
import {
  projectsCommerce,
  projectsMinesweeper,
  projectsSelectors,
  projectsImperialDB,
} from '../../modules/projects/projectsData';
import SkillsBlock from '../../modules/skills/skills';
import { skills } from '../../modules/skills/skillsData';
import WorkBlock from '../../modules/work/work';
import { workFirst } from '../../modules/work/workData';

import { Languages } from '../../types/enums';

import { profileText } from './profileText';

const Profile: FC = (): JSX.Element => {
  const {
    state: { language },
  }: { state: { language: Languages.RU | Languages.EN } } = useContext(langContext);

  return (
    <div className="profile-wrapper">
      <div className="profile-format">
        <div className="profile-content">
          <div className="profile-column">
            <img src={imageMe} className="column-photo"></img>
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
              <div className="skills-container">{SkillsBlock(skills)}</div>
            </div>
          </div>
          <div className="profile-main">
            <div className="main-header">
              <div className="header-name">{profileText[language].name}</div>
              <div className="header-profession">{profileText[language].profession}</div>
              <div className="header-switcher">
                <LangSwitcher />
              </div>
              <div className="header-links">
                <NavLink to="https://vk.com/luftkrabbe" className="header-vk">
                  VK
                </NavLink>
                <NavLink to="https://github.com/LuFtKrabbe" className="header-github">
                  Github
                </NavLink>
                <NavLink to="/portfolio" className="header-portfolio">
                  Portfolio
                </NavLink>
                <NavLink to="/achievements" className="header-achievements">
                  Achievements
                </NavLink>
              </div>
            </div>
            <div className="main-about">
              <div className="about-header">ABOUT ME</div>
              <div className="about-text">
                <div>
                  I'm well-trained and ready-to-work specialist with a solid technical education and an analytical mind
                  that helps me to handle with assigned tasks. I work well with the documentation and clearly follow the
                  requirements outlined in the technical specifications.
                </div>
                <div>
                  I love to create projects from scratch developing an idea and paying attention to the details for user
                  comfort and good product interaction.
                </div>
                <div>
                  I'm proud of the final project where I proved myself as a team leader. My main responsibilities
                  included planning and monitoring the work progress according to the agile Scrum metodology, reviewing
                  the code and finally approving and merging pull requests. As a result, our team implemented a
                  real-life project using Commercetools - cloud-based headless commerce platform.
                </div>
              </div>
            </div>
            <div className="main-projects">
              <div className="projects-header">PROJECTS</div>
              <div className="projects-container">
                {ProjectsBlock(projectsImperialDB)}
                {ProjectsBlock(projectsCommerce)}
                {ProjectsBlock(projectsSelectors)}
                {ProjectsBlock(projectsMinesweeper)}
              </div>
            </div>
            <div className="main-courses">
              <div className="courses-header">COURSES</div>
              <div className="courses-container">
                {CoursesBlock(coursesReact)}
                {CoursesBlock(coursesAWS)}
                {CoursesBlock(coursesFrontEnd)}
              </div>
            </div>
            <div className="main-exprerience">
              <div className="exprerience-header">WORK EXPERIENCE</div>
              <div className="exprerience-container">{WorkBlock(workFirst)}</div>
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
