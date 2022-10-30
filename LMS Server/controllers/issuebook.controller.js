const IssueBooks = require("../model/issuebook");

exports.allIssues = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const issues = await IssueBooks.find()
        .populate("book_id")
        .populate("user_id")
        .exec();
      res.status(200).json(issues);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.getIssue = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const issue = await IssueBooks.findById(req.params.id)
        .populate("book_id")
        .populate("user_id")
        .exec();

      res.status(200).json(issue);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.addIssue = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    const issue = new IssueBooks(req.body);

    try {
      const i1 = await issue.save();
      res.status(200).json(i1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.updateIssue = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const issue = await IssueBooks.findById(req.params.id, req.body);
      res.status(200).json(issue);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.deleteIssue = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const issue = await IssueBooks.findById(req.params.id);
      const i1 = await issue.remove();
      res.status(200).json(i1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};
