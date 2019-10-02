import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <main>
          {/* <section className="newsContainer"> */}
            <NewsContainer news={this.state.local}/>
          {/* </section> */}
        </main>
        
      </div>
    );
  }
}

export default App;
