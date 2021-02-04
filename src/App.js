import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    // BEM naming convention.
    <div className="App">
      <h1>Hello lets do slack  :rock</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Sidebar */}
        {/* React-Router -> chat screen  */}
      </div>

    </div>
  );
}

export default App;
