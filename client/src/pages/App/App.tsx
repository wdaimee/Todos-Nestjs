import React, { useState, useEffect } from 'react';
import LoginPage from '../Log In/LogIn';
import SignUpPage from '../Sign Up/SignUp';
import Footer from '../../components/Footer/Footer';
import DashBoardPage from '../Dashboard/Dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Switch>
          <Route exact path="/login" render={({ history }) => 
            <LoginPage history={history}/>
          } />
          <Route exact path="/signup" render={({ history }) => 
            <SignUpPage history={history}/>
          } />
          <Route exact path="/dashboard" render={() => 
            <DashBoardPage />
          } />
          <Route path="/*" render={() => 
            <div className="error">
              <h2>404</h2>
              <h2>Nothing to See Here</h2>
            </div>
          } />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
