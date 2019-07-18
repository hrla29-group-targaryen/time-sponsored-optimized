import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Schedule from './Schedule';

import Calendar from './Calendar/Calendar'
import Time from './Time/Time'

describe('testing Schedule component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Schedule />).length).toEqual(1)
	})

	it('should check state ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(1)
		expect(wrapper.state().button_selected).toEqual('today')	
	})

	it('should check button_changer ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(3)
		wrapper.instance().button_changer("asap")
		expect(wrapper.state().button_selected).toEqual('asap')	
		wrapper.instance().button_changer("today")
		expect(wrapper.state().button_selected).toEqual('today')	
		wrapper.instance().button_changer("later")
		expect(wrapper.state().button_selected).toEqual('later')	
	})

	it('should check time_changer ', ()=> {
		let wrapper = shallow(<Schedule />)
		wrapper.instance().time_changer("11:00am")
		expect(wrapper.state().time_selected).toEqual("11:00am")		
	})

	it('should check date_changer ', ()=> {
		let wrapper = shallow(<Schedule />)
		wrapper.instance().date_changer("Jul 10")
		expect(wrapper.state().date_selected).toEqual("Jul 10")		
	})

	it('should check later_time_changer ', ()=> {
		let wrapper = shallow(<Schedule />)
		wrapper.instance().later_time_changer("Jul 11")
		expect(wrapper.state().later_time_selected).toEqual("Jul 11")		
	})



	it('should check item_view_controller ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect(wrapper.instance().item_view_controller('later', true)).toEqual( <Time time_changer={wrapper.instance().later_time_changer} time_selected={wrapper.state().later_time_selected}/>)
		expect(wrapper.instance().item_view_controller('later')).toEqual(<Calendar date_changer={wrapper.instance().date_changer}/>)
		
	})




	it('should check order-schedule-exit button ', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Schedule route_changer={mockRoute_changer}/>)
		wrapper.find('#order-schedule-exit').simulate('click')
		expect.assertions(1)
		expect(inputCompare).toEqual('delivery')	
	})

	it('should check order-schedule-items-today-select ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(3)
		wrapper.find('#order-schedule-buttons-asap').simulate('click')
		expect(wrapper.state().button_selected).toEqual('asap')	
		wrapper.find('#order-schedule-buttons-today').simulate('click')
		expect(wrapper.state().button_selected).toEqual('today')	
		wrapper.find('#order-schedule-buttons-later').simulate('click')
		expect(wrapper.state().button_selected).toEqual('later')	
	})
})
