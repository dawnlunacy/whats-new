import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
    it('should match the news container snapshot with all data passed in correctly', () => {
        const articles = [
            {
            id: 11,
            headline: "PugSweaterCeption",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_nzKAPAFYGHX6mSTun5HTDv3H84TxGOp9XLXovVMRQC1isQdUw",
            desciption: " Pug breaks the internet with cuteness",
            url: "https://imgur.com/t/pugly/rYptNJ9"
        },
        {
            id: 22,
            headline: " Robbie's Favorite",
            img: "https://i.pinimg.com/originals/df/ad/d7/dfadd7765de8e922206401f0529cae9a.jpg",
            desciption: "Pugs in Sweater Take Over The World",
            url: "https://www.pinterest.nz/pin/575546027375685533/"
        }]
        const wrapper = shallow(<NewsContainer 
            news = { articles }/>)

    expect(wrapper).toMatchSnapshot();

    })

})