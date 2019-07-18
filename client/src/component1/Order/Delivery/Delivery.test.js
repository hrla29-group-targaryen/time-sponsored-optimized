import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Delivery from './Delivery';

describe('testing Delivery component', ()=> {

	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<Order />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Delivery />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<Delivery />)
		expect.assertions(7)
		expect(wrapper.find('.order-delivery-exit button').text()).toEqual('X')
		expect(wrapper.find('.order-delivery-exit h3').text()).toEqual('Your order settings')
		expect(wrapper.find('.order-delivery-pickup-buttons-delivery').text()).toEqual('Delivery')
		expect(wrapper.find('.order-delivery-pickup-buttons-pickup').text()).toEqual('Pickup')
		expect(wrapper.find('.order-delivery-whenwouldyou h5').text()).toEqual('When would you like your order?')
		expect(wrapper.find('.order-delivery-address h5').text()).toEqual('Delivery address')
		expect(wrapper.find('.order-delivery-update button').text()).toEqual('Update')
	})

	//enzyme props.data
	it('should render props', ()=> {
		let mockdata = {
			waitingtime : "25-35"
		}
		let wrapper = shallow(<Delivery data={mockdata}/>)
		expect(wrapper.find(".order-delivery-whenwouldyou button span").props().children).toEqual(`(${mockdata.waitingtime}m)`)
	})

	//enzyme pickup button
	it('should render pickup button', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Delivery route_changer={mockRoute_changer}/>)
		wrapper.find('#order-delivery-pickup-buttons-pickup').simulate('click')
		expect(inputCompare).toEqual('pickup')
	})

	//enzyme schdule button
	it('should render schdule button', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Delivery route_changer={mockRoute_changer}/>)
		wrapper.find('#order-delivery-whenwouldyou').simulate('click')
		expect(inputCompare).toEqual('schedule')
	})
})
