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
import { FaMapMarked } from 'react-icons/fa'
import { FaCogs } from 'react-icons/fa';
import { FaTicketAlt } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      technology: technology,
      entertainment: entertainment,
      science: science,
      health: health,
      currentTopic: local,
      currentDisplay: local,
      icons: [FaMapMarked, FaCogs, FaTicketAlt, FaRocket, FaHeartbeat]
    }

  }

  // componentDidMount() {
  //   fetch("https://whats-new-api.herokuapp.com/api/v1/news")
  //   .then(data => data.json())
  //   .then(data => this.setState({
  //     local: data.local, 
  //     technology: data.technology,
  //     entertainment: data.entertainment,
  //     science: data.science,
  //     health: data.health}))
  //   .catch(error => console.log(error))
  // }

  searchNewsFor = (newsToSearch) => {
    const findTopicInNews = this.state.currentTopic.filter(article => article.headline.toUpperCase().includes(newsToSearch) || article.description.toUpperCase().includes(newsToSearch))
    this.setState({currentDisplay: findTopicInNews})
  }

  toggleCurrentSelected = (event) => {
    const selectedTopic = event.target.classList[0];
    console.log(selectedTopic)
    this.setState({currentTopic: this.state[selectedTopic]})
    this.setState({currentDisplay: this.state[selectedTopic]})
  
  }

  render () {
    return (
      <div className="app">
        <main>
            <Menu menu={this.state} toggleCurrentSelected={this.toggleCurrentSelected}/>
            <div className="mainWrapper">
            <SearchForm searchNewsFor={this.searchNewsFor} />
            <NewsContainer news={this.state.currentDisplay}/>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
