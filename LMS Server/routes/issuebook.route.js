const router = require("express").Router();
const verify = require("./verifyToken");

const issueBookController = require("../controllers/issuebook.controller");

router.get("/", verify, issueBookController.allIssues);

router.post("/", verify, issueBookController.addIssue);

router.get("/:id", verify, issueBookController.getIssue);

router.put("/:id", verify, issueBookController.updateIssue);

router.delete("/:id", verify, issueBookController.deleteIssue);

module.exports = router;
