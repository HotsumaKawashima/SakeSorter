import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SortPage   from '../sortPage';
import FrontPage  from '../frontPage';
import ResultPage from '../resultPage';

export default (props) => {
 return (
    <Switch>
      <Route exact path='/front'  component={FrontPage} />
      <Route exact path='/sort'   component={SortPage} />
      <Route exact path='/result' component={ResultPage} />
      <Redirect    to='/front' />
    </Switch>
  );
}
