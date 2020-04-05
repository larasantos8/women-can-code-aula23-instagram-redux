import React from "react"
import Home from "./pages/home"
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/reducer'

import Routes from './routes'


 function App (){
    return (
      <Provider store = {store}>
      <Routes/>
      </Provider>
    );
  }

export default App;

