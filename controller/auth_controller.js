
// const express = require("express")
//  const app = express();

const { Login_Registration, Candidate_Registration} = require("../Models/RegSchema.js");

//const {Company}= require("../Models/company.js")
//const {Visa_Registration}= require("../Models/Visa.js");
// const {visaPermission}= require("../Models/visapermission.js");


// ______________ for Generate a Random number_______________________________________use in company data
 function generateRandomUniqueString(length = 3, prefix = 'AOEP-') {
  const characters = '0123456789';
  let uniqueString = prefix;
  for (let i = 0; i < length; i++) {
      uniqueString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return uniqueString
}




class logincontroller{

//_____________________________ For Create ------ Login_Registration______________________________________

 static register = async(req, res)=>{
    const {FirstName,LastName,email,Password }= req.body

  const user = new Login_Registration({
    FirstName,
     LastName,
     email,
     Password,   });
     await user.save()   
     console.log(user)
      res.redirect("/login"); }
 
//___________________________________for Get_____Login_Registration /check email_______________


static checkEmail = async(req, res)=>{
  try {
    const email = req.body.email;
     const Password = req.body.Password


   const useremail= await Login_Registration.findOne({email:email})
   console.log(useremail)
   if(!useremail){
   return res.send("user not found")
   }
   if(useremail.Password===parseInt(Password)){
    res.render("index");
   }
   else{
    res.send("wrong user")
   }
  } catch (error) {
    console.log(error)
  }}


}





// //  //____________________________________________________________________________// For Company Form 
// // Create data and  store  into the database
  
//   static createcompanyData = async(req,res)=>{

//       //console.log("Request Body",req.body)

//        const companyInfo = new Company({
//          Date: req.body.Date,
//         Company_Name :req.body.Company_Name,
//          Website:req.body.Website,
//         Telephone_No:req.body.Telephone_No,
//         Cell_No:req.body.cell_No,
//         Country:req.body.Country,
//         email: req.body.email,
//         postalAddress: req.body.postalAddress,
//         Type: req.body.Type
//       });
      
//        const result=await companyInfo.save();
//        res.redirect("company_list")
//         console.log(result) }

   
// static getAlldoc = async(req, res)=>{
//   //console.log(req.body.Company_Name);
//   const companies= await Company.find()
//   //console.log(getcompany)
//   res.render("company-addss",{companies})
// }
 
 
// static Edit_company = async(req, res)=>{

//   // console.log("edit data")
//   // console.log(req.params._id);
//   const result = await Company.findById(req.params._id);
//   //console.log(result)

//   res.render("Edit_company", {result})
// }


// static update_companyById = async(req, res)=>{
//   // console.log(req.params._id)
//   // console.log(req.body)
//   const update= await Company.findByIdAndUpdate(req.params._id, req.body)
//   console.log(update)
//   res.redirect("/company_list")
// }


// static Delete_companyById = async(req, res)=>{
//  // console.log(req.params._id);

//   const deletedata =await Company.findByIdAndDelete(req.params._id);
//    console.log(deletedata)
//   res.redirect("/company_list")
// }


// static company_list= async (req,res)=>{
//   const result =await Company.find();
//   //console.log(result)
//   res.render("company-listss",{result})

// }

// }
// //  _____________________________for Visa_Registration___________________________

// class visaController{
  
//     // async visaRegistration(req, res){
//       static visaRegistration=async(req, res)=>{
        
//     //  console.log(req.body);
      
//     const {Company,Country,Agency_File_No, Visa_No, Sponsor, Visa_Date, Visa_Expire_Date, Total_Visa_Quantity,
//       CareOfName,
//       CareOfAddress,
//       CareOfCell,
//       Miscellaneous,
//       VisaAthourity,
      
//     }=req.body;
       

//     const Visa_user= new Visa_Registration({
//       Hash_id:`#${generateRandomUniqueString()}`,Company,Country,Agency_File_No, Visa_No, Sponsor, Visa_Date, Visa_Expire_Date, Total_Visa_Quantity,CareOfName,
//       CareOfAddress,
//       CareOfCell,
//       Miscellaneous,
//       VisaAthourity,
//       status:""
//     });
//     await Visa_user.save();
//    // console.log(Visa_user);
//     res.redirect("/visa-list");

//      }
     
     
//     //  async visaGet(req,res){
//      static visaGet= async(req,res)=>{
//       //const visadata= await Visa_Registration.find();
//       const companies= await Company.find();
//       console.log(companies);
//       res.render("visa-add",{companies})
//     }

//     // for update visa form  or edit data

//     static editVisa= async(req,res)=>{
//       const visadata= await Visa_Registration.findById(req.params._id)
//       res.render("visa-edit",{visadata})
//     }

//     static update_VisaById= async(req,res)=>{
//       const update= await Visa_Registration.findByIdAndUpdate(req.params._id, req.body)
//       console.log(update);
//       res.redirect("/visa-list")

//     }

    
// static visa_list= async (req,res)=>{
//   const visadata= await Visa_Registration.find().populate('Company');
//   //console.log(visadata)
//   res.render("visa-list",{visadata})

// }

// static delete_VisaById= async(req,res)=>{
//   const deletevisa= await Visa_Registration.findByIdAndDelete(req.params._id)
//   console.log(deletevisa)
//   res.redirect("/visa-list");
// }

// }


//  class visaPermissionController{
  

//   // create data for visa permission and  store  into  the database
// static createVisaPermission = async(req,res)=>{

//  // console.log("Request Body",req.body)       
//   const {agencyFileNo, companyName,addpermissionNo, permissionDate, PTN_No}=req.body;
//   const permissionData= new visaPermission({
//     agencyFileNo, companyName,addpermissionNo, permissionDate, PTN_No
//   })
//   await permissionData.save()
//   console.log(permissionData)

// }



//   static getVisaPermission = async(req, res)=>{

//     const permissiondata= await visaPermission.find().populate('Visa_Registration')
//     console.log(permissiondata)
//  res.render("visa-add-permission")
 

//   }



// }
 

// __________________________________ Candidate_Registration___________________________________
class candidateController {

  
   //for Create  Candidate data  and  store into  the database

  static candidateRegistration =async(req,res)=>{
    

 
    const {  Date,
      Emigrants_Registration_No,
      Candiate_Name,
      Candiate_Father_Name,
      CNIC,
      DateOf_Birth,
      PlaceOf_Birth,
      Address,
      Mobile,
      Candiate_No,
      email,
      About}=req.body;
  
  const candidateUser= new Candidate_Registration({
    
    Date,
      Emigrants_Registration_No,
      Candiate_Name,
      Candiate_Father_Name,
      CNIC,
      DateOf_Birth,
      PlaceOf_Birth,
      Address,
      Mobile,
      Candiate_No,
      email,
      About
  })
   await candidateUser.save();
  
  console.log(candidateUser);

  
  }

  //  for get Candidate data  form 
   static getCandidateData(req,res){
    res.render("candidate-add");
   }

  
}
    //module.exports={getAlldoc, companyData};    //companyData};

    module.exports ={logincontroller, candidateController};