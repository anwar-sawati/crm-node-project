
const mongoose= require("mongoose");

const companySchema =new mongoose.Schema({
    //Hash_id: String,
    Date:String,
    Company_Name: String,
     Website: String,
     Telephone_No: String,
      Cell_No:String,
     Country: String,
     //Status: String
     email: String,
     postalAddress: String,
     Type:String
  });

  const Company = new mongoose.model("Company", companySchema);

  module.exports ={Company};