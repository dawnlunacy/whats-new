import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import technology from '../../data/technology';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it ('should update state of currentDisplay when searchNewsFor is called', () => {
    //Setup
    const wrapper = shallow(<App />);
    const mockNewsToSearch = 'CHICKEN'; 
    const expected = [{
      id: 2,
      headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
      img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
      description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.",
      url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
      }]
    //Execution
    wrapper.instance().searchNewsFor(mockNewsToSearch)
    //Expectation
    expect(wrapper.state('currentDisplay')).toEqual(expected)

  })

  it('should update currentTopic when toggleCurrentSelected is called with an event', () => {
    //Setup
    const wrapper = shallow(<App />);
    const mockEvent = {
      target: {
          classList: ["technology", "menuItem"]
      }
  }
  //Execution
  wrapper.instance().toggleCurrentSelected(mockEvent);
  //Expectation
  expect(wrapper.state('currentTopic')).toEqual(technology)
  })


})
