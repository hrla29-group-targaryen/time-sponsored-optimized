import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Calendar from './Calendar';

describe('testing Calendar component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Calendar />).length).toEqual(1)
	})

	it('should render text', ()=> {

		let now = new Date()
		let today = now.getDate()
		let month = now.getMonth()
		let mmm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		let mmmyyyy =  mmm[month] + ' ' + now.getFullYear()

		let wrapper = shallow(<Calendar />)
		expect.assertions(4)
		expect(wrapper.find('.order-schedule-items-later-month').text()).toEqual(mmmyyyy)
		expect(wrapper.find('.order-schedule-items-later-days span').length).toEqual(7)
		expect(wrapper.find('#order-today').text()).toEqual(String(today))
		expect(wrapper.find('.calendar-nextdays').length).toEqual(7)
	})

	it('should check next days span', ()=> {

		/*
			pre-setting for basic variables
		*/
		let mmm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		let times = []
		for (let i = 1; i < 8; i++) {
			times.push(new Date().setDate(new Date().getDate() + i))
		}
		let nextdays = []
		for (let i = 0; i < 7; i++) {
			let newDate = new Date(times[i]).getDate()
			let newMonth = new Date(times[i]).getMonth()
			nextdays.push(newDate, mmm[newMonth] + ' ' + newDate)
		}

		/*
			basic setting for the Calendar component
		*/
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Calendar date_changer={mockRoute_changer}/>)

		/*
			basic checking for the strings
		*/
		expect(wrapper.find('#calendar-nextdays1').text()).toEqual(String(nextdays[0]))
		expect(wrapper.find('#calendar-nextdays2').text()).toEqual(String(nextdays[2]))
		expect(wrapper.find('#calendar-nextdays3').text()).toEqual(String(nextdays[4]))
		expect(wrapper.find('#calendar-nextdays4').text()).toEqual(String(nextdays[6]))
		expect(wrapper.find('#calendar-nextdays5').text()).toEqual(String(nextdays[8]))
		expect(wrapper.find('#calendar-nextdays6').text()).toEqual(String(nextdays[10]))
		expect(wrapper.find('#calendar-nextdays7').text()).toEqual(String(nextdays[12]))

		/*
			event-listener 'click' event simualtion
		*/
		wrapper.find('#calendar-nextdays1').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[1]))	
		wrapper.find('#calendar-nextdays2').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[3]))	
		wrapper.find('#calendar-nextdays3').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[5]))
		wrapper.find('#calendar-nextdays4').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[7]))
		wrapper.find('#calendar-nextdays5').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[9]))
		wrapper.find('#calendar-nextdays6').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[11]))
		wrapper.find('#calendar-nextdays7').simulate('click')
		expect(inputCompare).toEqual(String(nextdays[13]))
	})

})
