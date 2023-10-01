import { FC } from 'react';

const Profile: FC = (): JSX.Element => {
  return (
    <>
      <div className='profile-wrapper'>
        <div className='profile-content'>
          <div className='profile-column'>
            <div className='column-photo'></div>
            <div className='column-contacts'></div>
          </div>
          <div className='profile-main'>
            <div className='main-name-and-prof'>
              <div className='main-name'>Alexander Filimonov</div>
              <div className='main-profession'>Frontend-developer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
