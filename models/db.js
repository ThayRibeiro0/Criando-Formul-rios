//Conexao com o banco de dados Mysql
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', 'usbw2951', {
    host: "10.0.0.108",
    dialect: 'mysql',
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}