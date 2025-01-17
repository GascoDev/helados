const principal=(req,res)=>{
    res.render("./pages/index");
};

const vista1=(req,res)=>{
    res.render("./pages/vista1");
}

const vista2=(req,res)=>{
    res.render("./pages/vista2");
}

const vista3=(req,res)=>{
    res.render("./pages/vista3");
}

const error404=(req,res)=>{
    res.render("./pages/error404");
}

module.exports={principal, vista1, vista2, vista3, error404};