import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import configureStore from './store/configureStore';
import initState from './store/initState';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './styles/main.css';

const store = configureStore(initState);

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
    , document.getElementById('app')
);