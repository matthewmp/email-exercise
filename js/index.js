'use strict';
require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import EMAILS from './emails';
import App from './components/app';
import MailContainer from './components/mail-container';
import Email from './components/email';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>      
      <Route path="/:mailbox_name" component={MailContainer} />         
      <Route path="/email/:mailbox/:id" component={Email} />
    </Route>

       
  </Router>
);

document.addEventListener('DOMContentLoaded', () => 
  ReactDOM.render(routes, document.getElementById('app'))
);

