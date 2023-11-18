function multipleMongooseToObject(mongooses) {
  return mongooses.map(mongooses => mongooses.toObject())
}
function mongooseToObject(mongoose) {
  return mongoose ? mongoose.toObject() : mongoose
}
module.exports = { multipleMongooseToObject, mongooseToObject }