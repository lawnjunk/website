const express = require('express')
const app = express()

if(process.env.NODE_ENV === 'development'){
  app.get('/api/content', (req, res) => {
    res.json({lulwat: 'cool beans'})
  })
}

app.listen(process.env.PORT, () => console.log('serverup ::', process.env.PORT))
