import { JournalsData } from './journalsData';

const JournalsBlock = (journal: JournalsData): JSX.Element => {
  return (
    <div className="journal-name-article">
      <div className="journal-article">"{journal.article}"</div>
      <div className="journal-name">{journal.name}</div>
    </div>
  );
};

export default JournalsBlock;
