const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

// app.get('', (req, res) => {
//   res.send('Hello world')
// })

app.get('/weather', (req, res) => {
  res.send({
    location: 'London',
    forecast: 'Mostly cloudy. This is currently 11 degrees.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})