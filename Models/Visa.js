const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema({
  Hash_id: String,
  Company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  Country: String,
  Agency_File_No: String,
  Visa_No: String,
  Sponsor: String,
  Visa_Date: String,
  Visa_Expire_Date: String,
  Total_Visa_Quantity: String,
  CareOfName: String,
  CareOfAddress: String,
  CareOfCell: String,
  Miscellaneous: String,
  VisaAthourity: String,
  status: String,
});

const Visa_Registration = new mongoose.model("Visa_Registration", visaSchema);

module.exports = { Visa_Registration };
