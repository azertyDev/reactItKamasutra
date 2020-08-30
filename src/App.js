import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  const dialogComponent = () => <DialogsContainer store={props.store} />;
  const profileComponent = () => <ProfileContainer store={props.store} />;
  const usersComponent = () => <UsersContainer store={props.store} />;

  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={dialogComponent} />
          <Route path="/profile/:userId?" component={profileComponent} />
          <Route path="/users" render={usersComponent} />
          <Route path="/login" render={LoginPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
