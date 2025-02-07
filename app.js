const express=require("express");
const app=express();
//Require de las rutas//
const routsControl=require("./routes/routs");

//Requerir dotenv
require("dotenv").config();

//declaro constante y requiero path para manejar motor de ejs
const path=require("path");

//seteo motor de ejs
//configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine",".ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routsControl);
app.use("/error404",routsControl);
app.use("/ctrlgustos",routsControl);
app.use("/servicios",routsControl);
app.use("/contacto",routsControl);

app.listen(process.env.PORT,()=>{
    console.log("ready");
    console.log("svr listen and ready in the port: " + process.env.PORT);
}) 

