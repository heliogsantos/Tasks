import React from 'react';
import './App.css';

import Header from './components/Header'
import Board from './components/Board'
import { TaskContextProvider } from './contexts/TaskContext';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Header />
        <Board />
      </TaskContextProvider>
    </div>
  );
}

export default App;
