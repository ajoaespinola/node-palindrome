const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello Universe!')
})

app.get('/palindrome/:val', function (req, res) {
	var val = req.params.val // original value
	var valwsp = val.replace(/\s/g, '') // original value without spaces
	var valrvrs = val.split('').reverse().join('') // reversed value
	var valrvrswsp = val.split('').reverse().join('').replace(/\s/g, '') // reversed value without spaces

	console.log("Initial value: " + val)
	console.log("Initial value WTH SPS: " + valwsp)
	console.log("Reverse value: " + valrvrs)
	console.log("Reverse value WTH SPS: " + val.split('').reverse().join('').replace(/\s/g, ''))

	if (valwsp == valrvrswsp){
		res.send("IS A PALINDROME")
	} else {
		res.status(400);
		res.send('IS NOT A PALINDROME');
	}
	// res.send(req.params)
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})