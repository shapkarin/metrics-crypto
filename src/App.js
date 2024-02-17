import React from 'react';
import { Provider } from 'mobx-react';
import Router from './router';
import stores from './stores';

const App = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...stores}>
    <Router />
  </Provider>
);

export default App;
