import React from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/Home';

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} component={Home} />
    </React.Fragment>
  );
}

export default App;
