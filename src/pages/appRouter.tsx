import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Achievements from './achievements/achievements';
import NotFound from './not_found/notFound';
import Portfolio from './portfolio/portfolio';
import Profile from './profile/profile';

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/achievements" element={<Achievements />} />
      {/* <Route path="/error" element={<h1>Error</h1>} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
