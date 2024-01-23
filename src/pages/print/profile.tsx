import { FC } from 'react';

import AboutMe from '../../modules/AboutMe/AboutMe';
import Column from '../../modules/Column/Column';
import Header from '../../modules/Header/Header';

const Profile: FC = (): JSX.Element => {
  return (
    <div className="profile-wrapper">
      <div className="profile-format">
        <div className="profile-content">
          <div className="profile-column">
            <Column />
          </div>
          <div className="profile-main">
            <Header />
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
