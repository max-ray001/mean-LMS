const JWT = require("jsonwebtoken");
const Admins = require("../models/admin");
const Users = require("../models/user");

module.exports = async function (req, res, next) {
  const val = req.header("Authorization");
  if (!val) return res.status(401).json("Access denied");
  try {
    let token = val.replace(/^Bearer\s/, "");
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    const admin = await Admins.findById(verified._id);
    if (admin) req.role = "admin";
    else {
      const members = await Users.findById(verified._id);
      if (members.roles) req.role = "librarian";
      else req.role = "user";
    }
    req.member = verified;
    next();
  } catch (err) {
    res.status(400).json("Invalid member");
  }
};
