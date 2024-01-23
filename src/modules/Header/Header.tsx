import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import LangSwitcher from '../../language/LangSwitcher/LangSwitcher';
import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import styles from './Header.module.scss';
import { headerData } from './headerData';

const Header: FC = (): JSX.Element => {
  const {
    state: { language },
  }: { state: { language: Languages.RU | Languages.EN } } = useContext(langContext);

  return (
    <div className={styles.header}>
      <div className={styles.name}>{headerData[language].name}</div>
      <div className={styles.profession}>{headerData[language].profession}</div>
      <div className={styles.switcher}>
        <LangSwitcher />
      </div>
      <div className={styles.links}>
        <NavLink to="https://vk.com/luftkrabbe" className={styles.vk}>
          VK
        </NavLink>
        <NavLink to="https://github.com/LuFtKrabbe" className={styles.github}>
          Github
        </NavLink>
        <NavLink to="/portfolio" className={styles.portfolio}>
          {headerData[language].links.portfolio}
        </NavLink>
        <NavLink to="/achievements" className={styles.achievements}>
          {headerData[language].links.achievements}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
