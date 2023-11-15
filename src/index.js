const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express() //trả về đối tượng để xây dựng website
const port = 3000

//HTTP LOGGER
app.use(morgan('combined'))

//TEMPLATE ENGINE
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
})) //app xài template engine là handlebars
app.set('view engine', 'hbs') //thiết lập view engine là handlebars
app.set('views', path.join(__dirname, 'resources/views')) // thiết lập lại đường dẫn view


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})