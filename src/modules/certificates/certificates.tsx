import { CertificatesData } from './certificatesData';

const CertificatesBlock = (certificates: CertificatesData): JSX.Element => {
  return (
    <div className="certificates-block">
      <div className="certificates-imageContainer">
        <img className="certificates-image" src={certificates.picture}></img>
        <div className="certificates-name">{certificates.name}</div>
      </div>
    </div>
  );
};

export default CertificatesBlock;
