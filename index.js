import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import crudReducer from './reducers/crudReducer';

const store = createStore(crudReducer);

ReactDOM.render( 
  <Provider store={store}> <MainComponent /> </Provider>, document.querySelector('#root')
)


