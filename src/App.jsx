import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';
import { connect } from 'react-redux';
import './App.scss';
import './assets/styles/utils.scss';
import Home from './pages/Home/Home';


const App = ({ user }) => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Analytics id="UA-142347341-1" debug>
      <div className="App">
        <Route user={user} path="/" exact component={Home} />
      </div>
    </Analytics>
  </HashRouter>
);


export default connect(state => ({
  user: state.user,
}))(App);
