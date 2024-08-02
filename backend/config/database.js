const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/Ecommerce", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    })

    .then((data) => {
      console.log(`Mogodb Connected : ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
