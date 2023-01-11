require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;

con.on("open", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected....DB");
});

if (con) {
  console.log("connected succesfull");
} else {
  console.log("not connected");
}
module.exports = con;
