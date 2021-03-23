import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/index.css';
import './assets/styles/tailwind.css'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Provider} from 'react-redux';
import {store} from './app/store'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
