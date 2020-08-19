import React, { useState } from 'react';
import LoginPage from '../Log In/LogIn';
import SignUpPage from '../Sign Up/SignUp';
import Footer from '../../components/Footer/Footer';
import DashBoardPage from '../Dashboard/Dashboard';
import HistoryPage from '../History/History';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { User } from '../../types';

function App() {
  const [user, setUser] = useState<User>();

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
          <Route exact path="/dashboard" render={({ history }) => 
            <DashBoardPage history={history} setUser={setUser} user={user}/>
          } />
          <Route exact path="/history" render={({ history }) => 
            <HistoryPage history={history} user={user}/>
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
