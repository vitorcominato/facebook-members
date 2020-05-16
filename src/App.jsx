import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';
import { connect } from 'react-redux';
import './App.scss';
import './assets/styles/utils.scss';
import Home from './pages/Home/Home';

import PrivateRoute from './routes/PrivateRoute';

const App = ({ user }) => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Analytics id="UA-142347341-1" debug>
      <div className="App">
        <Route user={user} path="/unloggedRoute" exact component={Home} />
        <PrivateRoute user={user} path="/loggedRoute" exact component={Home} />
      </div>
    </Analytics>
  </HashRouter>
);


export default connect(state => ({
  user: state.user,
}))(App);
