import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { JournalsData } from './journalsData';

const JournalsBlock = (journal: Record<Languages, JournalsData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="journal-name-article">
      <div className="journal-article">"{journal[language].article}"</div>
      <div className="journal-name">{journal[language].name}</div>
    </div>
  );
};

export default JournalsBlock;
