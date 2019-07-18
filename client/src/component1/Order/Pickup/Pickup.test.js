import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pickup from './Pickup';

describe('testing Pickup component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Pickup />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<Pickup />)
		expect.assertions(4)
		expect(wrapper.find('.order-delivery-exit button').text()).toEqual('X')
		expect(wrapper.find('.order-delivery-exit h3').text()).toEqual('Your order settings')
		expect(wrapper.find('.order-delivery-whenwouldyou h5').text()).toEqual('When would you like your order?')
		expect(wrapper.find('.order-delivery-update button').text()).toEqual('Update')
	})

	//enzyme props.data
	it('should render props', ()=> {
		let mockdata = {
			waitingtime : "25-35"
		}
		let wrapper = shallow(<Pickup data={mockdata}/>)
		expect(wrapper.find(".order-delivery-whenwouldyou button span").props().children).toEqual(`(${mockdata.waitingtime}m)`)
	})

	//enzyme delivery button
	it('should render delivery button', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Pickup route_changer={mockRoute_changer}/>)
		wrapper.find('#order-pickup-delivery-buttons-delivery').simulate('click')
		expect(inputCompare).toEqual('delivery')
	})

	//enzyme schdule button
	it('should render schdule button', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Pickup route_changer={mockRoute_changer}/>)
		wrapper.find('#order-delivery-whenwouldyou').simulate('click')
		expect(inputCompare).toEqual('schedule')
	})
})
