import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
{/* <script src="http://localhost:8097"></script> */}


class App extends Component {
  render() {  
    
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    
    return (
          <Provider store = {state}>
            <Routes/>
          </Provider>
    );
  }
}

export default App;