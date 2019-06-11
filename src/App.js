import React, { Component } from 'react';
import Table from './components/table';
import Users from './data.json';

class App extends Component {
  render() {
    return (
      <Table data={Users}/>
    );
  }
}

export default App;