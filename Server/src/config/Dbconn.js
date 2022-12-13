const Sequelize = require("sequelize")

const DbConfig = new Sequelize("projeto","root","",{
    dialect:"mysql"
})
module.exports = DbConfig