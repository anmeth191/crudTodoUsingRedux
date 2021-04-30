
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent'; //import the main Component where the other components will be rendered
import { Provider } from 'react-redux';// import rhe provider from redux to send as prop the reducer
import { createStore } from 'redux'; //createStore method 
import crudReducer from './reducers/crudReducer';//this is my storage , where the data will be managed and rendered 
import Style from './Style.scss';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
const store = createStore(crudReducer); //store is a const type createStore where i pass my reducer as param


ReactDOM.render( 
  <Provider store={store}> <MainComponent /> </Provider>, document.querySelector('#root') //provide the store props with the value of my reducer to the maincomponent
)


