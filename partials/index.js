
// Express

const express= require("express");
const app= express();
const path = require("path");
const ejs= require("ejs")
const connection= require("../db/connection")

const Registration   = require("../db/Reg")
const UserDetials = require("../db/userDetials")
const bodyParser=require("body-parser");

const bcrypt = require("bcrypt")
 //require("./db")
 //bodyParser = require("body-parser")
 
//const templatePath=path.join(__dirname, '../public/templates/views')
//const templatePath= path.join(__dirname, "../views")

//...................................
const templatePath= path.join(__dirname,  "../Templates/views")
console.log(templatePath)
// templates engine


app.set("view engine", "ejs")
app.set("views",templatePath)
//hbs.registerPartials(partialpath);

app.use(express.static(templatePath))
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

//app.use(express.static(path.join(__dirname,  "../Templates/views/assets/css")))
// app.use(express.static("public"))
// app.use("/css",express.static(__dirname+'public/assets/css'))
// app.use("/js",express.static(__dirname+'public/assets/js'))
// app.use("/img",express.static(__dirname+'public/assets/img'))

// app.use("/swf",express.static(__dirname+'public/assets/swf'))
// app.use("/vendor",express.static(__dirname+'public/assets/vendor'))

 




 app.get("/login", (req,res)=>{
   res.render("page-login")
 });


 app.get("/Registration",(req, res)=>{
  res.render("pages-register")
 });

app.get("/CompaniesDetials", (req,res)=>{
  //res.render("users-profile")
  res.render("users-profile")
})
 



 app.post("/login", async(req, res)=>{

  try {
    // 1st method..............
//     const email = req.body.email;
// const Password = req.body.Password
//  2nd  method ....................................
const {email,Password}= req.body;

   const useremail= await Registration.findOne({email})
  // const cpassword= await bcrypt.compare(Password, useremail.Password)
  // console.log(cpassword);
    
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(Password, salt);
  // console.log(hashedPassword)
  // Password = hashedPassword;

      
   

   console.log(useremail)
   if(!useremail){
   return res.send("user not found")
   
   }
   if(useremail.Password===parseInt(Password)){
    res.render("index")
    //res.send("wellcome")

   }
   else{
    res.send("wrong user")
   }
   
    
    
  } catch (error) {
    console.log(error)
  }
})
  //   const user=new login(req.body)
  //   user.save().then(()=>{
  //     console.log(user)
  //   }).catch((error)=> console.log(error))
  //  console.log(user)

// const data={
//    email:req.body.email,
//    Password:req.body.password,
     
// }
// const userdata= await loginModel.insertMany(data)
// console.log(userdata)



// for Registration...............................................

app.post("/Registration", async(req, res)=>{
  //  1st Method >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const Regdata={
//   FirstName :req.body.FirstName,
//   LastName:req.body.LastName,
//   email:req.body.email,
//    Password:req.body.Password,
// }

// 2nd Method >>>>>>>>>>>>>>>>>>>>>>>>
// const Regdata={FirstName, LastName, email, Password}= req.body;
   


//   const RegUser= await Registration.insertMany(Regdata)
  
//   // const cpassword= await bcrypt.compare(Password, RegUser.Password)
//   const result = await RegUser.save();
//   // console.log(cpassword);
//   console.log(RegUser)
//   res.render("page-login")


const user = new Registration({
  FirstName :req.body.FirstName,
 LastName:req.body.LastName,
  email:req.body.email,
  Password:req.body.Password,
  
});
await user.save();
res.redirect("/login");
});




app.post("/UserDetials", async(req,res)=>{


const Userdata={
FullName,
    About,
    Company,
    Job,
    Country,
    Address,
    Phone,
    email,
    TwitterProfile,
    FacebookProfile,
    InstagramProfile,
    LinkedinProfile}=req.body;
  
const User= await UserDetials.insertMany(Userdata)
   console.log(User)
   res.send(User)
   
//    if(useremail.Password==(Password)){
//     res.send("wellcome")
//    }
//    else{
//     res.send("wrong user")
//    }
   
})


  







 app.listen(8000, ()=>{
    console.log("listening to  the port no 8000")
 })


 