const Sequelize = require("sequelize");

const DataBase = new Sequelize("project-01", "root", "NHCJ@7130", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = DataBase