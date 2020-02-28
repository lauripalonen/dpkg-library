const express = require('express')
const app = express()
const db = require('./db.json')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const packages = db

app.get('/', (req, res) => {
  res.send('<h1>dpkg library</h1>')
})

app.get('/api/packages', (req, res) => {
  if(packages){
    res.json(packages)
  } else {
    res.status(404).end()
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)