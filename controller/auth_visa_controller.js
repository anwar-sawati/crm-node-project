const { Visa_Registration } = require("../Models/Visa.js");
const { Company } = require("../Models/company.js");

// ______________ for Generate a Random number_______________________________________use in company data
function generateRandomUniqueString(length = 3, prefix = "AOEP-") {
  const characters = "0123456789";
  let uniqueString = prefix;
  for (let i = 0; i < length; i++) {
    uniqueString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return uniqueString;
}

//  _____________________________for Visa_Registration___________________________

class visaController {
  // async visaRegistration(req, res){
  static visaRegistration = async (req, res) => {
    //  console.log(req.body);

    const {
      Company,
      // Company_Name,
      // Country,
      Agency_File_No,
      Visa_No,
      Sponsor,
      Visa_Date,
      Visa_Expire_Date,
      Total_Visa_Quantity,
      CareOfName,
      CareOfAddress,
      CareOfCell,
      Miscellaneous,
      VisaAthourity,
    } = req.body;

    const Visa_user = new Visa_Registration({
      Hash_id: `#${generateRandomUniqueString()}`,
      Company,
      // Company_Name,
      // Country,
      Agency_File_No,
      Visa_No,
      Sponsor,
      Visa_Date,
      Visa_Expire_Date,
      Total_Visa_Quantity,
      CareOfName,
      CareOfAddress,
      CareOfCell,
      Miscellaneous,
      VisaAthourity,
      status: "",
    });
    await Visa_user.save();
    console.log(Visa_user);
    res.redirect("/visa-list");
  };

  //  async visaGet(req,res){
  static visaGet = async (req, res) => {
    const companies = await Company.find();
    //.populate("Company");
    //   const companies= await Company.find();
    //console.log(companies);
    res.render("visa-add", { companies });
  };

  // for update visa form  or edit data

  static editVisa = async (req, res) => {
    const visadata = await Visa_Registration.findById(req.params._id);
    const companies = await Company.find();
    res.render("visa-edit", { visadata, companies });
  };

  static update_VisaById = async (req, res) => {
    const update = await Visa_Registration.findByIdAndUpdate(
      req.params._id,
      req.body
    );
    console.log(update);
    res.redirect("/visa-list");
  };

  static visa_list = async (req, res) => {
    const visadata = await Visa_Registration.find().populate("Company");
    console.log(visadata);
    res.render("visa-list", { visadata });
  };

  static delete_VisaById = async (req, res) => {
    const deletevisa = await Visa_Registration.findByIdAndDelete(
      req.params._id
    );
    console.log(deletevisa);
    res.redirect("/visa-list");
  };
}

module.exports = visaController;
