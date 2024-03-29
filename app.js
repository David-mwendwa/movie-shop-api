const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
	res.json({message: 'Movie shop API!'})
})

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})