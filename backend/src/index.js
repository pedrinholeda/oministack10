const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect("mongodb://localhost/OminiStack10", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("conectado ao banco MONGODB");
  })
  .catch(err => {
    console.log("error ao conectar no banco " + err);
  });

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Indentificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.listen(3333);
