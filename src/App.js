import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        items: []
    };
  }

  render() {
      return (
      <div className = "App">
            Initial Set Up
      </div>
  );
  }
}

export default App;