module.exports = (mongoose) => {
 const schema = mongoose.Schema(
  {
   username: {
    type: String,
    required: true,
    unique: true,
   },
   email: {
    type: String,
    required: true,
    unique: true,
   },
   password: {
    type: String,
    required: true,
   },
  },
  {
   timestamps: true,
  }
 );

 schema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;

  return object;
 });

 return mongoose.model('user', schema);
};
