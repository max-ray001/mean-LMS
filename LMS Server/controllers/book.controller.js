const Books = require("../models/book");
const Issues = require("../models/issuebook");

exports.allBooks = async (req, res) => {
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    try {
      const book = await Books.find();
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.getBook = async (req, res) => {
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    try {
      const book = await Books.findById(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.categoryBooks = async (req, res) => {
  if (req.role === "user" || req.role === "librarian" || req.role === "admin") {
    try {
      const book = await Books.find({ category: req.query.category });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  } else res.json("Access denied");
};

exports.addBook = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    const book = new Books({
      title: req.body.title,
      quantity: req.body.quantity,
      author: req.body.author,
      category: req.body.category,
      isbn: req.body.isbn,
      publication_date: req.body.publication_date,
      publisher: req.body.publisher,
      available_books: req.body.quantity,
    });

    try {
      const b1 = await book.save();
      res.status(200).json(b1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.updateBook = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const book = await Books.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.deleteBook = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const issue = await Issues.deleteMany({ book_id: req.params.id });
      const book = await Books.findById(req.params.id);
      const b1 = await book.remove();
      res.status(200).json(b1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};
