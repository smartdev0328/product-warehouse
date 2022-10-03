const db = require("../models");
const Type = db.type;

exports.getAllList = (req, res) => {
  Type.
    find().
    exec((err, types) => {
      if (err) {
        res.status(500).send("Server Error");
      }
      res.status(200).send(types);
    });
}