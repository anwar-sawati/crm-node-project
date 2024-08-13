const Router = require("express");
//const  {checkEmail,companyData}= require("../controller/auth_controller");
//const  {Registration,Company} = require( "../Models/RegSchema");

const {
  logincontroller,
  candidateController,
} = require("../controller/auth_controller");
const { companycontroller } = require("../controller/aut_company");
const visaController = require("../controller/auth_visa_controller");
const visaPermissionController = require("../controller/auth-visa-Permission");
const router = Router();
//const visaController= new visaController();

router.get("/", (req, res) => {
  res.render("page-login");
});

router.get("/Registration", (req, res) => {
  res.render("pages-register");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/users-profile", (req, res) => {
  res.render("users-profile");
});
// router.get("/Dashboard", (req,res)=>{
//   res.render("Dashboard")})

// router.get("/company-list",async (req,res)=>{
//   const companies=await Company.find();
//   console.log(companies)
//   res.render("company-list",{companies})

// })

// router.get("/visa-list", async(req,res)=>{
//   res.render("visa-list")
// })

//  for Login
router.post("/Registration", logincontroller.register);
router.post("/login", logincontroller.checkEmail);

// for Company
router.get("/company_add", companycontroller.getAlldoc);
router.post("/company_add", companycontroller.createcompanyData);

router.get("/Edit_company/:_id", companycontroller.Edit_company);
router.post("/update_company/:_id", companycontroller.update_companyById);
router.post("/Delete_company/:_id", companycontroller.Delete_companyById);

router.get("/company_list", companycontroller.company_list);

//  for Visa_Registration==========================================================================
router.post("/VisaRegistration", visaController.visaRegistration);

// router.post("/VisaRegistration", function(req, res){
//   visaController.visaRegistration
// });
router.get("/VisaRegistration", visaController.visaGet);
router.get("/visa-list", visaController.visa_list);

// for update Visa
router.get("/Edit_Visa/:_id", visaController.editVisa);
router.post("/update-visa/:_id", visaController.update_VisaById);
// for delete visa
router.post("/Delete_Visa/:_id", visaController.delete_VisaById);

// visa add permission
router.post(
  "/visa-add-permission",
  visaPermissionController.createVisaPermission
);
router.get("/visa-add-permission", visaPermissionController.getVisaPermission);

// for candidate
router.post("/candidate-add", candidateController.candidateRegistration);
router.get("/candidate-add", candidateController.getCandidateData);

module.exports = router;

//export default {router};

//  <% var i=1%>
//   <td><%= i++%></td>
