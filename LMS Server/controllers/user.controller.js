const IssueBooks = require("../models/issuebook");
const Books = require("../models/book");
const Users = require("../models/user");

exports.userBooks = (req, res) => {
  console.log(req.role);
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    res.status(200).json(res.paginatedResult);
  } else res.send("Access denied");
};

exports.page = function paginatedData(model) {
  return async (req, res, next) => {
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);

    const results = {};

    try {
      let userbookcollection = await model.find({ user_id: req.member._id });
      collectionSize = Object.keys(userbookcollection).length;

      results.result = await model
        .find({ user_id: req.member._id })
        .limit(limit)
        .skip(offset)
        .exec();

      (results.collectionSize = collectionSize),
        (res.paginatedResult = results);

      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};

exports.bookcount = async (req, res) => {
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    const pendcount = await IssueBooks.find({
      book_id: req.params.id,
      status: "Pending",
    });

    const book = await Books.findById(req.params.id);

    if (!pendcount.length) {
      await Books.findByIdAndUpdate(req.params.id, {
        available_books: book.quantity,
      });
      res.status(200).json({ available_books: book.quantity });
    } else {
      let availablecount = Math.abs(pendcount.length - book.quantity);
      await Books.findByIdAndUpdate(req.params.id, {
        available_books: availablecount,
      });
      res.status(200).json({ available_books: availablecount });
    }
  } else res.send("Access denied");
};

exports.getUserSign = async (req, res) => {
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    try {
      const user = await Users.findById(req.member._id);
      console.log();
      res.status(200).json(user);
    } catch (err) {
      res.send("Error " + err);
    }
  } else res.send("Access denied");
};
