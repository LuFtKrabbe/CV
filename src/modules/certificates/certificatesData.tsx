import imageFrontEndPreSchool from '../../assets/certificates/js-fe-preschool.png';
import imageFrontEnd from '../../assets/certificates/js-fe.png';
import imageTypeScript from '../../assets/certificates/ms-typescript.png';

export type CertificatesData = {
  name: string;
  picture: string;
};

export const certificatesFrontEndPreschool: CertificatesData = {
  name: 'JavaScript/Front-end (Pre-School)',
  picture: imageFrontEndPreSchool,
};

export const certificatesTypeScript: CertificatesData = {
  name: 'Build JavaScript applications using TypeScript',
  picture: imageTypeScript,
};

export const certificatesFrontEnd: CertificatesData = {
  name: 'JavaScript/Front-end',
  picture: imageFrontEnd,
};
