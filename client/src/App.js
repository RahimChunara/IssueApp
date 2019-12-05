import React from 'react';
import Login from './components/Login';
import IssuePage from './components/IssuePage';
import CreateIssue from './components/CreateIssue';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueDetails from './components/IssueDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/issue" component={IssuePage} />
      <Route exact path="/createissue" component={CreateIssue} />
      <Route exact path="/issue/:_id" component={IssueDetails} />
    </div>
    </Router>
  );
}

export default App;