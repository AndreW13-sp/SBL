const mongoose = require("mongoose");

const URI = "mongodb+srv://swaraj:swaraj13@college-network.7mq62.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const OPTIONS = {
   useUnifiedTopology: true,
   useNewUrlParser: true
};

function connect() {
   mongoose
      .connect(URI, OPTIONS)
      .then(() => console.log("Connection made!"))
      .catch((err) => console.log(err));
   
   mongoose.connection.on("connected", () => {
      console.log("[\u2713] Connected to the MongoDB Atlas!");
   });
   
   mongoose.connection.on("error", (err) => {
      console.log(err.message);
   });
   
   mongoose.connection.on("disconnected", () => {
      console.log("\n\n[✓] Mongodb connection closed!");
   });
   
   process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
   });
}

module.exports = connect;
