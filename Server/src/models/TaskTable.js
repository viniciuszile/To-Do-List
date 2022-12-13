const Sequelize = require("sequelize")
const DbConfig = require("../config/Dbconn")


const TaskModel = DbConfig.define("task",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },

    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = TaskModel