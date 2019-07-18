import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Time from './Time';

describe('testing Time component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Time />).length).toEqual(1)
	})

	it('should check next days span', ()=> {

		/*
			basic setting for the Time component
		*/
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Time time_changer={mockRoute_changer}/>)

		/*
			pre-setting for basic variables
		*/
		let event = {
			target : {
				value : 10
			}
		}

		wrapper.instance().handleSelect(event)
		expect(inputCompare).toEqual(10)	


	})
	
})
