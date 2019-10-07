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

    describe('resetInput', () => {
        it('should reset the state of input to an empty string', () => {
            const freshState = {
                input: "Nasa"
            }
            wrapper.setState(freshState);
            expect(wrapper.state()).toEqual(freshState);

            const expected = {
                input: ''
            }

            wrapper.instance().resetInput();
            expect(wrapper.state()).toEqual(expected);
        })
    })

    it('should call searchNewsFor and resetInputs when searchNews is called with an event', () => {
        //Setup
        const mockSearchInput = { input: "Nasa"};
        wrapper.setState(mockSearchInput)
        const mockEvent = { preventDefault: jest.fn() };
        wrapper.instance().resetInput = jest.fn();

        //Execution
        wrapper.instance().searchNews(mockEvent);

        //Expectation
        expect(wrapper.instance().resetInput).toHaveBeenCalled();
        expect(mockSearchNewsFor).toHaveBeenCalledWith("NASA");
    }) 

    it('should run searchNewsFor when the search button is clicked', () => {
        //Setup
        const mockEvent = { preventDefault: jest.fn() };

        //Execution
        wrapper.find('button').simulate('click', mockEvent);

        //Expectation

        expect(wrapper.instance().props.searchNewsFor).toHaveBeenCalledWith("NASA");

    })

    it('should run handleChange when the input is typed in', () => {
        //Setup
        wrapper.instance().handleChange = jest.fn();
        wrapper.instance().forceUpdate();
        const mockEvent = { preventDefault: jest.fn() };
        //Execution
        wrapper.find('input').simulate('change', mockEvent);


        //Expectation
        expect(wrapper.instance().handleChange).toHaveBeenCalled();


    })
})