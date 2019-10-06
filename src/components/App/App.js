import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      technology: technology,
      entertainment: entertainment,
      science: science,
      health: health
    }
  }

  render () {
    return (
      <div className="app">
        <main>
            <NewsContainer news={this.state.local}/>
            <Menu menu={this.state} />
        </main>
        
      </div>
    );
  }
}

export default App;
