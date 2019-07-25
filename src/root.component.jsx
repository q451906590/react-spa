import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ComponentA from './Components/ComponentA/ComponentA.jsx'
import ComponentB from './Components/ComponentB/ComponentB.jsx'

class Home extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/home/ComponentA"  render={()=> <ComponentA />} ></Route>
          <Route exact={true} path="/home/ComponentB" render={()=> <ComponentB />}></Route>
          <Route path='/home' render={()=> <ComponentA />}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Home;