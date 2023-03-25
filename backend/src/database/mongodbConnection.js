const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connecting to mongodb database named pclone
// .connect(`mongodb+srv://amol:amol@ecommerce.v2dyyvu.mongodb.net/pentkart`
mongoose
  .connect(`mongodb://127.0.0.1:27017/pclone`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `\nYour application is connected to MongoDB database successfully.\n`
    );
  })
  .catch((e) => {
    console.log(`\nOops...Connection to MongoDB database is failed.\n`);
  });

module.exports = { mongoose };
