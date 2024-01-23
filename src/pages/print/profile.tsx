import { FC } from 'react';

import imageMe from '../../assets/me.png';
import AboutMe from '../../modules/AboutMe/AboutMe';
import Header from '../../modules/Header/Header';
import ContactsBlock from '../../modules/contacts/contacts';
import { contacts } from '../../modules/contacts/contactsData';
import { langFirst, langSecond } from '../../modules/language/langData';
import LangBlock from '../../modules/language/language';
import SkillsBlock from '../../modules/skills/skills';
import { skills } from '../../modules/skills/skillsData';

const Profile: FC = (): JSX.Element => {
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
            <Header />
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
