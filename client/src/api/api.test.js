import { APIgetSponsoredData, APIgetRestaurantData } from './api';
// import mocXios from 'axios';
let HTTP_Request_URL = (process.env.NODE_ENV === 'development') ? "http://localhost:3400" : "https://time-sponsored.herokuapp.com"

const fakeData = {
	title: "james is handsome",
	uid: 1
}

describe('testing api calls', ()=> {
	it('APIgetSponsoredData should give us an object', () => {
	  expect.assertions(3)
	  let mocXios = {
	  	get: jest.fn(()=> Promise.resolve({data: fakeData}))
	  }
	  expect(APIgetSponsoredData(mocXios, '100')).resolves.toEqual(fakeData)
	  expect(mocXios.get).toHaveBeenCalledTimes(1)
	  expect(mocXios.get).toBeCalledWith(`${HTTP_Request_URL}/api/sponsored/100`)
	})
})

describe('testing api calls should fail', ()=> {
	it('should fail', () => {
	  expect.assertions(1)
	  let fakeXios = {
	  	get: jest.fn(() => Promise.reject(new Error("failed")))
	  }
	  expect(APIgetSponsoredData(fakeXios)).resolves.toThrow('failed')
	})
})

describe('testing api calls', ()=> {
	it('APIgetRestaurantData should give us an object', () => {
	  expect.assertions(3)
	  let mocXios = {
	  	get: jest.fn(()=> Promise.resolve({data: fakeData}))
	  }
	  expect(APIgetRestaurantData(mocXios, '100')).resolves.toEqual(fakeData)
	  expect(mocXios.get).toHaveBeenCalledTimes(1)
	  expect(mocXios.get).toBeCalledWith(`${HTTP_Request_URL}/api/data/100`)
	})
})

describe('testing api calls should fail', ()=> {
	it('should fail', () => {
	  expect.assertions(1)
	  let fakeXios = {
	  	get: jest.fn(() => Promise.reject(new Error("failed")))
	  }
	  expect(APIgetRestaurantData(fakeXios)).resolves.toThrow('failed')
	})
})
