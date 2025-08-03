import React, { useState } from 'react';
import './App.css';
import Home from './Components/flagComponent';

// ES6 Features: Arrow function component
const App = () => {
  // ES6 Features: let with useState hook for state management
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button onClick={() => setFlag(!flag)}>
          Toggle
        </button>
      </div>
      <Home flag={flag} />
    </div>
  );
};

export default App;
