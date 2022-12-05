import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import mystore from './redux/store';
ReactDOM.render(
  <Provider store={mystore}><App /></Provider>
    ,
  document.getElementById('root')
);
