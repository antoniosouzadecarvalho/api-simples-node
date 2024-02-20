const express = require("express");
const app = express();

//Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DataBase
const connection = require("./api/models/DataBase");

    connection.authenticate()
        .then(() => {
            console.log("Banco de dados conectado com sucesso!")

            const apiRoutes = require("../routes/apiRoutes");
            app.use("/", apiRoutes);

            app.listen(3000, () => {
            console.log("Servidor iniciado! PORTA: 3000");
            })
        })
        .catch((e) => {
            console.log(e)
        })

