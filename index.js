const express = require('express')
bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const strings = []

app.post('/', (req, res) => {
	const { string } = req.body
	strings.push(string)
	res.send(string)
})

app.get('/', (req, res) => {
	res.send(strings.join('\n'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
