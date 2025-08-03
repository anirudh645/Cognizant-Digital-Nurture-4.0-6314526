import React, { useState } from 'react';
import './App.css';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) {
  return (
    <div>
      <h2>Welcome back</h2>
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
      <h2>Welcome Guest User, Please sign up.</h2>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div className="content">
        <Greeting isLoggedIn={isLoggedIn} />
        <div className="auth-buttons">
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout} />
          ) : (
            <LoginButton onClick={handleLogin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
