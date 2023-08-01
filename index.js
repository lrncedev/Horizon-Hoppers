const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('pages/landing-page.ejs')
})



app.listen(3000, ()=> {
    console.log('listening on port 3000')
})