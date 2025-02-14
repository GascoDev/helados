const express=require("express");
const app=express();
//declaro constante y requiero path para manejar motor de ejs
const path=require("path");

//Requerir dotenv
require("dotenv").config();

//seteo motor de ejs
//configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine",".ejs");
app.use(express.static(path.join(__dirname,"public")));

//Require de las rutas//
const routsControl=require("./routes/routs");
const indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use("/",routsControl);
app.use("/error404",routsControl);
app.use("/ctrlgustos",routsControl);
app.use("/servicios",routsControl);
app.use("/contacto",routsControl);

app.listen(process.env.PORT,()=>{
    console.log("ready");
    console.log("svr listen and ready in the port: " + process.env.PORT);
}) 

