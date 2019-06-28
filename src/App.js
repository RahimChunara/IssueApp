import React from 'react';
import Login from './components/Login';
import IssuePage from './components/IssuePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/issue" component={IssuePage} />
    </div>
    </Router>
  );
}

export default App;