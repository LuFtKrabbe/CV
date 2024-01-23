import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { LangData } from './langData';

const LangBlock = (lang: Record<Languages, LangData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="lang-block">
      <div className="lang-name-lvl">
        <div className="lang-name">{lang[language].name}</div>
        <div className="lang-lvl">{lang[language].lvl}</div>
      </div>
      <div className="lang-graph">
        <div className="lang-degree">
          <div className="lang-fullness" style={{ width: lang[language].percent }}></div>
        </div>
      </div>
    </div>
  );
};

export default LangBlock;
