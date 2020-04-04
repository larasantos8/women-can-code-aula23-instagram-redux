import React, { Component } from "react";
import Home from "./pages/home";
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
      <Home/>
      </Provider>
    );
  }
}

export default App;

