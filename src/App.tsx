import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import { AuthProvider } from './context/auth';

import { createBrowserHistory } from 'history'

export const history = createBrowserHistory({ window })

function App() {
  return (
    <HistoryRouter history={history}>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </HistoryRouter>
  );
}

export default App;
