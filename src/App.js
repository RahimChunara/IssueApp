import React from 'react';
import Login from './components/Login';
import IssuePage from './components/IssuePage';
import CreateIssue from './components/CreateIssue';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {createStore} from 'redux';
import allissues from './reducers'; 

const store = createStore(allissues);

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/issue" component={IssuePage} />
      <Route exact path="/createissue" component={CreateIssue} />
    </div>
    </Router>
  );
}

export default App;