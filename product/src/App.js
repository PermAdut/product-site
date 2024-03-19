import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './routes/NotFound';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
