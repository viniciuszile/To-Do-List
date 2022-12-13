const Express = require("express")
const app = Express();
const Routes = require("./Routes/Router")
const cors = require('cors')

app.use(cors())
app.use(Express.json())
app.use(Routes)

app.listen(3000,()=>{
    console.log("servidor em operação")
})
