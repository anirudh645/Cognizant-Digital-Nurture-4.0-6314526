import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import TrainersList from './Component/trainerlist';
import TrainerDetail from './Component/TrainerDetails';
import trainermock from './trainermock';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Academy Trainers App</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px', textDecoration: 'underline', color: '#007bff' }}>
            Home
          </Link>
          <span> | </span>
          <Link to="/trainers" style={{ marginLeft: '10px', textDecoration: 'underline', color: '#007bff' }}>
            Show Trainers
          </Link>
        </nav>
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList trainers={trainermock} />} />
            <Route path="/trainer/:id" element={<TrainerDetail trainers={trainermock} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
