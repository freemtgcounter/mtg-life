import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import "./stylesheets/main.scss";
import Game from './components/Game';
//import PlayerPage from './components/PlayerPage'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
registerServiceWorker();
