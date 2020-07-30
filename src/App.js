import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  const dialogComponent = () => <DialogsContainer store={props.store} />;
  const profileComponent = () => <Profile store={props.store} />;
  const usersComponent = () => <UsersContainer store={props.store} />;

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={dialogComponent} />
          <Route path="/profile" component={profileComponent} />
          <Route path="/users" render={usersComponent} />
        </div>
      </div>
    </Router>
  );
};

export default App;
