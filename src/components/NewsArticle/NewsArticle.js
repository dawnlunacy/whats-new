import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <article> 
            <img src={props.img} alt="" width="300" height="200"/> 
            <h3> {props.headlines}</h3>
            <p>{props.description}</p>
            <footer>
                <a href={props.url}>Link to article</a> 
            </footer>
        </article>
    )
}

export default NewsArticle;