import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from '../Log In/LogIn';
import SignUpPage from '../Sign Up/SignUp';
import Footer from '../../components/Footer/Footer';
import DashBoardPage from '../Dashboard/Dashboard';
import HistoryPage from '../History/History';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { User } from '../../types';
import { getUserFromToken } from '../../localStorage';

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    let currentLoggedInUser = getUserFromToken();
    if (currentLoggedInUser) {
      setUser(currentLoggedInUser)
    } 
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        <Switch>
          <Route exact path="/" render={({ history }) => (
            user ? 
              <DashBoardPage history={history} user={user} />
                :
              <LoginPage history={history} />  
          )} />
          <Route exact path="/login" render={({ history }) => 
            <LoginPage history={history}/>
          } />
          <Route exact path="/signup" render={({ history }) => 
            <SignUpPage history={history}/>
          } />
          <PrivateRoute exact path="/dashboard" component={(props: any) => 
            <DashBoardPage history={props.history} user={user}/>
          } />
          <PrivateRoute exact path="/history" component={(props: any) => 
            <HistoryPage history={props.history} user={user}/>
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
