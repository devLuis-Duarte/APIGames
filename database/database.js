const Sequelize = require("sequelize");
const connection = new Sequelize('games', 'root', 'luismiguel123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;