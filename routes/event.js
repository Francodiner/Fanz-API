const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const { validateFields } = require("../middlewares/validator");

//Controllers
const { getEvent, getAllEvents } = require("../controllers/event");

router.get(
  "/:eventId",
  [check("eventId", "Event id is required.").not().isEmpty(), validateFields],
  getEvent
);

router.get("/", [], getAllEvents);

module.exports = router;
