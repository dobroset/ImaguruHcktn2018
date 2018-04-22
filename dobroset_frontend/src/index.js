import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import Routes from './routes'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
