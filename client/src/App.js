import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Jokes from './components/Jokes';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path='/login' render={(props) => <Login {...props} /> } />
        <PrivateRoute path='/jokes' component={Jokes} />
      </Switch>
    </div>
  );
}

export default withRouter(App);