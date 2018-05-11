import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import {Router, Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
