
// Express

const express= require("express");
const app= express();
const path = require("path");
const ejs= require("ejs")
require("../Db_Config/db_config")

//const Registration = require("../Models/RegSchema");
const Auth_router =require("../Routes/router")
 bodyParser = require("body-parser")
 
//const staticpath=path.join(__dirname, '../public')
//const templatePath= path.join(__dirname, "../views")
//...................................
const partialpath= path.join(__dirname,  "../views")
console.log(__dirname)
// templates engine

app.set("view engine", "ejs")
app.set("views",partialpath)      //templatePath)
//hbs.registerPartials(partialpath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

 app.use("/",express.static(partialpath));
 app.use("/Edit_company",express.static(partialpath));
 app.use("/Edit_Visa",express.static(partialpath));



//  app.get("/test", (req,res)=>{
//   res.red("test")
  
  //res.render("Registration")
  //res.render("index")


   app.use("/" ,Auth_router);

 

 

  







//  app.post("/login", async(req, res)=>{
  //   const user=new login(req.body)
  //   user.save().then(()=>{
  //     console.log(user)
  //   }).catch((error)=> console.log(error))
  //  console.log(user)

  //  const email= req.body.email;
  //  const password= req.body.password;
  //    console.log(email)
  //    console.log(password)

  //  const useremail= await login.findOne({email:email})
   
  //  console.log(useremail.email)
  // res.send(useremail.password)
  // console.log(useremail)

  // let user = await login.findOne({email: req.body.email, password:req.body.password});   
  //   if (user) res.status(400).render("about");

  // res.send(user)
  //  if(useremail.password===password){
  //   //res.render("about")
  //   res.send("wellcome")
  //  }

  //  else{
  //   //res.send("invalid login detials")
  //   res.send("wrong user")
  //  }


//    console.log(req.body.UserName);
//    console.log(Password)
     //})

 
 app.listen(3000, ()=>{
   
    console.log("listening to  the port no 8000")
 })


 