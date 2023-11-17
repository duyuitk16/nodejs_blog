const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

  //Để path từ trên xuống
  app.use('/news', newsRouter)
  app.use('/', siteRouter)

}

module.exports = route