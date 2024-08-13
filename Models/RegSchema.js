
 
const mongoose= require("mongoose");
//const bcrypt= require("bcrypt")




const RegSchema= new mongoose.Schema({
    FirstName: String,
    LastName: String,
    email:String,
    Password:Number
});



// const companySchema =new mongoose.Schema({
//   //Hash_id: String,
//   Date:String,
//   Company_Name: String,
//    Website: String,
//    Telephone_No: String,
//     Cell_No:String,
//    Country: String,
//    //Status: String
//    email: String,
//    postalAddress: String,
//    Type:String
// });



// const permissionSchema=new mongoose.Schema({
//     agencyFileNo: {type:String, required:true},
//     companyName:{type:String, required:true},
//     addPermissionNo:{ type: String},
//     permissionDate:{type:String},
//     PTN_No:{type:String,required:true
//     }
//   })
  



// Candidate_add

const CandidateSchema= new mongoose.Schema({
  //_id:String,
  Date:String,
  Emigrants_Registration_No: String,
  Candiate_Name:String,
  Candiate_Father_Name:String,
  CNIC: Number,
  DateOf_Birth:String,
  PlaceOf_Birth:String,
  Address: String,
  Mobile:Number,
  Candiate_No:String,
  email:String,
  About: String

});





const Login_Registration= new mongoose.model("Login_Registration", RegSchema);
// const Company = new mongoose.model("Company", companySchema);


 const Candidate_Registration= new mongoose.model("Candidate_Registration", CandidateSchema);
 //const visaPermission= new mongoose.model("visaPermission",permissionSchema);
 //module.exports= {visaPermission}; 

module.exports= { Login_Registration , Candidate_Registration};
