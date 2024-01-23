import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { CertificatesData } from './certificatesData';

const CertificatesBlock = (certificates: Record<Languages, CertificatesData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <div className="certificates-block">
      <div className="certificates-imageContainer">
        <img className="certificates-image" src={certificates[language].picture}></img>
        <div className="certificates-name">{certificates[language].name}</div>
      </div>
    </div>
  );
};

export default CertificatesBlock;
