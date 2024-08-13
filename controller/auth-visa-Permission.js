const { visaPermission } = require("../Models/visapermission.js");

const { Visa_Registration } = require("../Models/Visa.js");

class visaPermissionController {
  // create data for visa permission and  store  into  the database
  static createVisaPermission = async (req, res) => {
    // console.log("Request Body",req.body)
    const {
      visa,
      // Company,
      addpermissionNo,
      permissionDate,
      PTN_No,
    } = req.body;
    const permissionData = new visaPermission({
      visa,
      // Company,
      addpermissionNo,
      permissionDate,
      PTN_No,
    });
    await permissionData.save();
    console.log(permissionData);
    res.redirect("/visa-list");
  };

  static getVisaPermission = async (req, res) => {
    const visaData = await Visa_Registration.find().populate("Company");
    // .populate("Visa");
    console.log(visaData);

    res.render("visa-add-permission", { visaData });
  };
}

module.exports = visaPermissionController;
