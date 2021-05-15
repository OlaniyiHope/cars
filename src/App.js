import React from 'react'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home'

import Header from './components/header'

import About from './pages/about'
import Terms from './pages/terms'
import SignInForm from './components/auth/sign-in-form'
import SinglePage from './pages/single-page'


export class App extends React.Component {
 
    render (){

   return (
  
          <Router>
<Switch>
  


    <Route path='/' exact component={Home} />
    <Route path='/header' exact component={Header} />
    <Route path='/about' exact component={About} />
    <Route path='/sign-in-form' exact component={SignInForm} />
    <Route path='/single-page' exact component={SinglePage} />
    
    <Route path='/terms' exact component={Terms} />
  
   
</Switch>
</Router>
 )
 
}
}
export default App