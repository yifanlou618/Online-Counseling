const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema (
    {
        name: String,
        phone: String,
        email: String,
        price: String,
        yearOfJoin: Number
    }
);

module.exports = mongoose.model("Data", DataSchema);