import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import App from './Time';

import Modal from './Modal/Modal';
import Order from './Order/Order';

describe('testing App component', ()=> {
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	it('should render componentDidMount()', ()=> {
		let wrapper = shallow(<App />)
		expect.assertions(1)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'getRestaurantData')
		instance.componentDidMount()
		expect(instance.getRestaurantData).toHaveBeenCalledTimes(1)
	})

	it('should render state', ()=> {
		let wrapper = shallow(<App />)
		expect.assertions(3)
		expect(wrapper.state().isModalOpen).toEqual(false)
		expect(wrapper.state().data).toEqual(null)
		expect(wrapper.state().order).toEqual('')
	})

	it('should check toggleModal(true)', ()=> {
		let wrapper = shallow(<App />)
		expect.assertions(4)
		expect(wrapper.state().isModalOpen).toEqual(false)
		expect(wrapper.state().order).toEqual('')

        wrapper.instance().toggleModal(true)
        expect(wrapper.state().isModalOpen).toEqual(false)
        expect(wrapper.state().order).toEqual('')
	})

	it('should check toggleModal(false)', ()=> {
		let wrapper = shallow(<App />)
		let instance = wrapper.instance()

		jest.spyOn(instance, 'importingComponent')
		instance.toggleModal(false)
        expect(instance.importingComponent).toHaveBeenCalledTimes(1)
	})

	it('should check button #order-change', ()=> {
		let wrapper = shallow(<App />)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'toggleModal')
		wrapper.find('#order-change').simulate('click')
		expect(instance.toggleModal).toHaveBeenCalledTimes(1)
	})

	it('should check importingComponent', ()=> {
		let wrapper = shallow(<App />)

		expect(wrapper.state().isModalOpen).toEqual(false)
		expect(wrapper.state().order).toEqual('')
		
		wrapper.instance().toggleModal(false)

	})
})


describe('testing Portals', ()=> {
	//=========================================================>
	//Testing Portals
	//=========================================================>

	let modalRoot
	let body
	let component

	beforeAll(() => {
		modalRoot = global.document.createElement('div')
		modalRoot.setAttribute('id', 'modal-root')
		body = global.document.querySelector('body')
		body.appendChild(modalRoot)
	})

	it('should render Order component in Modal component', () => {
	expect.assertions(4)

	expect(modalRoot.hasChildNodes()).toBeFalsy()
    component = mount(
      <Modal>
        <Order />
      </Modal>,
    )
    expect(component.find(Order).exists()).toBeTruthy()
    expect(modalRoot.hasChildNodes()).toBeTruthy()
    component.unmount()
    expect(modalRoot.hasChildNodes()).toBeFalsy()

  })
})