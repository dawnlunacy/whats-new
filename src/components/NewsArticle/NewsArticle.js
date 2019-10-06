import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <article className="newsArticle"> 
            <img src={props.img} alt="" className="newsImage" width="300" height="200"/> 
            <h3> {props.headline}</h3>
            <p>{props.description}</p>
            <footer>
                <a href={props.url}>Link to article</a> 
            </footer>
        </article>
    )
}

export default NewsArticle;