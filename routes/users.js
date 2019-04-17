var conn = require("../inc/db");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  conn.query("SELECT * FROM tb_users order by name", (err, results, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
