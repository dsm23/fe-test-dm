import React, { ChangeEvent, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Basket from './components/Basket';
import SVG404 from './components/SVG404';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/basket" />
      </Route>
      <Route path="/basket">
        <Basket />
      </Route>
      <Route path="/checkout">
        <div>checkout</div>
      </Route>
      <Route>
        <div className="h-screen w-screen">
          <SVG404 className="h-full w-full" />
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
