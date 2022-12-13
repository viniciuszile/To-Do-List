const Sequelize = require("sequelize")
const DbConfig = require("../config/Dbconn")

const Db = DbConfig.define("user",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    email:{
        type:  Sequelize.STRING,

    },
    password:{
        type:Sequelize.STRING
    }
})
module.exports = Db