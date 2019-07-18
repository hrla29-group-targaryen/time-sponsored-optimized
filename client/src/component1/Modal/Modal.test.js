import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Modal from './Modal';

describe('testing Modal component', ()=> {

	beforeAll(() => {
		const modalRoot = global.document.createElement('div');
		modalRoot.setAttribute('id', 'modal-root');
		const body = global.document.querySelector('body');
		body.appendChild(modalRoot);
	})

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Modal />).length).toEqual(1)
	})

})
