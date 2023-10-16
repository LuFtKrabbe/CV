import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Achievements from './achievements/achievements';
import Portfolio from './portfolio/portfolio';
import Profile from './print/profile';

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/achievements" element={<Achievements />} />
      {/*<Route path="/error" element={<NotFound />} />*/}
      {/*<Route path="*" element={<Navigate to="/error" />} />*/}
    </Routes>
  );
};

export default AppRouter;
