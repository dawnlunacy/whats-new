import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
    console.log(props.localNews)
    return (
     props.localNews.map(local => {
            return <NewsArticle 
                        key={local.id}
                        img={local.img}
                        headline={local.headline}
                        description={local.description}
                        url={local.url}
                    />
        })
        
    
 
    )
}
    


export default NewsContainer;