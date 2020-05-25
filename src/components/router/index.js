import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SortPage from '../sortPage';

export default (props) => {
 return (
    <Switch>
      <Route exact path='/sort' component={SortPage} />
      <Redirect    to='/sort' />
    </Switch>
  );
}
