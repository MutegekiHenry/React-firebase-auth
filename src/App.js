import React from 'react';
import { HashRouter, Switch, Route , Redirect } from 'react-router-dom';
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
import config from './cofig/firebaseConfig'
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Home from './pages/Home/Home';


const firebaseApp = firebase.initializeApp(config);


const ProtectedRoute = ({ component: Component, ...rest }) => {
  if(localStorage.getItem("isAuth")==='true'){
    return (
        <Route {...rest} render={
          props => <Component {...rest} {...props} />
        } />
      )
  }else {
      return (<Redirect to = '/' />)
  }
}


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute exact path = "/home" component = {Home}/>
      </Switch>
    </HashRouter>
  );
}

// export default App;

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
  // providers,
  firebaseAppAuth,
})(App);