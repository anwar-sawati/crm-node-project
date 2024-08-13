const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    visa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visa_Registration",
    },
    Company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    addPermissionNo: {
      type: String,
    },
    permissionDate:
      //  { Date: new Date("<YYYY-mm-dd>") },

      { type: Date, default: Date.now },

    // default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,

    PTN_No: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const visaPermission = new mongoose.model("visaPermission", permissionSchema);
module.exports = { visaPermission };
