import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    let wrapper;
    const mockSearchNewsFor = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<SearchForm searchNewsFor={mockSearchNewsFor}/>)
    });
    
    it ('should match the SearchForm snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should set the state based on an event', () => {
        const searchEvent = {
            target: {
                name: "input",
                value: "Chicken"
            }
        }
        wrapper.instance().handleChange(searchEvent);

        expect(wrapper.state('input')).toEqual(searchEvent.target.value)
    })
})