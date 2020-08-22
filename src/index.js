const { locale } = require("moment");
const mongoose = require("mongoose");
const app = require("./app");
const {
  API_VERSION,
  IP_SERVER,
  PORT_SERVER,
  PORT_DB,
  HOST_DB,
} = require("./config");
const port = process.env.PORT || PORT_SERVER;
const host = process.env.HOST || IP_SERVER;
const db_url = process.env.DB_URL ||
  `mongodb://${HOST_DB}:${PORT_DB}/own-website-api-db`;

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
        console.log(`http://${host}:${port}/api/${API_VERSION}/`);
      });
    }
  },
);
