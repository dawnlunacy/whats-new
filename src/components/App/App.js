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
      health: health,
      currentSelected: local
    }
  }

  searchNewsFor = (newsToSearch) => {
    // this.setState({...Object.values(this.state)})
  }

  toggleCurrentSelected = (event) => {
    const selectedTopic = event.target.classList[0];
    this.setState({currentSelected: this.state[selectedTopic]})
  }

  render () {
    return (
      <div className="app">
        <main>
            <Menu menu={this.state} toggleCurrentSelected={this.toggleCurrentSelected} />
            <div className="mainWrapper">
            <SearchForm searchNewsFor={this.searchNewsFor} />
            <NewsContainer news={this.state.currentSelected}/>
            </div>
            
            
        </main>
        
      </div>
    );
  }
}

export default App;
