import { useContext, useState } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import PopUp from '../PopUp/PopUp';

import { CertificatesData } from './certificatesData';

const CertificatesBlock = (certificates: Record<Languages, CertificatesData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenFalseCb = (arg = false): void => setIsOpen(arg);

  return (
    <div className="certificates-block" onClick={() => setIsOpen(!isOpen)}>
      <div className="certificates-imageContainer">
        <img className="certificates-image" src={certificates[language].picture}></img>
        <div className="certificates-name">{certificates[language].name}</div>
        {isOpen ? <PopUp imgPath={certificates[language].picture} setIsOpenFalseCb={setIsOpenFalseCb} /> : <div />}
      </div>
    </div>
  );
};

export default CertificatesBlock;
