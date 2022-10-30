const Users = require("../model/user");
const Issues = require("../model/issuebook");
const bcrypt = require("bcryptjs");
const Admins = require("../model/admin");

exports.allAdmins = async (req, res) => {
  if (req.role === "admin") {
    try {
      const admins = await Admins.find();
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.getAdmin = async (req, res) => {
  if (req.role === "admin") {
    try {
      const admin = await Admins.findById(req.params.id);
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.addAdmin = async (req, res) => {
  if (req.role === "admin") {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const admin = new Admins({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
      phone_no: req.body.phone_no,
    });

    try {
      const a1 = await admin.save();
      res.status(200).json(a1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.updateAdmin = async (req, res) => {
  if (req.role === "admin") {
    try {
      const admin = await Admins.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.deleteAdmin = async (req, res) => {
  if (req.role === "admin") {
    try {
      const admin = await Admins.findById(req.params.id);
      const a1 = await admin.remove();
      res.status(200).json(a1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.allLibrarians = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const librarians = await Users.find({ roles: true });
      res.status(200).json(librarians);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.allMembers = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const librarians = await Users.find();
      res.status(200).json(librarians);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.allUsers = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const users = await Users.find({ roles: false });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.getUser = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const user = await Users.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.addUser = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Users({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_no: req.body.phone_no,
      password: hashedPassword,
      address: req.body.address,
      roles: req.body.roles,
      joined_date: req.body.joined_date,
    });

    try {
      const u1 = await user.save();
      res.status(200).json(u1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.updateUser = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const user = await Users.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.deleteUser = async (req, res) => {
  if (req.role === "admin" || req.role === "librarian") {
    try {
      const issue = await Issues.deleteMany({ user_id: req.params.id });
      const user = await Users.findById(req.params.id);
      const u1 = await user.remove();
      res.status(200).json(u1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};
