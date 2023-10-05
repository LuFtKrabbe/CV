import { LangData } from './langData';

const LangBlock = (lang: LangData): JSX.Element => {
  return (
    <div className="lang-block">
      <div className="lang-name-lvl">
        <div className="lang-name">{lang.name}</div>
        <div className="lang-lvl">{lang.lvl}</div>
      </div>
      <div className="lang-graph">
        <div className="lang-degree">
          <div className="lang-fullness" style={{ width: lang.percent }}></div>
        </div>
      </div>
    </div>
  );
};

export default LangBlock;
