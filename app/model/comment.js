module.exports = (mongoose) => {
 const schema = mongoose.Schema(
  {
   videoID: String,
   comment: String,
   nama: String,
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

 return mongoose.model('comment', schema);
};
