import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game';
import "./stylesheets/main.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
registerServiceWorker();
