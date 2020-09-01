const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Short Urls for you'
//   })
// })

// app.get('/url/:id', (req, res) => {
//   //TODO: get a short url by id
// })

// app.get('/:id', (req, res) => {
//   //TODO: redirect to URL
// })

// app.post('/url', (req, res) => {
//   //TODO:
// })

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
