import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    it('should match the NewsArticle snapshot with the data passed to it', () => {
        const article = {
            id: 22,
            headline: " Robbie's Favorite",
            img: "https://i.pinimg.com/originals/df/ad/d7/dfadd7765de8e922206401f0529cae9a.jpg",
            desciption: "Pugs in Sweater Take Over The World",
            url: "https://www.pinterest.nz/pin/575546027375685533/"
        }
        const wrapper = shallow(<NewsArticle 
            img= {article.img}
            headline={article.headline}
            description={article.description}
            url={article.url}/>)

    expect(wrapper).toMatchSnapshot()
    })
})