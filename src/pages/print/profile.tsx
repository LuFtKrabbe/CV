import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import ContactsBlock from '../../modules/contacts/contacts';
import { contacts } from '../../modules/contacts/contactsData';
import CoursesBlock from '../../modules/courses/courses';
import { coursesPreFrontEnd, coursesFrontEnd } from '../../modules/courses/coursesData';
import { universityFirst, universitySecond } from '../../modules/education/eduData';
import EduBlock from '../../modules/education/education';
import { langFirst, langSecond } from '../../modules/language/langData';
import LangBlock from '../../modules/language/language';
import ProjectsBlock from '../../modules/projects/projects';
import {
  projectsCommerce,
  projectsKeyboard,
  projectsMinesweeper,
  projectsSelectors,
  projectsAsyncRace,
} from '../../modules/projects/projectsData';
import SkillsBlock from '../../modules/skills/skills';
import { skills } from '../../modules/skills/skillsData';
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
              <div className="skills-container">{SkillsBlock(skills)}</div>
            </div>
          </div>
          <div className="profile-main">
            <div className="main-header">
              <div className="header-name">Alexander Filimonov</div>
              <div className="header-profession">Frontend-developer</div>
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
                <NavLink to="/portfolio" className="header-achievements">
                  Achievements
                </NavLink>
              </div>
            </div>
            <div className="main-about">
              <div className="about-header">ABOUT ME</div>
              <div className="about-text">
                <div>Looking for a job as a Junior front-end developer.</div>
                <div>
                  Well trained and ready to work specialist. I have a good technical education and an analytical mind
                  which help me to handle with assigned tasks. I can work well with the documentation and clearly follow
                  the requirements that are defined in the technical specifications.
                </div>
                <div>
                  I love to create projects from scratch, developing an idea and paying attention to the details for
                  users' comfort and good interaction.
                </div>
                <div>
                  I really proud of the final project where I could show myself as a team leader. My main
                  responsibilities were to plan and control work progress according to the agile Scrum metodology, make
                  code reviews and finally approve and merge pull requests. As a result our team made a real project
                  using Commercetools - cloud-based headless commerce platform that provides APIs.
                </div>
                <div>You can see all of my projects in my portfolio.</div>
              </div>
            </div>
            <div className="main-projects">
              <div className="projects-header">PROJECTS</div>
              <div className="projects-container">
                {ProjectsBlock(projectsCommerce)}
                {ProjectsBlock(projectsAsyncRace)}
                {ProjectsBlock(projectsSelectors)}
                {ProjectsBlock(projectsMinesweeper)}
                {ProjectsBlock(projectsKeyboard)}
              </div>
            </div>
            <div className="main-courses">
              <div className="courses-header">COURSES</div>
              <div className="courses-container">
                {CoursesBlock(coursesFrontEnd)}
                {CoursesBlock(coursesPreFrontEnd)}
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
