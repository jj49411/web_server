const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

// app.get('', (req, res) => {
//   res.send('Hello world')
// })

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    text: 'Welcome to the weather app!'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    text: "It's a weather app."
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    text: 'Comimg soon.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'London',
    forecast: 'Mostly cloudy. This is currently 11 degrees.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})