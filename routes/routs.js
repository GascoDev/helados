const express=require("express");
const {principal,error404,vista1,vista2,vista3}=require("../controllers/routscontrol.js");


routsControl=express.Router();

routsControl.get("/", principal);
routsControl.get("/nosotros",vista1)
routsControl.get("/servicios",vista2)
routsControl.get("/contacto",vista3)
routsControl.get("/error404",error404);


//En caso de que la ruta especificada sea erronea, se direcciona a la plantilla ejs error404
//desde allí se redirecciona a el index principal.
routsControl.get("*", (req, res) => {
    res.redirect("/error404");
   
});

module.exports=routsControl;