import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM naming convention.
    <div className="App">
      <Router>
      <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <h1>Chat Screen</h1>
              {/* <Chat /> */}
            </Route>
            <Route>
              <h1>Welcome</h1>
            </Route>
          </Switch>
          {/* React-Router -> chat screen  */}
        </div>
      </Router>
      

    </div>
  );
}

export default App;
