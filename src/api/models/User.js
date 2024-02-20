const Sequelize = require("sequelize");
const connection = require("./DataBase");

const User = connection.define("Users", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

User.sync({ force: false});

module.exports = User;