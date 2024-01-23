import { FC } from 'react';

import LangState from './language/LangState';
import getInitialState from './language/initialState';
import AppRouter from './pages/appRouter';
import './App.scss';

const App: FC = (): JSX.Element => {
  return (
    <LangState initialState={getInitialState()}>
      <AppRouter />;
    </LangState>
  );
};

export default App;
