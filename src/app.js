const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../pages/views')
const partialsPath = path.join(__dirname, '../pages/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicPath))


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

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page Not Found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})