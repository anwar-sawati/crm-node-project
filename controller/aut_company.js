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

class companycontroller {
  //  //____________________________________________________________________________// For Company Form
  // Create data and  store  into the database

  static createcompanyData = async (req, res) => {
    //console.log("Request Body",req.body)

    const companyInfo = new Company({
      Date: req.body.Date,
      Company_Name: req.body.Company_Name,
      Website: req.body.Website,
      Telephone_No: req.body.Telephone_No,
      Cell_No: req.body.cell_No,
      Country: req.body.Country,
      email: req.body.email,
      postalAddress: req.body.postalAddress,
      Type: req.body.Type,
    });

    const result = await companyInfo.save();
    res.redirect("company_list");
    console.log(result);
  };

  static getAlldoc = async (req, res) => {
    //console.log(req.body.Company_Name);
    const companies = await Company.find();
    //console.log(getcompany)
    res.render("company-addss", { companies });
  };

  static Edit_company = async (req, res) => {
    // console.log("edit data")
    // console.log(req.params._id);
    const result = await Company.findById(req.params._id);
    //console.log(result)

    res.render("Edit_company", { result });
  };

  static update_companyById = async (req, res) => {
    // console.log(req.params._id)
    // console.log(req.body)
    const update = await Company.findByIdAndUpdate(req.params._id, req.body);
    console.log(update);
    res.redirect("/company_list");
  };

  static Delete_companyById = async (req, res) => {
    // console.log(req.params._id);

    const deletedata = await Company.findByIdAndDelete(req.params._id);
    console.log(deletedata);
    res.redirect("/company_list");
  };

  static company_list = async (req, res) => {
    const result = await Company.find();
    //console.log(result)
    res.render("company-listss", { result });
  };
}

module.exports = { companycontroller };
