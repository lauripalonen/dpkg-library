const express = require('express')
const app = express()
const db = require('./db.json')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const packages = db

app.get('/', (req, res) => {
  res.send('<h1>dpkg package library</h1>')
})

app.get('/api/packages', (req, res) => {
  res.json(packages)
})

// app.get('/api/packages/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const package = packages.find(pkg => {
//     console.log(pkg)
//     return (
//       pkg.id === id
//     )
//   })

//   if (package) {
//     response.json(package)
//   } else {
//     response.status(404).end()
//   }

// })

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)