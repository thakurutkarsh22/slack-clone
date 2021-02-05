import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function App() {
  return (
    // BEM naming convention.
    <div className="app">
      <Router>
      <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
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
