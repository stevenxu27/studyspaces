import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
// import About from './About';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/search" component={Search} />
        <Route path="/view-building" component={ViewBuilding} /> */}
      </Switch>
    </Router>
  );
}

export default App;
