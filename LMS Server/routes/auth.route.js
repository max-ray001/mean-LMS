const router = require("express").Router();
const Users = require("../model/user");
const Admins = require("../model/admin");
const bcrypt = require("bcryptjs");

const JWT = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.json("Login Success");
});

router.post("/adminregister", async (req, res) => {
  const admin = await Admins.findOne(
    { email: req.body.email },
    { password: 0 }
  );
  if (admin) return res.status(400).json("Email already exist!");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const admins = new Admins({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword,
    phone_no: req.body.phone_no,
  });

  try {
    const savedAdmin = await admins.save();
    res.status(200).json({ admin: savedAdmin._id });
  } catch (err) {
    res.status(400).json({ status: "Failed", msg: err });
  }
});

router.post("/adminlogin", async (req, res) => {
  const admin = await Admins.findOne({ email: req.body.email });
  if (!admin) return res.status(400).json("Invalid Email");

  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).json("Invalid password");

  const token = JWT.sign({ _id: admin._id }, process.env.TOKEN_SECRET);
  res.status(200).json({
    access_token: token,
    username: admin.first_name + " " + admin.last_name,
    admin_id: admin._id,
    role: "admin",
  });
});

router.post("/userregister", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) return res.status(400).json("Email already exist!");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const users = new Users({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_no: req.body.phone_no,
    password: hashedPassword,
    address: req.body.address,
    roles: req.body.roles,
    joined_date: req.body.joined_date,
  });
  console.log(users);

  try {
    const savedUser = await users.save();
    res.status(200).json({ user: savedUser._id });
  } catch (err) {
    res.status(400).json({ status: "Failed", msg: err });
  }
});

router.post("/userlogin", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Invalid Email");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json("Invalid password");

  const token = JWT.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  let role;
  if (user.roles) role = "librarian";
  else role = "user";

  res.status(200).json({
    access_token: token,
    username: user.first_name + " " + user.last_name,
    user_id: user._id,
    role: role,
  });
});

module.exports = router;
