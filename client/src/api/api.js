let HTTP_Request_URL = (process.env.NODE_ENV === 'development') ? "http://localhost:3400" : "https://time-sponsored.herokuapp.com"

export const APIgetSponsoredData = (axios, id) => {
	return axios.get(`${HTTP_Request_URL}/api/sponsored/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}

export const APIgetRestaurantData = (axios, id) => {
	return axios.get(`${HTTP_Request_URL}/api/data/${id}`)
	.then(data => data.data)
	.catch(e=> e)
}