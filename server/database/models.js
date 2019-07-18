const mongoose = require('mongoose');

const GrubhubSchema = new mongoose.Schema({
	id: Number,
	image: String,
	name: {
		type: String,
		default: () => {
			let seed1 = ['Bunny\'s', 'Mickey\'s', 'Mario\'s', 'Yoshi\'s', 'Jeff\'s', 'Calvin\'s', 'Kathleen\'s', 'Ramin\'s', 'Victor\'s', 'Matt\'s', 'Korean', 'Japanese', 'Chinese', 'Mexican', 'American', 'North Korean', 'Thai', 'Taiwanese', 'Vietnamese', 'Canadian']
			let seed2 = ['BBQ', 'Salad', 'Lunch', 'Dinner', 'Wings', 'Sushi', 'Cafe', 'Pizza', 'Food', 'Special']
			return seed1[Math.floor(Math.random() * 20)] + ' ' + seed2[Math.floor(Math.random() * 10)]
		}
	},
	categories: {
		type: [],
		default: () => {
			let seed = ['Korean', 'Japanese', 'Chinese', 'Mexican', 'American'] //5 times from index = 0 to 4
			let oneRandom = Math.floor(Math.random() * 5)
			let twoRandom = Math.floor(Math.random() * 5) //from 0 to 4
			return [seed[oneRandom], seed[twoRandom]]
		}
	},
	ratings: {
		type: Number,
		default: () => {
			let seed = [2.5,3,3.5,4,4.5,5] ///6 items ...  from index = 0 to index = 5
			return seed[Math.floor(Math.random() * 6)] //from 0 to 5
		}
	},
	counts:  {
		type: Number,
		default: () => {
			return Math.floor(Math.random() * 200) + 10
		}
	},
	waitingtime:  {
		type: String,
		default: () => {
			let seed = ['15-25', '25-35', '35-45', '45-55', '55-65'] ///5 items ...  from index = 0 to index = 4
			return seed[Math.floor(Math.random() * 5)] //from 0 to 4
		}
	}
})

const Grubhub = mongoose.model('Grubhub', GrubhubSchema);
module.exports = Grubhub;