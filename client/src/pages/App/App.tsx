import React from 'react';
import LoginPage from '../Log In/LogIn';
import Footer from '../../components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' render={() => 
          <LoginPage />
        } />
        <Route path="/*" render={() => 
          <div className="error">
            <h2>404</h2>
            <h2>Nothing to See Here</h2>
          </div>
        } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
