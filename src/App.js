import React, { Component } from 'react';
import datas from './datas.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (<div><pre>{JSON.stringify(datas, null, 2) }</pre></div>);
  }
}

export default App;
