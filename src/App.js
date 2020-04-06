import React from "react"
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/reducer'

import Routes from './routes'
import { BrowserRouter } from "react-router-dom"


 function App (){
    return (
      <Provider store = {store}>
      <Routes/>
      </Provider>
    );
  }

export default App;

