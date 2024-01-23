import imageAWS from '../../assets/certificates/aws.png';
import imageEnglish from '../../assets/certificates/english.png';
import imageFrontEndPreSchool from '../../assets/certificates/js-fe-preschool.png';
import imageFrontEnd from '../../assets/certificates/js-fe.png';
import imageTypeScript from '../../assets/certificates/ms-typescript.png';
import imageReact from '../../assets/certificates/react.png';

import { Languages } from '../../types/enums';

export type CertificatesData = {
  name: string;
  picture: string;
};

export const certificatesFrontEndPreschool: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'JavaScript/Front-end (Pre-School)',
    picture: imageFrontEndPreSchool,
  },
  [Languages.EN]: {
    name: 'JavaScript/Front-end (Pre-School)',
    picture: imageFrontEndPreSchool,
  },
};

export const certificatesTypeScript: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'Построение JavaScript приложений с TypeScript',
    picture: imageTypeScript,
  },
  [Languages.EN]: {
    name: 'Build JavaScript applications using TypeScript',
    picture: imageTypeScript,
  },
};

export const certificatesFrontEnd: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'JavaScript/Front-end',
    picture: imageFrontEnd,
  },
  [Languages.EN]: {
    name: 'JavaScript/Front-end',
    picture: imageFrontEnd,
  },
};

export const certificatesEnglish: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'Уровень английского EF SET в соответствии с CEFR',
    picture: imageEnglish,
  },
  [Languages.EN]: {
    name: 'English level on the EF SET score scale according to CEFR',
    picture: imageEnglish,
  },
};

export const certificatesAWS: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'AWS Основы',
    picture: imageAWS,
  },
  [Languages.EN]: {
    name: 'AWS Fundamentals',
    picture: imageAWS,
  },
};

export const certificatesReact: Record<Languages, CertificatesData> = {
  [Languages.RU]: {
    name: 'React',
    picture: imageReact,
  },
  [Languages.EN]: {
    name: 'React',
    picture: imageReact,
  },
};
