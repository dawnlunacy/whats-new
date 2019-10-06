import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

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

  searchNewsFor = (newsToSearch) => {
    // this.setState({...Object.values(this.state)})
  }

  render () {
    return (
      <div className="app">
        <main>
            <Menu menu={this.state} />
            <SearchForm searchNewsFor={this.searchNewsFor} />
            <NewsContainer news={this.state.local}/>
            
        </main>
        
      </div>
    );
  }
}

export default App;
