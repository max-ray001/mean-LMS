const mongoose = require("mongoose");

const issuebooksSchema = mongoose.Schema(
  {
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    issue_date: {
      type: Date,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    return_date: {
      type: String,
      default: "nil",
    },
    status: {
      type: String,
      default: "Pending",
    },
    no_of_days: {
      type: String,
      default: "nil",
    },
    fine_amount: {
      type: String,
      default: "nil",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IssueBooks", issuebooksSchema);
