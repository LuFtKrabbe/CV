import { FC, useContext } from 'react';

import imageMe from '../../assets/me.png';
import { langContext } from '../../language/langContext';

import ContactsBlock from '../contacts/contacts';
import { contacts } from '../contacts/contactsData';
import { langFirst, langSecond } from '../language/langData';
import LangBlock from '../language/language';

import SkillsBlock from '../skills/skills';
import { skills } from '../skills/skillsData';

import styles from './Column.module.scss';
import { columnData } from './columnData';

const Column: FC = (): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <>
      <img src={imageMe} className={styles.photo} alt="Profile photo" title="Profile photo"></img>
      <div className={styles.contacts}>{ContactsBlock(contacts)}</div>
      <div className={styles.languages}>
        <div className={styles.title}>{columnData[language].titles.languages}</div>
        <div className={styles.container}>
          {LangBlock(langFirst)}
          {LangBlock(langSecond)}
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.title}>{columnData[language].titles.skills}</div>
        <div className={styles.container}>{SkillsBlock(skills)}</div>
      </div>
    </>
  );
};

export default Column;
