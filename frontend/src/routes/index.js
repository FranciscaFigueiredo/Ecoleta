import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
//import CreatePoint from '../src/pages/

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
    </Switch>
  );
};

export default Routes;
