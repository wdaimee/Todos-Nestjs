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

export interface EditState {
  id?: string;
  title?: string;
  notes?: string;
  dueDate?: string;
}

function App() {
  // Logged in user state
  const [user, setUser] = useState<User>();

  // Show Modal for Adding Todo
  const [show, setShow] = useState<boolean>(false);

  // Show Modal for Editing Todo
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // State to edit Todo
  const [editTodoDetails, setEditTodoDetails] = useState<EditState>({
    id: '',
    title: '',
    notes: '',
    dueDate: ''
  });

  // Update page tab title to "Todos!" when app mounts
  useEffect(() => {
    document.title = "Todos!"
  }, []);

  // Set user state on initial load if user logged in
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
              <LoginPage history={history} setUser={setUser} />  
          )} />
          <Route exact path="/login" render={({ history }) => 
            <LoginPage history={history} setUser={setUser} />
          } />
          <Route exact path="/signup" render={({ history }) => 
            <SignUpPage history={history} setUser={setUser} />
          } />
          <PrivateRoute exact path="/dashboard" component={DashBoardPage} 
            show={show} user={user} setShow={setShow} editTodoDetails={editTodoDetails} setEditTodoDetails={setEditTodoDetails}
            showEditModal={showEditModal} setShowEditModal={setShowEditModal}
          />
          <PrivateRoute exact path="/history" component={HistoryPage} 
            show={show} user={user} setShow={setShow} editTodoDetails={editTodoDetails} setEditTodoDetails={setEditTodoDetails}
            showEditModal={showEditModal} setShowEditModal={setShowEditModal}
          />
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
