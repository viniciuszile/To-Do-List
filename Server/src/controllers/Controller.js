const TaskModel = require("../models/TaskTable")
const UserModel = require("../models/User")
class Controllers{
    static async CreateDatabase(req,res){
        try{
            await Controllers.RelationUserTask();
            await UserModel.sync({force:false})
            await TaskModel.sync({force:false})
            // res.send("Banco criado")
        }
        catch(ex){
            console.log(ex)
        }
    }
    static async RegisterUser(req,res){
        const {email,password} = req.body
        try{
            await UserModel.create({
                email,
                password
            })
            res.send("Usuário criado")
        }
        catch(ex){
            console.log(ex)
        }
    }

    static async GetTasks(req,res){
        try{
            const {id} = req.params
            Controllers.RelationUserTask();
            const tasks = await UserModel.findAll({where:{id},include:TaskModel})
            console.log(tasks)
            return res.json(tasks)
        }
        catch(ex){
            console.log(ex)
        }
    }

    static async CreateTask(req,res){
        try{
            const {name,description} = req.body;
            console.log(req.body)
            const {id} = req.params
            Controllers.RelationUserTask();
            await TaskModel.create({
                name,
                description,
                userId:id
            })            
            res.send("Task Criada!")
        }
        catch(ex){
            console.log(ex)
        }
    }
    static async Login(req,res){
        try{
            const {email,password} = req.body
            const User = await UserModel.findOne({where:{email,password}})
            console.log(User)
            if(User.length>0){
                return res.json({msg:"Usuário não encontrado",status:"failed"})
            }
            else{
                console.log(User.id)
                return res.json({msg:"Usuário encontrado",Id:User.id,status:"sucess"})
            }
        }
        catch(ex){
            console.log(ex.message)
        }
        
    }
    static async RelationUserTask(){
        await UserModel.hasMany(TaskModel,{
        })
        await TaskModel.belongsTo(UserModel,{
        })
    }
}
module.exports = Controllers