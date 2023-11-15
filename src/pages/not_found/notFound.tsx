import { FC } from 'react';

import { NavLink } from 'react-router-dom';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-format">
        <div className="not-found-content">
          <div className="not-found-content-header">
            <NavLink to="/profile" className="header-back">
              ← Go to Profile
            </NavLink>
          </div>
          <div className="not-found-content-main">404: Not found</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
