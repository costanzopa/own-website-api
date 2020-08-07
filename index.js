const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 8080;
const { API_VERSION, IP_SERVER, PORT_DB, HOST_DB } = require('./config');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(
  `mongodb://${HOST_DB}:${PORT_DB}/own-website-api-db`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('La conexion a la base de datos es correcta.');

      app.listen(port, () => {
        console.log('######################');
        console.log('###### API REST ######');
        console.log('######################');
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
