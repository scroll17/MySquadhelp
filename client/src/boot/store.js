import React, { Component } from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';


const STORE = config();

function Store(){
  return (
      <Provider store={ STORE }>
        <App />
      </Provider>
  );
}

export const store = STORE;
export default Store;


/*
class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: config(),
    };
  }

  render() {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Store;
*/
