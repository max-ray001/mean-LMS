const router = require("express").Router();
const verify = require("../middleware/verifyToken");

const adminController = require("../controllers/admin.controller");

router.get("/alladmins", verify, adminController.allAdmins);

router.get("/allmembers", verify, adminController.allMembers);

router.get("/alllibrarians", verify, adminController.allLibrarians);

router.get("/allusers", verify, adminController.allUsers);

router.post("/users", verify, adminController.addUser);

router.get("/users/:id", verify, adminController.getUser);

router.put("/users/:id", verify, adminController.updateUser);

router.delete("/users/:id", verify, adminController.deleteUser);

router.post("/", verify, adminController.addAdmin);

router.get("/:id", verify, adminController.getAdmin);

router.put("/:id", verify, adminController.updateAdmin);

router.delete("/:id", verify, adminController.deleteAdmin);

module.exports = router;
