import React, { useState } from 'react';
import './App.css';

function App() {
  // State for counter
  const [counter, setCounter] = useState(5);
  
  // State for currency converter
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Event Handler Methods

  // 1. Increment function
  const increment = () => {
    setCounter(counter + 1);
  };

  // Say Hello function with static message
  const sayHello = () => {
    alert('Hello Member!');
  };

  // Multiple method handler for Increment button
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement function
  const decrement = () => {
    setCounter(counter - 1);
  };

  // 2. Say Welcome function that takes argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // 3. Synthetic Event - OnPress handler
  const onPress = (event) => {
    // Using synthetic event properties
    console.log('Synthetic Event:', event);
    console.log('Event Type:', event.type);
    console.log('Target:', event.target);
    alert('I was clicked');
  };

  // 4. Currency Converter - handleSubmit event
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form default submission
    
    if (amount && currency) {
      // Convert Indian Rupees to Euro (1 Euro = approximately 90 INR)
      if (currency.toLowerCase() === 'euro') {
        const euroAmount = (parseFloat(amount) / 90).toFixed(2);
        setConvertedAmount(`Converting to Euro Amount is ${euroAmount}`);
        alert(`Converting to Euro Amount is ${euroAmount}`);
      } else {
        alert('Please enter "Euro" as currency for conversion');
      }
    } else {
      alert('Please enter both amount and currency');
    }
  };

  // Handle input changes
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        
        {/* Counter Section */}
        <div className="counter-section">
          <h2>Event Handling Examples</h2>
          <h3>Counter: {counter}</h3>
          
          {/* 1. Increment button with multiple methods */}
          <button onClick={handleIncrement} className="btn increment-btn">
            Increment
          </button>
          
          {/* Decrement button */}
          <button onClick={decrement} className="btn decrement-btn">
            Decrement
          </button>
          
          {/* 2. Say Welcome button with argument */}
          <button 
            onClick={() => sayWelcome('welcome')} 
            className="btn welcome-btn"
          >
            Say welcome
          </button>
          
          {/* 3. Synthetic Event button */}
          <button onClick={onPress} className="btn click-btn">
            Click on me
          </button>
        </div>

        {/* Currency Converter Section */}
        <div className="converter-section">
          <h2>Currency Converter!!!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter amount in INR"
                className="input-field"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="currency">Currency:</label>
              <input
                type="text"
                id="currency"
                value={currency}
                onChange={handleCurrencyChange}
                placeholder="Enter Euro"
                className="input-field"
              />
            </div>
            
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </form>
          
          {convertedAmount && (
            <div className="result">
              <p>{convertedAmount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
