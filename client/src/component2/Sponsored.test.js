import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Sponsored from './Sponsored';

describe('testing Sponsor component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Sponsored />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<Sponsored />)
		expect.assertions(1)
		expect(wrapper.find('#sponsor-container').text()).toEqual('Sponsored restaurants in your area')
	})

})
