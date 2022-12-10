const router = require("express").Router();
const verify = require("../middleware/verifyToken");

const librarianController = require("../controllers/librarian.controller");

router.post("/bulkupload", verify, librarianController.bulkUpload);

router.post("/bulkdelete", verify, librarianController.bulkDelete);

router.get("/userbooks", verify, librarianController.userBooks);

router.get("/status/pending", verify, librarianController.pending);

router.get("/status/returned", verify, librarianController.returned);

router.put("/fineentry/:id", verify, librarianController.fineEntry);

router.get("/bookusers/:id", verify, librarianController.bookUsers);

module.exports = router;
