const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./resources/routes')

//Connect db
const db = require('./config/db')
db.connect()

const app = express() //trả về đối tượng để xây dựng website
const port = 3000

app.use(express.static(path.join(__dirname, 'public'))) //đối với file static, nó sẽ ăn theo public

app.use(express.urlencoded({
  extended: true
})) //middleware xử lí dữ liệu từ form 
app.use(express.json()) //XMLHttpRequest, fetch, axios gửi dl lên server (code js)

//HTTP LOGGER
// app.use(morgan('combined'))

//TEMPLATE ENGINE
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
})) //app xài template engine là handlebars
app.set('view engine', 'hbs') //thiết lập view engine là handlebars
app.set('views', path.join(__dirname, 'resources', 'views')) // thiết lập lại đường dẫn view

route(app) //tất cả route của module nằm trong index cho dễ quản lí

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})