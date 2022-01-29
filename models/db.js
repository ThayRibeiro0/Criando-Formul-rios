const Sequelize = require('sequelize')
//Conexao com o banco de dados Mysql
const sequelize = new Sequelize('postapp', 'suporte', 'Usbw@2951', {
    host: "10.0.0.108",
    dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}