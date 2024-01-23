import { useContext, useEffect, useState } from 'react';

import { Languages } from '../../types/enums';
import { langContext } from '../langContext';

import styles from './LangSwitcher.module.scss';
import '../../styles/colors.scss';

const LangSwitcher = () => {
  const {
    state: { language },
    dispatch: { setLanguage },
  } = useContext(langContext);

  const [isRus, setIsRus] = useState(language === Languages.RU ? true : false);

  useEffect(() => {
    setLanguage(isRus ? Languages.RU : Languages.EN);
  }, [isRus]);

  return (
    <div
      className={styles.btnSwitcher}
      onClick={() => {
        setIsRus(!isRus);
      }}
    >
      {isRus ? 'РУС' : 'EN'}
    </div>
  );
};

export default LangSwitcher;
