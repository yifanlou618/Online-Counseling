import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import FirstPage from './components/FirstPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ResetPage from './components/ResetPage';
import FeaturesPage from './components/FeaturesPage';
import CounselorPage from './components/CounselorPage';
import InfoPage from './components/InfoPage';
import ContactPage from './components/ContactPage';
import reportWebVitals from './reportWebVitals';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={FirstPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/reset" component={ResetPage} />
      <Route exact path="/features" component={FeaturesPage} />
      <Route exact path="/counselor" component={CounselorPage} />
      <Route exact path="/info" component={InfoPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
