import { Languages } from '../../types/enums';

export type ContactsData = {
  tel: string;
  email: string;
  location: string;
};

export const contacts: Record<Languages, ContactsData> = {
  [Languages.RU]: {
    tel: '8 (921) 986-20-53',
    email: 'A.S.Filimonov.Job@yandex.ru',
    location: 'Санкт-Петербург',
  },
  [Languages.EN]: {
    tel: '8 (921) 986-20-53',
    email: 'A.S.Filimonov.Job@yandex.ru',
    location: 'Saint Petersburg',
  },
};
