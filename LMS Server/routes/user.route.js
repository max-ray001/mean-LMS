const router = require("express").Router();
const verify = require("./verifyToken");
const IssueBooks = require("../model/issuebook");

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
