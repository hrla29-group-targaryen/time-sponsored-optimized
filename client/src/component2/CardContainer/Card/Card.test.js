import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card';

describe('testing Card component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Card />).length).toEqual(1)
	})

	it('should check state', ()=> {
		let wrapper = shallow(<Card />)
		expect(wrapper.instance().starGenerator(5).length).toEqual(5)
	})

	//enzyme instance().props()
	it('should render props', ()=> {
		let mock_item = {
			categories: ["Japanese", "Chinese"],
			counts: 23,
			id: 14,
			image: "https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg",
			name: "Calvin's Salad",
			ratings: 4,
			waitingtime: "55-65"
		}
		let wrapper = shallow(<Card item={mock_item}/>)
		expect(wrapper.instance().props.item).toEqual(mock_item)	
	})
})
