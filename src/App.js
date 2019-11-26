import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfessionList from './pages/ProfessionList';

function App() {
  return (
    <Router>
      <Route exact path="/"></Route>
      <Route path="/list">
        <ProfessionList />
      </Route>
    </Router>
  );
}

export default App;
