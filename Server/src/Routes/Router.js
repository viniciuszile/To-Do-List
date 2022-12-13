const Express = require("express")
const Controllers = require("../controllers/Controller")

const Routes = Express.Router();

Routes.get("/",Controllers.CreateDatabase);

Routes.post("/login",Controllers.Login);
Routes.get("/tasks/:id",Controllers.GetTasks);
Routes.post("/register",Controllers.RegisterUser);
Routes.post("/addTask/:id",Controllers.CreateTask);


module.exports = Routes


