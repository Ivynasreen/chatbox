import React from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Chatbox!</h2>
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
