const routes = require('express').Router()
const Grubhub = require('./database/models')

routes.get('/data/:id', (req,res)=> {
	const {id} = req.params
	Grubhub.findOne({ "id": Number(id) })
	.exec((err, docs)=> {
		if (err) {
			res.send("error")
		} else {
			res.send(docs) // an object
		}
	})
})

routes.get('/sponsored/:id', (req,res)=> {
	const {id} = req.params
	let gt = Number(id) + 1
	let lt = Number(id) + 14
	if (lt > 100) {
		gt = gt - 50
		lt = lt - 50
	}
	Grubhub.find({ "id" : {$gt : gt, $lt : lt}})
	.exec((err, docs)=> {
		if (err) {
			res.send("error")
		} else {
			res.send(docs) // an array
		}
	});
})

module.exports = routes