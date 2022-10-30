const IssueBooks = require("../model/issuebook");
const Books = require("../model/book");
const moment = require("moment");

exports.bookUsers = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const bookusers = await IssueBooks.find({ book_id: req.params.id });
      res.status(200).json(bookusers);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.userBooks = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const userbooks = await IssueBooks.find({ user_id: req.member._id });
      res.status(200).json(userbooks);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.bulkDelete = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      let deleteddata = await Books.deleteMany({
        _id: { $in: req.body.deleteid },
      });
      res.status(200).json(deleteddata);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.bulkUpload = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    if (Array.isArray(req.body)) {
      for (let element of req.body) {
        const newBooks = new Books(element);
        try {
          const saveBooks = await newBooks.save();
          res.status(200).json(saveBooks);
        } catch (err) {
          res.status(500).json("Error" + err);
        }
      }
    }
  } else res.json("Access denied");
};

exports.pending = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const pending = await IssueBooks.find({ status: "Pending" });
      res.status(200).json(pending);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.returned = async (req, res) => {
  if (req.role === "librarian" || req.role === "admin") {
    try {
      const returned = await IssueBooks.find({ status: "Returned" });
      res.status(200).json(returned);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
  } else res.json("Access denied");
};

exports.fineEntry = async (req, res) => {
  // if (!req.body.return_date) return res.json("Return date required");
  if (req.role === "librarian" || req.role === "admin") {
    let dueDate = new Date(moment(req.body.due_date).format("YYYY-MM-DD"));
    let returnedDate = new Date(
      moment(req.body.return_date).format("YYYY-MM-DD")
    );
    let dd = moment([
      dueDate.getFullYear(),
      dueDate.getMonth(),
      dueDate.getDate(),
    ]);
    let rd = moment([
      returnedDate.getFullYear(),
      returnedDate.getMonth(),
      returnedDate.getDate(),
    ]);

    if (returnedDate > dueDate) {
      let days = rd.diff(dd, "days");
      console.log(days);
      if (days > 0 && days <= 7) {
        fine = 0;
      } else if (days >= 7) {
        fine = 1 * days - 7;
      }

      await IssueBooks.findByIdAndUpdate(req.params.id, {
        $set: {
          return_date: req.body.return_date,
          status: "Returned",
          no_of_days: days,
          fine_amount: fine,
        },
      });
      res.status(200).json(`You have to pay fine amount Rs. ${fine} .`);
    } else if (returnedDate < dueDate) {
      await IssueBooks.findByIdAndUpdate(req.params.id, {
        $set: {
          return_date: req.body.return_date,
          status: "Returned",
        },
      });
      res.json("Book Returned");
    }
  } else res.json("Access denied");
};
