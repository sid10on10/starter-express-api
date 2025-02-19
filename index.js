const express = require('express')
const app = express()

const request = require('request')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/cors', (req, res) => {
  request(
    { url: 'https://www.essentiallysports.com/feed/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message:
      err.message })
    }
    
    res.set('Content-Type', 'application/rss+xml')
    res.send(Buffer.from(body))
  })
})
app.listen(process.env.PORT || 3000)