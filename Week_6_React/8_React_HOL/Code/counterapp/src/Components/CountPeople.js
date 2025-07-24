import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit = () => {
    this.setState((prevState) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div>
            <button 
              onClick={this.updateEntry}
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Login
            </button>
            <span>{this.state.entrycount} People Entered!!!</span>
          </div>
          
          <div>
            <button 
              onClick={this.updateExit}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Exit
            </button>
            <span>{this.state.exitcount} People Left!!!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;