import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }
        handleChange = event => {
            this.setState({ [event.target.name]: event.target.value })
        };

        searchNews = event => {
            event.preventDefault();

            const newsTopicToSearch = {
                topic: this.props.menuOption,
                keyword: this.state.input
            }

            this.props.searchNewsFor(newsTopicToSearch)

            this.setState({input: ""})
        };

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder="Search for news here"
                name="search"
                value={this.state.input}
                onChange={event => this.handleChange(event)}
                />
                <button onClick ={event => this.searchNews(event)}>Search Now</button>
            </form>
        )
    };
};

export default SearchForm;