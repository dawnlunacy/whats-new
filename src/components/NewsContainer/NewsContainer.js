import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
    const news = props.news.map(story => {
        return <NewsArticle 
                    key={story.id}
                    img={story.img}
                    headline={story.headline}
                    description={story.description}
                    url={story.url}
                />
        })
    return (
        <section className="newsContainer"> 
            {news}
        </section>
       
        
    
 
    )
}
    


export default NewsContainer;