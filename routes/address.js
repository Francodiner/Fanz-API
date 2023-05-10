const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const { validateFields } = require("../middlewares/validator");

//Controllers
const { getAddressData } = require("../controllers/address");

router.get(
  "/:address",
  [check("address", "Address is required.").not().isEmpty(), validateFields],
  getAddressData
);

module.exports = router;
