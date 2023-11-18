const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/f8_education_dev')
    console.log('Connect sucessfully!!!')
  } catch (error) {
    console.log('Connect failure!!!')
  }
}
module.exports = { connect }