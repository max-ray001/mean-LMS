const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const IssueBooks = require("../models/issuebook");

const userController = require("../controllers/user.controller");

router.get("/user", verify, userController.getUserSign);

router.get(
  "/userbooks",
  verify,
  userController.page(IssueBooks),
  userController.userBooks
);

router.get("/bookcount/:id", verify, userController.bookcount);

module.exports = router;
