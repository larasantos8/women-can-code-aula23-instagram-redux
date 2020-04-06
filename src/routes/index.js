import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/home'
import Perfil from '../pages/perfil'



export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/perfil" exact component={Perfil} />
    </Switch>
    </BrowserRouter>
  )
}
