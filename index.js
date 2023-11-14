const express = require('express')
const app = express() //trả về đối tượng để xây dựng website
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})