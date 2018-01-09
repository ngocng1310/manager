import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // is a middleware to redux
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDV6Fma9KYQxgspnvsMgbkToEgRyCS-5BU',
      authDomain: 'manager-a6bcf.firebaseapp.com',
      databaseURL: 'https://manager-a6bcf.firebaseio.com',
      projectId: 'manager-a6bcf',
      storageBucket: 'manager-a6bcf.appspot.com',
      messagingSenderId: '125891176226'
    };

    firebase.initializeApp(config);
  }

  render() {
    // second param {} is initial states
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (

      <Provider store={store}>
        <LoginForm />
    </Provider>
    );
  }
}

export default App;
