import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import { useStateValue } from './Context/StateProvider';

function App() {

  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention.
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): 
        (
          <>
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
          </>
        )}
      </Router>
    

    </div>
  );
}

export default App;
