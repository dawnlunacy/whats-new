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
                keyword: this.state.input
            }

            this.props.searchNewsFor(newsTopicToSearch.keyword.toUpperCase());
            this.resetInput();
        };

        resetInput = () => {
            this.setState({input: ''})
        }

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder="Search for news here"
                name="input"
                value={this.state.input}
                onChange={event => this.handleChange(event)}
                />
                <button onClick ={event => this.searchNews(event)}>Search Now</button>
            </form>
        )
    };
};

export default SearchForm;